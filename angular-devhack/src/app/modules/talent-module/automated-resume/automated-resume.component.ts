import { Component } from '@angular/core';

@Component({
  selector: 'app-automated-resume',
  templateUrl: './automated-resume.component.html',
  styleUrls: ['./automated-resume.component.scss']
})
export class AutomatedResumeComponent {

  // generatePDF() {
  //   let doc: jsPDF = new jsPDF();

  //   // Get the generated resume HTML content
  //   let resumeContent = document.getElementById('generatedResume');

  //   if (resumeContent) {
  //     // Add the resume content to the PDF
  //     doc.html(resumeContent.outerHTML, {
  //       callback: function (doc: jsPDF) {
  //         doc.save('generated-resume.pdf');
  //       },
  //       x: 15,
  //       y: 15,
  //     });
  //   }
  // }

}
