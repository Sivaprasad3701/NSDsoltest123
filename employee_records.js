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

    // Add new employee records
    employees.push(
      {
        "fname": "Sarah",
        "lname": "Davis",
        "age": 29,
        "emp_id": "E678901"
      },
      {
        "fname": "Thomas",
        "lname": "Anderson",
        "age": 33,
        "emp_id": "E789012"
      }
    );

    // Convert the updated data back to JSON
    const updatedData = JSON.stringify(jsonData, null, 2);

    // Write the updated JSON data back to the file
    fs.writeFile('employee.json', updatedData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to the file:', err);
        return;
      }

      console.log('The JSON file has been updated.');

      // Read the updated JSON file
      fs.readFile('employee.json', 'utf8', (err, newData) => {
        if (err) {
          console.error('Error reading the updated file:', err);
          return;
        }

        try {
          // Parse the updated JSON data
          const updatedJsonData = JSON.parse(newData);
          // Access the employees array
          const updatedEmployees = updatedJsonData.employees;

          // Do something with the updated data
          console.log(updatedEmployees);
          // Perform further operations as needed
        } catch (error) {
          console.error('Error parsing the updated JSON data:', error);
        }
      });
    });
  } catch (error) {
    console.error('Error parsing the JSON data:', error);
  }
});
