const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for (const person of data) {
      if (person.profession === "developer") {
        console.log(person.name);
      }
    }
  }
  printDeveloper();
  
  // 2. Add Data
  function addData(name, age, profession) {
    const newPerson = { name, age, profession };
    data.push(newPerson);
  }
  
  
  // 3. Remove Admins
  function removeAdmin() {
    data = data.filter(person => person.profession !== "admin");
}
removeAdmin();

  
  // 4. Concatenate Array
  function concatenateArray() {}
  
  // 5. Average Age
  function averageAge() {}
  
  // 6. Age Check
  function checkAgeAbove25() {}
  
  // 7. Unique Professions
  function uniqueProfessions() {}
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
}
sortByAge();

console.log(data);

  
  // 9. Update Profession
  function updateJohnsProfession() {}
  
  // 10. Profession Count
  function getTotalProfessions() {}