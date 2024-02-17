/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 }
  ];
  
  
  //Map
  function PrintStudentbyMap() {
      const stdName = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].marks > 50) {
          stdName.push(arr[i].name);
        }
      }
      console.log("Students with marks over 50:", stdName);
    }
  PrintStudentbyMap();
  
  
  //forEach
  function PrintStudentbyForEach() {
    console.log("Students with marks over 50:");
    arr.forEach(student => {
      if (student.marks > 50) {
        console.log(student);
      }
    });
  }
  PrintStudentbyForEach();
  
  
  //addData
  function addData() {
    const newStd = { id: 4, name: "susan", age: "20", marks: 45 };
    arr.push(newStd);
    console.log("New student:", newStd);
  }
  addData();
  console.log("After adding new student:");
  console.log(arr);
  
  
  
  //removing failed student and printing it
  function removeFailedStudent() {
      const passedStd = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].marks >= 50) {
          passedStd.push(arr[i]);
        }
      }
      arr = passedStd;
      console.log("Failed students removed.");
    }
  removeFailedStudent();
  console.log("After removing failed students:");
  console.log(arr);
  
  
  //concatenated array
  function ConcatenateArray() {
    const newArray = [
      { id: 4, name: "ravi", age: "19", marks: 70 },
      { id: 5, name: "suresh", age: "21", marks: 55 },
      { id: 6, name: "lily", age: "20", marks: 60 }
    ];
    arr = arr.concat(newArray);
    console.log("Conacatenated arrays:", newArray);
  }
  ConcatenateArray();
  console.log("After concatenating arrays:");
  console.log(arr);
  
  
  
  
  
  
  
  
  
