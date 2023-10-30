from flask import Flask, request, jsonify, render_template
from flask_pymongo import PyMongo
from bson import ObjectId
import json
from flask import Flask, render_template
from flask_security import Security, SQLAlchemyUserDatastore, UserMixin, RoleMixin, login_required, current_user
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'
app.config['SECRET_KEY'] = 'super-secret'
app.config['SECURITY_REGISTERABLE'] = True
app.config['SECURITY_RECOVERABLE'] = True
app.config['SECURITY_CHANGEABLE'] = True
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['ALLOWED_EXTENSIONS'] = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
app.config['MONGO_URI'] = 'mongodb://localhost:27017/mainDb'
mongo = PyMongo(app)

# render template 
@app.route('/hello')
def hello():
    return render_template('hello.html')

@app.route('/')
def index():
    return render_template('index.html')   

# security
db = SQLAlchemy(app)

roles_users = db.Table('roles_users',
                       db.Column('user_id', db.Integer(), db.ForeignKey('user.id')),
                       db.Column('role_id', db.Integer(), db.ForeignKey('role.id')))

class Role(db.Model, RoleMixin):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(255))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    active = db.Column(db.Boolean())
    confirmed_at = db.Column(db.DateTime())

user_datastore = SQLAlchemyUserDatastore(db, User, Role)
security = Security(app, user_datastore)

@app.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    user = user_datastore.get_user(email)
    if user and user.password == password:
        login_user(user)
        return jsonify({'message': 'Logged in successfully'})
    else:
        return jsonify({'error': 'Invalid email or password'})

@app.route('/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({'message': 'Logged out successfully'})

# login 
@app.route('/')
@login_required
def home():
    return render_template('home.html', user=current_user)

# password recovery 
@app.route('/reset_password', methods=['POST'])
def reset_password():
    email = request.json['email']
    user = user_datastore.get_user(email)
    if user:
        token = security.send_reset_password_instructions(user)
        return jsonify({'message': 'Password reset instructions sent to your email'})
    else:
        return jsonify({'error': 'Invalid email'})

# email confirmation 
@app.route('/confirm/<token>', methods=['GET'])
def confirm_email(token):
    user = user_datastore.confirm_email_token_status(token)
    if user:
        user_datastore.confirm_email(token)
        db.session.commit()
        return jsonify({'message': 'Email confirmed successfully'})
    else:
        return jsonify({'error': 'Invalid token'})

# register
@app.route('/register', methods=['POST'])
def register():
    email = request.json['email']
    password = request.json['password']
    user = user_datastore.create_user(email=email, password=password)
    db.session.commit()
    login_user(user)
    return jsonify({'message': 'Registered and logged in successfully'})

# file 
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return jsonify({'filename': filename})
    else:
        return jsonify({'error': 'File type not allowed'})

# data
@app.route('/api/data', methods=['GET'])
def get_data():
    data = mongo.db.data.find()
    result = []
    for d in data:
        result.append({'id': str(d['_id']), 'name': d['name'], 'value': d['value']})
    return jsonify(result)

@app.route('/api/data/<id>', methods=['GET'])
def get_data_by_id(id):
    data = mongo.db.data.find_one({'_id': ObjectId(id)})
    if data:
        result = {'id': str(data['_id']), 'name': data['name'], 'value': data['value']}
    else:
        result = {'error': 'Data not found'}
    return jsonify(result)

@app.route('/api/data', methods=['POST'])
def add_data():
    name = request.json['name']
    value = request.json['value']
    id = mongo.db.data.insert({'name': name, 'value': value})
    return jsonify({'id': str(id), 'name': name, 'value': value})

@app.route('/api/data/<id>', methods=['PUT'])
def update_data(id):
    name = request.json['name']
    value = request.json['value']
    mongo.db.data.update_one({'_id': ObjectId(id)}, {'$set': {'name': name, 'value': value}})
    return jsonify({'id': id, 'name': name, 'value': value})

@app.route('/api/data/<id>', methods=['DELETE'])
def delete_data(id):
    mongo.db.data.delete_one({'_id': ObjectId(id)})
    return jsonify({'result': True})

if __name__ == '__main__':
    app.run(debug=True)
