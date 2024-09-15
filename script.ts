
document.getElementById('resumeform')?.addEventListener('submit', function (event) {
    event?.preventDefault();

    // Type assertions for resume form submission
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const fnameElement = document.getElementById('fname') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    if (nameElement &&
        fnameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {

        // Get values from the form
        const name = nameElement.value;
        const fname = fnameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Create resume output
        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Father's Name:</strong> ${fname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");

            // Create container for buttons
            const buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);

            // Add download PDF button
            const downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", () => {
                window.print();
            });
            buttonsContainer.appendChild(downloadButton);

            // Add shareable link button
            const shareableLinkButton = document.createElement("button");
            shareableLinkButton.textContent = "Copy Shareable Link";
            shareableLinkButton.addEventListener("click", async () => {
                try {
                    const shareableLink = `https://yourdomain.com/resumes/${name.replace(/\s+/g, "_")}-cv.html`;
                    console.log("Shareable link: " + shareableLink);
                    alert(`Shareable link: ${shareableLink}`);
                    await navigator.clipboard.writeText(shareableLink);
                    alert("Shareable link copied successfully");
                } catch (error) {
                    console.error("Shareable link failed to be copied: " + error);
                    alert("Failed to copy shareable link");
                }
            });
            buttonsContainer.appendChild(shareableLinkButton);

        } else {
            console.error("Resume output element not found");
        }
    } else {
        console.error("One or more form elements not found");
    }
});















