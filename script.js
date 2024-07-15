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

// Add event listeners for both PhoneNo and PhoneNo2
document.getElementById('PhoneNo').addEventListener('input', () => validatePhoneNumber('PhoneNo'));
document.getElementById('PhoneNo2').addEventListener('input', () => validatePhoneNumber('PhoneNo2'));

