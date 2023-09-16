const employees = [
    {
      name: 'Jonakalie Elhieo',
      age: 25,
      allowance: 750000
    },
    {
      name: 'Alice',
      age: 30,
      allowance: 800000
    },
    {
      name: 'Bob',
      age: 28,
      allowance: 1000000
    },
    {
      name: 'Charlie',
      age: 35,
      allowance: 900000
    },
    {
      name: 'David',
      age: 26,
      allowance: 720000
    },
    {
      name: 'Eve',
      age: 29,
      allowance: 480000
    },
    {
      name: 'Frank',
      age: 32,
      allowance: 320000
    },
    {
      name: 'Grace',
      age: 27,
      allowance: 730000
    },
    {
      name: 'Hannah',
      age: 33,
      allowance: 550000
    },
    {
      name: 'Isaac',
      age: 31,
      allowance: 500000
    }
  ];
  
localStorage.setItem('employees', JSON.stringify(employees));