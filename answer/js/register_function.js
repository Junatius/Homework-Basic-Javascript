class Person {
    constructor(name, age, allowance) {
        this.name = name;
        this.age = age;
        this.allowance = allowance;
    }
}

const personname = document.getElementById('name');
const age = document.getElementById('age');
const allowance = document.getElementById('allowance');
const btn = document.getElementById('submitButton');

function successAlert() {
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', 'alert-success', 'fade', 'show', 'w-25', 'text-center', 'mt-2');
    alertElement.role = 'alert';
    alertElement.textContent = 'Data berhasil dimasukkan';

    document.getElementById('alertpart').appendChild(alertElement);

    setTimeout(function () {
        alertElement.classList.remove('show');
        setTimeout(function () {
            alertElement.remove();
        }, 1000);
    }, 2000);
}

function failAlert(missing = 'data') {
    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', 'alert-danger', 'fade', 'show', 'w-25', 'text-center', 'mt-2');
    alertElement.role = 'alert';
    alertElement.textContent = 'Tolong isi ' + missing + ' sesuai syarat';

    // Append the alert to the container
    document.getElementById('alertpart').appendChild(alertElement);

    // Dismiss the alert after a short delay (e.g., 3 seconds)
    setTimeout(function () {
        alertElement.classList.remove('show');
        setTimeout(function () {
            // Remove the alert element from the DOM
            alertElement.remove();
        }, 1000); // Fading duration
    }, 2000);
}

btn.addEventListener('click', function() {
    const nameValue = personname.value;
    const ageValue = parseInt(age.value, 10);
    const allowanceValue = parseInt(allowance.value, 10);

    if (nameValue.length < 10) {
        document.getElementById('name').value = '';
        failAlert('Nama');
        return;
    } 
    if (ageValue < 25) {
        document.getElementById('age').value = '';
        failAlert('Umur');
        return;
    } 
    if (allowanceValue < 100000 || allowanceValue > 1000000) {
        document.getElementById('allowance').value = '';
        failAlert('Uang Sangu');
        return;
    }

    const data = new Person(nameValue, ageValue, allowanceValue);

    const employeesData = JSON.parse(localStorage.getItem('employees')) || [];

    employeesData.push(data);

    localStorage.setItem('employees', JSON.stringify(employeesData));

    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('allowance').value = '';

    successAlert();
});

