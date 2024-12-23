"use strict";
var _a;
// listing element 
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // type assertion 
    const profilPictureInput = document.getElementById('profilePicture');
    const nameElement = document.getElementById(`name`);
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');
    if (profilPictureInput && nameElement && emailElement && phoneElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        // Picture elements
        const profilePictureFile = (_a = profilPictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        //Create Resume output
        const resumeOutput = `
   <h2>Resume<h2>
   ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
   <p><strong>Name:</strong> ${name}</p>
   <p><strong>Email:</strong> ${email} </p>
   <p><strong>Phone Number:</strong> ${phone} </p>
  
   <h3>Education</h3>
   <p>${education}</p>
  
   <h3>Experience</h3>
   <p>${experience}</p>
  
   <h3>Skills</h3>
   <p>${skills}</p>
  
   `;
        const resumeOutputElement = document.getElementById(`resumeOutput`);
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error(`the resume output elements are missing`);
        }
    }
});
