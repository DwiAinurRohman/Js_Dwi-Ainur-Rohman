// String Data Type
let myName = "Dwi Ainur Rohman";
console.log("String:", myName);


// Boolean Data Type
let isStudent = true;
console.log("Boolean:", isStudent);


// Number Data Type
let age = 21;
console.log("Number:", age);


// Array Data Type
let favoriteColors = ["Black", "White", "Blue"];
console.log("Array:", favoriteColors);


// Object Data Type
let profile = {
  name: "Dwi Ainur Rohman",
  occupation: "Student",
  skills: ["UI/UX Design", "HTML", "CSS", "JavaScript", "Design Graphics"]
};
console.log("Object:", profile);


// Function to display data in alerts
function showData() {
  alert("String: " + myName);
  alert("Boolean: " + isStudent);
  alert("Number: " + age);
  alert("Array: " + favoriteColors.join(", "));
  alert("Object: " + JSON.stringify(profile));
}
