from flask import render_template, request, redirect, flash, url_for

# from bson import ObjectId

from application import db
from application import client
from flask import Flask, render_template, request, redirect, url_for, flash
from flask_pymongo import PyMongo
from flask import jsonify
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from itsdangerous import URLSafeTimedSerializer
from bson.objectid import ObjectId
import smtplib

from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
from application import app

login_manager = LoginManager()
login_manager.init_app(app)
s = URLSafeTimedSerializer('static-string')

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


# ... (User class, load_user function, login and register routes) ...
class User(UserMixin):
    def __init__(self, user_data):
        self.id = str(user_data["_id"])
        self.username = user_data["username"]
        self.password_hash = user_data["password_hash"]

@login_manager.user_loader
def load_user(user_id):
    user_data = mongo.db.users.find_one({"_id": ObjectId(user_id)})
    if user_data:
        return User(user_data)
    else:
        return None

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        user_data = mongo.db.users.find_one({"username": username})
        if user_data and check_password_hash(user_data["password_hash"], password):
            user = User(user_data)
            login_user(user)
            return redirect(url_for('dashboard'))
        else:
            return 'Invalid username or password'
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        password_hash = generate_password_hash(password)
        mongo.db.users.insert_one({"username": username, "password_hash": password_hash})
        return redirect(url_for('login'))
    return render_template('register.html')

#password

@app.route('/reset-password', methods=['GET', 'POST'])
def reset_password_request():
    if request.method == 'POST':
        email = request.form.get('email')
        user = mongo.db.users.find_one({"email": email})
        if user:
            token = s.dumps(email, salt='password-reset-salt')
            link = url_for('reset_password', token=token, _external=True)
            # Send the link to the user's email. This is just a simple example and doesn't include any error handling.
            smtplib.SMTP('localhost').sendmail('from@example.com', [email], 'Follow this link to reset your password: ' + link)
            flash('Check your email for the instructions to reset your password')
        else:
            flash('Email not found')
        return redirect(url_for('login'))
    return render_template('reset_password_request.html')

@app.route('/reset-password/<token>', methods=['GET', 'POST'])
def reset_password(token):
    try:
        email = s.loads(token, salt='password-reset-salt', max_age=3600)
    except:
        flash('The password reset link is invalid or has expired')
        return redirect(url_for('login'))
    if request.method == 'POST':
        password = request.form.get('password')
        password_hash = generate_password_hash(password)
        mongo.db.users.update_one({"email": email}, {"$set": {"password_hash": password_hash}})
        flash('Your password has been reset')
        return redirect(url_for('login'))
    return render_template('reset_password.html')

# ... (dashboard and logout routes)
@app.route('/dashboard')
@login_required
def dashboard():
    return 'Logged in as: ' + current_user.username

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)