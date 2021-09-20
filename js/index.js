function generateIdCard(event) {
    event.preventDefault();
    const studentName = document.getElementById("student-name").value;
    const targetStudentName = document.getElementById("generated-student-name");
    targetStudentName.innerHTML = studentName;

    const collegeName = document.getElementById("college-name").value;
    const targetCollegeName = document.getElementById("generated-college-name");
    targetCollegeName.innerHTML = collegeName;

    const locationName = document.getElementById("location-name").value;
    const targetLocationName = document.getElementById("generated-location-name");
    targetLocationName.innerHTML = locationName;

    const generatedIdCardContainer = document.getElementById("generated-id-card");
    generatedIdCardContainer.style.display = "block";
}

function previewImage(event){
    if(event.target.files.length > 0){
        const src = URL.createObjectURL(event.target.files[0]);
        const preview = document.getElementById("file-ip-1-preview");
        preview.src = src;
        preview.style.display = "block";
    }
    const output = document.getElementById("student-image");
    output.src = URL.createObjectURL(event.target.files[0]);
}
