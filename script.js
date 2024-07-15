const navigateToFormStep = (stepNumber) => {
    /*** Hide steps ***/
    document.querySelectorAll(".form-step").forEach((formStepElement) => {
        formStepElement.classList.add("display-none");
    });
    /*** Mark unfinished ***/
    document.querySelectorAll(".form-progress-list").forEach((formStepHeader) => {
        formStepHeader.classList.add("form-progress-unfinished");
        formStepHeader.classList.remove("form-progress-active", "form-progress-completed");
    });
    
    /*** Show current ***/
    document.querySelector("#step-" + stepNumber).classList.remove("display-none");
    
    /*** Select step circle (progress bar) ***/
    const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
    
    /*** Mark current as active ***/
    formStepCircle.classList.remove("form-progress-unfinished", "form-progress-completed");
    formStepCircle.classList.add("form-progress-active");
    
    /*** Loop through each step  ***/
    for (let index = 0; index < stepNumber; index++) {
        const formStepCircle = document.querySelector('li[step="' + index + '"]');
        if (formStepCircle) {
            formStepCircle.classList.remove("form-progress-unfinished", "form-progress-active");
            formStepCircle.classList.add("form-progress-completed");
        }
    }
};

/*** Select all navigation buttons, loop through them, add listener ***/
document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
    formNavigationBtn.addEventListener("click", () => {
        const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
        const currentStep = document.querySelector(".form-progress-active").getAttribute("step");
        if (stepNumber > currentStep) {
            if (validateFormStep(currentStep)) {
                navigateToFormStep(stepNumber);
            }
        } else {
            navigateToFormStep(stepNumber);
        }
    });
});

const validateFormStep = (stepNumber) => {
    const currentStep = document.querySelector(`#step-${stepNumber}`);
    const inputs = currentStep.querySelectorAll("input, select");
    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
            input.reportValidity();
        }
    });

    return isValid;
};

document.getElementById('sameAddress').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('EmergencyRegion').value = document.getElementById('Region').value;
        document.getElementById('EmergencyProvince').value = document.getElementById('Province').value;
        document.getElementById('EmergencyCity').value = document.getElementById('City').value;
        document.getElementById('EmergencyBarangay').value = document.getElementById('Barangay').value;
        document.getElementById('EmergencyStreet').value = document.getElementById('Street').value;
        document.getElementById('EmergencyPostalCode').value = document.getElementById('PostalCode').value;
    }
});

document.getElementById('newAddress').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('EmergencyRegion').value = '';
        document.getElementById('EmergencyProvince').value = '';
        document.getElementById('EmergencyCity').value = '';
        document.getElementById('EmergencyBarangay').value = '';
        document.getElementById('EmergencyStreet').value = '';
        document.getElementById('EmergencyPostalCode').value = '';
    }
});

/*** Validate phone number ***/
function validatePhoneNumber(inputId) {
    const inputElement = document.getElementById(inputId);
    const phoneNumber = inputElement.value.replace(/\D/g, ''); // Remove non-digit characters
    if (phoneNumber.length === 11) {
        // Valid 11-digit phone number
        inputElement.setCustomValidity('');
    } else {
        // Invalid phone number
        inputElement.setCustomValidity('Please enter an 11-digit phone number.');
    }
}

/*** Add event listeners for both PhoneNo and PhoneNo2 ***/
document.getElementById('PhoneNo').addEventListener('input', () => validatePhoneNumber('PhoneNo'));
document.getElementById('PhoneNo2').addEventListener('input', () => validatePhoneNumber('PhoneNo2'));

const courses = {
    CAF: [
        {value: "Bachelor of Science in Accountancy (BSA)", text: "Bachelor of Science in Accountancy (BSA)"},
        {value: "Bachelor of Science in Management Accounting (BSMA)", text: "Bachelor of Science in Management Accounting (BSMA)"},
        {value: "Bachelor of Science in Business Administration Major in Financial Management (BSBAFM)", text: "Bachelor of Science in Business Administration Major in Financial Management (BSBAFM)"}
    ],
    CADBE: [
        {value: "Bachelor of Science in Architecture (BS-ARCH)", text: "Bachelor of Science in Architecture (BS-ARCH)"},
        {value: "Bachelor of Science in Interior Design (BSID)", text: "Bachelor of Science in Interior Design (BSID)"},
        {value: "Bachelor of Science in Environmental Planning (BSEP)", text: "Bachelor of Science in Environmental Planning (BSEP)"}
    ],
    CAL: [
        {value: "Bachelor of Arts in English Language Studies (ABELS)", text: "Bachelor of Arts in English Language Studies (ABELS)"},
        {value: "Bachelor of Arts in Filipinology (ABF)", text: "Bachelor of Arts in Filipinology (ABF)"},
        {value: "Bachelor of Arts in Literary and Cultural Studies (ABLCS)", text: "Bachelor of Arts in Literary and Cultural Studies (ABLCS)"},
        {value: "Bachelor of Arts in Philosophy (AB-PHILO)", text: "Bachelor of Arts in Philosophy (AB-PHILO)"},
        {value: "Bachelor of Performing Arts major in Theater Arts (BPEA)", text: "Bachelor of Performing Arts major in Theater Arts (BPEA)"}
    ],
    CBA: [
        {value: "Doctor in Business Administration (DBA)", text: "Doctor in Business Administration (DBA)"},
        {value: "Master in Business Administration (MBA)", text: "Master in Business Administration (MBA)"},
        {value: "Bachelor of Science in Business Administration major in Human Resource Management (BSBAHRM)", text: "Bachelor of Science in Business Administration major in Human Resource Management (BSBAHRM)"},
        {value: "Bachelor of Science in Business Administration major in Marketing Management (BSBA-MM)", text: "Bachelor of Science in Business Administration major in Marketing Management (BSBA-MM)"},
        {value: "Bachelor of Science in Entrepreneurship (BSENTREP)", text: "Bachelor of Science in Entrepreneurship (BSENTREP)"},
        {value: "Bachelor of Science in Office Administration (BSOA)", text: "Bachelor of Science in Office Administration (BSOA)"}
    ],
    COC: [
        {value: "Bachelor in Advertising and Public Relations (BADPR)", text: "Bachelor in Advertising and Public Relations (BADPR)"},
        {value: "Bachelor of Arts in Broadcasting (BA Broadcasting)", text: "Bachelor of Arts in Broadcasting (BA Broadcasting)"},
        {value: "Bachelor of Arts in Communication Research (BACR)", text: "Bachelor of Arts in Communication Research (BACR)"},
        {value: "Bachelor of Arts in Journalism (BAJ)", text: "Bachelor of Arts in Journalism (BAJ)"}
    ],
    CCIS: [
        {value: "Bachelor of Science in Computer Science (BSCS)", text: "Bachelor of Science in Computer Science (BSCS)"},
        {value: "Bachelor of Science in Information Technology (BSIT)", text: "Bachelor of Science in Information Technology (BSIT)"}
    ],
    COED: [
        {value: "Doctor of Philosophy in Education Management (PhDEM)", text: "Doctor of Philosophy in Education Management (PhDEM)"},
        {value: "Master of Arts in Education Management (MAEM)", text: "Master of Arts in Education Management (MAEM)"},
        {value: "Master in Business Education (MBE)", text: "Master in Business Education (MBE)"},
        {value: "Master in Library and Information Science (MLIS)", text: "Master in Library and Information Science (MLIS)"},
        {value: "Master of Arts in English Language Teaching (MAELT)", text: "Master of Arts in English Language Teaching (MAELT)"},
        {value: "Master of Arts in Education major in Mathematics Education (MAEd-ME)", text: "Master of Arts in Education major in Mathematics Education (MAEd-ME)"},
        {value: "Master of Arts in Physical Education and Sports (MAPES)", text: "Master of Arts in Physical Education and Sports (MAPES)"},
        {value: "Master of Arts in Education major in Teaching in the Challenged Areas (MAED-TCA)", text: "Master of Arts in Education major in Teaching in the Challenged Areas (MAED-TCA)"},
        {value: "Post-Baccalaureate Diploma in Education (PBDE)", text: "Post-Baccalaureate Diploma in Education (PBDE)"},
        {value: "Bachelor of Technology and Livelihood Education (BTLEd)", text: "Bachelor of Technology and Livelihood Education (BTLEd)"},
        {value: "Bachelor of Library and Information Science (BLIS)", text: "Bachelor of Library and Information Science (BLIS)"},
        {value: "Bachelor of Secondary Education (BSEd)", text: "Bachelor of Secondary Education (BSEd)"},
        {value: "Bachelor of Elementary Education (BEEd)", text: "Bachelor of Elementary Education (BEEd)"},
        {value: "Bachelor of Early Childhood Education (BECEd)", text: "Bachelor of Early Childhood Education (BECEd)"}
    ],
    CE: [
        {value: "Bachelor of Science in Civil Engineering (BSCE)", text: "Bachelor of Science in Civil Engineering (BSCE)"},
        {value: "Bachelor of Science in Computer Engineering (BSCpE)", text: "Bachelor of Science in Computer Engineering (BSCpE)"},
        {value: "Bachelor of Science in Electrical Engineering (BSEE)", text: "Bachelor of Science in Electrical Engineering (BSEE)"},
        {value: "Bachelor of Science in Electronics Engineering (BSECE)", text: "Bachelor of Science in Electronics Engineering (BSECE)"},
        {value: "Bachelor of Science in Industrial Engineering (BSIE)", text: "Bachelor of Science in Industrial Engineering (BSIE)"},
        {value: "Bachelor of Science in Mechanical Engineering (BSME)", text: "Bachelor of Science in Mechanical Engineering (BSME)"},
        {value: "Bachelor of Science in Railway Engineering (BSRE)", text: "Bachelor of Science in Railway Engineering (BSRE)"}
    ],
    CHK: [
        {value: "Bachelor of Physical Education (BPE)", text: "Bachelor of Physical Education (BPE)"},
        {value: "Bachelor of Science in Exercises and Sports (BSESS)", text: "Bachelor of Science in Exercises and Sports (BSESS)"}
    ],
    CL: [
        {value: "Juris Doctor (JD)", text: "Juris Doctor (JD)"}
    ],
    CPSPA: [
        {value: "Doctor in Public Administration (DPA)", text: "Doctor in Public Administration (DPA)"},
        {value: "Master in Public Administration (MPA)", text: "Master in Public Administration (MPA)"},
        {value: "Bachelor of Public Administration (BPA)", text: "Bachelor of Public Administration (BPA)"},
        {value: "Bachelor of Arts in International Studies (BAIS)", text: "Bachelor of Arts in International Studies (BAIS)"},
        {value: "Bachelor of Arts in Political Economy (BAPE)", text: "Bachelor of Arts in Political Economy (BAPE)"},
        {value: "Bachelor of Arts in Political Science (BAPS)", text: "Bachelor of Arts in Political Science (BAPS)"}
    ],
    CSSD: [
        {value: "Bachelor of Arts in History (BAH)", text: "Bachelor of Arts in History (BAH)"},
        {value: "Bachelor of Arts in Sociology (BAS)", text: "Bachelor of Arts in Sociology (BAS)"},
        {value: "Bachelor of Science in Cooperatives (BSC)", text: "Bachelor of Science in Cooperatives (BSC)"},
        {value: "Bachelor of Science in Economics (BSE)", text: "Bachelor of Science in Economics (BSE)"},
        {value: "Bachelor of Science in Psychology (BSPSY)", text: "Bachelor of Science in Psychology (BSPSY)"}
    ],
    CS: [
        {value: "Bachelor of Science Food Technology (BSFT)", text: "Bachelor of Science Food Technology (BSFT)"},
        {value: "Bachelor of Science in Applied Mathematics (BSAPMATH)", text: "Bachelor of Science in Applied Mathematics (BSAPMATH)"},
        {value: "Bachelor of Science in Biology (BSBIO)", text: "Bachelor of Science in Biology (BSBIO)"},
        {value: "Bachelor of Science in Chemistry (BSCHEM)", text: "Bachelor of Science in Chemistry (BSCHEM)"},
        {value: "Bachelor of Science in Mathematics (BSMATH)", text: "Bachelor of Science in Mathematics (BSMATH)"},
        {value: "Bachelor of Science in Nutrition and Dietetics (BSND)", text: "Bachelor of Science in Nutrition and Dietetics (BSND)"},
        {value: "Bachelor of Science in Physics (BSPHY)", text: "Bachelor of Science in Physics (BSPHY)"},
        {value: "Bachelor of Science in Statistics (BSSTAT)", text: "Bachelor of Science in Statistics (BSSTAT)"}
    ],
    CTHTM: [
        {value: "Bachelor of Science in Hospitality Management (BSHM)", text: "Bachelor of Science in Hospitality Management (BSHM)"},
        {value: "Bachelor of Science in Tourism Management (BSTM)", text: "Bachelor of Science in Tourism Management (BSTM)"},
        {value: "Bachelor of Science in Transportation Management (BSTRM)", text: "Bachelor of Science in Transportation Management (BSTRM)"}
    ]
};

document.getElementById('College').addEventListener('change', function () {
    const collegeSelect = document.getElementById('College');
    const courseSelect = document.getElementById('Course');
    const selectedCollege = collegeSelect.value;

    courseSelect.innerHTML = '<option value="">Select Course</option>';

    if (courses[selectedCollege]) {
        courses[selectedCollege].forEach(course => {
            const option = document.createElement('option');
            option.value = course.value;
            option.text = course.text;
            courseSelect.add(option);
        });
    }
});

/*** Submission Alert ***/
document.getElementById('userAccountSetupForm').addEventListener('submit', function(event) {
    alert('Form submitted successfully!');
    
    /*** Redirect to index.html after a short delay ***/
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 1000); 
});

