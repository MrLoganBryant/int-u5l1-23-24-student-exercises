// CODE ALONG

// 1. Update the variable songList so that it is an array with at least 3 song titles.
let songList = ["songs", "song2", "song3"];
console.log();

// 2. Update the variable studentList so that it is an array with 4 Code Nation students (including yourself) in your class.
let studentList = ["logan", "bob", "guy", "someone"];
console.log();

// 3. Update the variable teacherList so that it is an array with all the Code Nation adults in your class.
let teacherList = ["lucus", "maddy", "guy"];
console.log();

// 4. Update the variable familyAges so that it is an array with a list of ages (numbers) of your family members.
let familyAges = [52,50,23,18, 17, 17];
console.log();

//PAUSE HERE

// CODE SOLO

// 5. Update the variable favSong to retrieve the array element of your favorite song in the songList array (Task 1). 
let favSong = songList[1];
console.log();

// 6. Update the variable bestStudent to retrieve your name from the classList array (Task 2).
let bestStudent=bestStudent[0];
console.log();

// 7. Update the variable tallestTeacher to retrieve the array element of the tallest teacher in the teacherList array (Task 3).
let tallestTeacher = teacherList[2];
console.log();

// 8. Update the variable oldestMemeber to retrieve the array element of the oldest member of your family in the familyAges array. (Task 4)
let oldestMember=familyAges[0];
console.log();

// Using concat()
let combinedArray1 = studentList.concat(teacherList);
console.log(combinedArray1); // Output: ["Alice", "Bob", "Ms. Smith", "Mr. Jones"]

// Using spread syntax
let combinedArray2 = [...studentList, ...teacherList];
console.log(combinedArray2); // Output: ["Alice", "Bob", "Ms. Smith", "Mr. Jones"]
// Done Early?
//  - On your own, create an array that combines both the class list and the teacher list without rewriting the names of students and teachers.
//  - Google how to combine arrays you've already created.


