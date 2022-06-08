let firstNameElement = document.getElementById("first-name");
let lastNameElement = document.getElementById("last-name");
let emailElement = document.getElementById("email");
let phoneElement = document.getElementById("phone");
let companyElement = document.getElementById("company");
let addressElement = document.getElementById("address");



function saveFirstName() {
   localStorage.setItem('first-name',firstNameElement.value);
}
function saveLastName() {
  localStorage.setItem('last-name',lastNameElement.value);
}
function saveEmail() {
  localStorage.setItem('email',emailElement.value);
}
function savePhone() {
  localStorage.setItem('phone',phoneElement.value);
}
function saveCompany() {
  localStorage.setItem('company',companyElement.value);
}
function saveAddress() {
  localStorage.setItem('address',addressElement.value);
}


firstNameElement.addEventListener("input",saveFirstName);
lastNameElement.addEventListener("input",saveLastName);
emailElement.addEventListener("input",saveEmail);
phoneElement.addEventListener("input",savePhone);
companyElement.addEventListener("input",saveCompany);
addressElement.addEventListener("input",saveAddress);

firstNameElement.value=localStorage.getItem("first-name");
lastNameElement.value=localStorage.getItem("last-name");
emailElement.value=localStorage.getItem("email");
phoneElement.value=localStorage.getItem("phone");
companyElement.value=localStorage.getItem("company");
addressElement.value=localStorage.getItem("address");

//NOT WORKING ON CHROME, DOES NOT PASS TESTS
// function saveValueOnLocalStorage(elementId) {
//   localStorage.setItem(elementId,(document.getElementById(elementId)===null?'':document.getElementById(elementId).value));
//   }
//
// firstNameElement.addEventListener("input",saveValueOnLocalStorage("first-name"));
// lastNameElement.addEventListener("input",saveValueOnLocalStorage("last-name"));
// emailElement.addEventListener("input",saveValueOnLocalStorage("email"));
// phoneElement.addEventListener("input",saveValueOnLocalStorage("phone"));
// companyElement.addEventListener("input",saveValueOnLocalStorage("company"));
// addressElement.addEventListener("input",saveValueOnLocalStorage("address"));

