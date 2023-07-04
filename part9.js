//a
const sumSalaries = (salaries) => {
    let total = 0;
    for (const salary of Object.values(salaries)) {
      total += salary;
    }
    return total;
  };

  //b
  const topEarner = (salaries) => {
    let highestSalary = 0;
    let topEarnerName = '';
  
    for (const [name, salary] of Object.entries(salaries)) {
      if (salary > highestSalary) {
        highestSalary = salary;
        topEarnerName = name;
      }
    }
  
    return topEarnerName;
  };

  const salaries = {
    Timothy: 35000,
    David: 25000,
    Mary: 55000,
    Christina: 75000,
    James: 43000,
  };
  
  console.log(sumSalaries(salaries)); // Output: 233000
  console.log(topEarner(salaries)); // Output: 'Christina'
  