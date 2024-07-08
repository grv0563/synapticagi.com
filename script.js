const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// function getRealTimeMilliseconds() {
//   // Get the current time in milliseconds
//   const now = new Date().getTime();
//   // const today_date= new Date.getDate();
//   const i_was_born = new Date("2001-04-02");
//   // const age =today_date -i_was_born;
//   // console.log(age);
//   // console.log(today_date)
//   // console.log(i_was_born);

//   // Update a DOM element (optional)
//   // You can replace this with your desired output method (e.g., console.log)
//   const outputElement = document.getElementById("age");
//   if (outputElement) {

//     // outputElement.textContent = "23."+now +" Years";
//     outputElement.textContent = now +" Years";

//   }
// }

// // Call the function initially to display the current milliseconds
// getRealTimeMilliseconds();

// // Call the function repeatedly for updates (consider limitations)
// setInterval(getRealTimeMilliseconds, 1); // Aim for 1 millisecond interval

// function calculateAge(birthDate) {
//   const birthDateObj = new Date(birthDate);
//   const today = new Date();
//   let age = today.getFullYear() - birthDateObj.getFullYear();
//   const month = today.getMonth();
//   const day = today.getDate();

//   if (month < birthDateObj.getMonth() || (month === birthDateObj.getMonth() && day < birthDateObj.getDate())) {
//     age--;
//   }

//   return age;
// }

// const birthDateStr = "2001-04-02";
// const age = calculateAge(birthDateStr);
// console.log("Age:", age, "years old");



function calculateAge(birthDate) {
  // Set the birth date
  const birthDateObj = new Date(2001, 4, 2); // Year, Month (0-indexed), Day

  // Get the current date and time in milliseconds
  const now = Date.now();

  // Calculate the difference in milliseconds
  const ageDiffMs = now - birthDateObj.getTime();

  // Calculate age in years
  const ageYears = Math.floor(ageDiffMs / (1000 * 60 * 60 * 24 * 365));

  // Calculate remaining milliseconds after years are accounted for
  const remainingMsAfterYears = ageDiffMs % (1000 * 60 * 60 * 24 * 365);

  // Calculate days from remaining milliseconds
  const days = Math.floor(remainingMsAfterYears / (1000 * 60 * 60 * 24));

  // Calculate remaining milliseconds after days are accounted for
  const remainingMsAfterDays = remainingMsAfterYears % (1000 * 60 * 60 * 24);

  // Calculate hours from remaining milliseconds
  const hours = Math.floor(remainingMsAfterDays / (1000 * 60 * 60));

  // Calculate remaining milliseconds after hours are accounted for
  const remainingMsAfterHours = remainingMsAfterDays % (1000 * 60 * 60);

  // Calculate minutes from remaining milliseconds
  const minutes = Math.floor(remainingMsAfterHours / (1000 * 60));

  // Calculate milliseconds from remaining milliseconds
  const milliseconds = remainingMsAfterHours % (1000);

  // Return the age object
  return {
    years: ageYears,
    days: days,
    hours: hours,
    minutes: minutes,
    milliseconds: milliseconds,
  };
}

// Example usage
function displayAge(){
  const myage = calculateAge();
  console.log(
    `Age: ${myage.years} years, ${myage.days} days, ${myage.hours} hours, ${myage.minutes} minutes, ${myage.milliseconds} milliseconds`
  );
    const outputElement = document.getElementById("age");
  if (outputElement) {

    // outputElement.textContent = "23."+now +" Years";
    outputElement.textContent = `${myage.years} years, ${myage.days +23} days, ${myage.hours} hours, ${myage.minutes} minutes, ${myage.milliseconds} milliseconds`;
  }
 
}
 // displayAge();
 setInterval(displayAge,1)







