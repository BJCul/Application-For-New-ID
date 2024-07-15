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
        {value: "BSA", text: "Bachelor of Science in Accountancy (BSA)"},
        {value: "BSMA", text: "Bachelor of Science in Management Accounting (BSMA)"},
        {value: "BSBAFM", text: "Bachelor of Science in Business Administration Major in Financial Management (BSBAFM)"}
    ],
    CADBE: [
        {value: "BS-ARCH", text: "Bachelor of Science in Architecture (BS-ARCH)"},
        {value: "BSID", text: "Bachelor of Science in Interior Design (BSID)"},
        {value: "BSEP", text: "Bachelor of Science in Environmental Planning (BSEP)"}
    ],
    CAL: [
        {value: "ABELS", text: "Bachelor of Arts in English Language Studies (ABELS)"},
        {value: "ABF", text: "Bachelor of Arts in Filipinology (ABF)"},
        {value: "ABLCS", text: "Bachelor of Arts in Literary and Cultural Studies (ABLCS)"},
        {value: "AB-PHILO", text: "Bachelor of Arts in Philosophy (AB-PHILO)"},
        {value: "BPEA", text: "Bachelor of Performing Arts major in Theater Arts (BPEA)"}
    ],
    CBA: [
        {value: "DBA", text: "Doctor in Business Administration (DBA)"},
        {value: "MBA", text: "Master in Business Administration (MBA)"},
        {value: "BSBAHRM", text: "Bachelor of Science in Business Administration major in Human Resource Management (BSBAHRM)"},
        {value: "BSBA-MM", text: "Bachelor of Science in Business Administration major in Marketing Management (BSBA-MM)"},
        {value: "BSENTREP", text: "Bachelor of Science in Entrepreneurship (BSENTREP)"},
        {value: "BSOA", text: "Bachelor of Science in Office Administration (BSOA)"}
    ],
    COC: [
        {value: "BADPR", text: "Bachelor in Advertising and Public Relations (BADPR)"},
        {value: "BA Broadcasting", text: "Bachelor of Arts in Broadcasting (BA Broadcasting)"},
        {value: "BACR", text: "Bachelor of Arts in Communication Research (BACR)"},
        {value: "BAJ", text: "Bachelor of Arts in Journalism (BAJ)"}
    ],
    CCIS: [
        {value: "BSCS", text: "Bachelor of Science in Computer Science (BSCS)"},
        {value: "BSIT", text: "Bachelor of Science in Information Technology (BSIT)"}
    ],
    COED: [
        {value: "PhDEM", text: "Doctor of Philosophy in Education Management (PhDEM)"},
        {value: "MAEM", text: "Master of Arts in Education Management (MAEM)"},
        {value: "MBE", text: "Master in Business Education (MBE)"},
        {value: "MLIS", text: "Master in Library and Information Science (MLIS)"},
        {value: "MAELT", text: "Master of Arts in English Language Teaching (MAELT)"},
        {value: "MAEd-ME", text: "Master of Arts in Education major in Mathematics Education (MAEd-ME)"},
        {value: "MAPES", text: "Master of Arts in Physical Education and Sports (MAPES)"},
        {value: "MAED-TCA", text: "Master of Arts in Education major in Teaching in the Challenged Areas (MAED-TCA)"},
        {value: "PBDE", text: "Post-Baccalaureate Diploma in Education (PBDE)"},
        {value: "BTLEd", text: "Bachelor of Technology and Livelihood Education (BTLEd)"},
        {value: "BLIS", text: "Bachelor of Library and Information Science (BLIS)"},
        {value: "BSEd", text: "Bachelor of Secondary Education (BSEd)"},
        {value: "BEEd", text: "Bachelor of Elementary Education (BEEd)"},
        {value: "BECEd", text: "Bachelor of Early Childhood Education (BECEd)"}
    ],
    CE: [
        {value: "BSCE", text: "Bachelor of Science in Civil Engineering (BSCE)"},
        {value: "BSCpE", text: "Bachelor of Science in Computer Engineering (BSCpE)"},
        {value: "BSEE", text: "Bachelor of Science in Electrical Engineering (BSEE)"},
        {value: "BSECE", text: "Bachelor of Science in Electronics Engineering (BSECE)"},
        {value: "BSIE", text: "Bachelor of Science in Industrial Engineering (BSIE)"},
        {value: "BSME", text: "Bachelor of Science in Mechanical Engineering (BSME)"},
        {value: "BSRE", text: "Bachelor of Science in Railway Engineering (BSRE)"}
    ],
    CHK: [
        {value: "BPE", text: "Bachelor of Physical Education (BPE)"},
        {value: "BSESS", text: "Bachelor of Science in Exercises and Sports (BSESS)"}
    ],
    CL: [
        {value: "JD", text: "Juris Doctor (JD)"}
    ],
    CPSPA: [
        {value: "DPA", text: "Doctor in Public Administration (DPA)"},
        {value: "MPA", text: "Master in Public Administration (MPA)"},
        {value: "BPA", text: "Bachelor of Public Administration (BPA)"},
        {value: "BAIS", text: "Bachelor of Arts in International Studies (BAIS)"},
        {value: "BAPE", text: "Bachelor of Arts in Political Economy (BAPE)"},
        {value: "BAPS", text: "Bachelor of Arts in Political Science (BAPS)"}
    ],
    CSSD: [
        {value: "BAH", text: "Bachelor of Arts in History (BAH)"},
        {value: "BAS", text: "Bachelor of Arts in Sociology (BAS)"},
        {value: "BSC", text: "Bachelor of Science in Cooperatives (BSC)"},
        {value: "BSE", text: "Bachelor of Science in Economics (BSE)"},
        {value: "BSPSY", text: "Bachelor of Science in Psychology (BSPSY)"}
    ],
    CS: [
        {value: "BSFT", text: "Bachelor of Science Food Technology (BSFT)"},
        {value: "BSAPMATH", text: "Bachelor of Science in Applied Mathematics (BSAPMATH)"},
        {value: "BSBIO", text: "Bachelor of Science in Biology (BSBIO)"},
        {value: "BSCHEM", text: "Bachelor of Science in Chemistry (BSCHEM)"},
        {value: "BSMATH", text: "Bachelor of Science in Mathematics (BSMATH)"},
        {value: "BSND", text: "Bachelor of Science in Nutrition and Dietetics (BSND)"},
        {value: "BSPHY", text: "Bachelor of Science in Physics (BSPHY)"},
        {value: "BSSTAT", text: "Bachelor of Science in Statistics (BSSTAT)"}
    ],
    CTHTM: [
        {value: "BSHM", text: "Bachelor of Science in Hospitality Management (BSHM)"},
        {value: "BSTM", text: "Bachelor of Science in Tourism Management (BSTM)"},
        {value: "BSTRM", text: "Bachelor of Science in Transportation Management (BSTRM)"}
    ]
};

document.getElementById('college').addEventListener('change', function () {
    const collegeSelect = document.getElementById('college');
    const courseSelect = document.getElementById('course');
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

