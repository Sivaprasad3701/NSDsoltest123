const fs = require('fs');

// Read the JSON file
fs.readFile('employee.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);
    // Access the employees array
    const employees = jsonData.employees;

    // Do something with the parsed data
    console.log(employees);
    // Perform further operations as needed
  } catch (error) {
    console.error('Error parsing the JSON data:', error);
  }
});
