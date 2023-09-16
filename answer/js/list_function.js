// Section for display the data to table
const bodyTable = document.getElementById('bodytable');

const storedData = localStorage.getItem('employees');

if (storedData) {
    const employees = JSON.parse(storedData);

    employees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td class="amount">${employee.allowance}</td>
        `;

        bodyTable.appendChild(row);
    });
}

// For Average in age and allowance
const displayAvg = document.getElementById('resumeData');
const allData = JSON.parse(localStorage.getItem('employees'));

let avgAge = 0;
let avgAllowance = 0;

for (const person of allData) {
    avgAge += person.age;
    avgAllowance += person.allowance;
    console.log(avgAge);
}

avgAge = Math.round(avgAge/allData.length);
avgAllowance = Math.round(avgAllowance/allData.length);

displayAvg.innerHTML = `Rata-rata pendaftar memiliki uang sangu sebesar Rp. ${avgAllowance} dengan rata-rata umur ${avgAge}`;  