let firstNameElement = document.getElementById("first-name");
let lastNameElement = document.getElementById("last-name");
let emailElement = document.getElementById("email");
let phoneElement = document.getElementById("phone");
let companyElement = document.getElementById("company");
let addressElement = document.getElementById("address");

let buttonElement = document.getElementById("submit-button")

fillForm();
window.addEventListener("storage", fillForm);

firstNameElement.addEventListener("input",saveFirstName);
lastNameElement.addEventListener("input",saveLastName);
emailElement.addEventListener("input",saveEmail);
phoneElement.addEventListener("input",savePhone);
companyElement.addEventListener("input",saveCompany);
addressElement.addEventListener("input",saveAddress);

buttonElement.addEventListener("click", clickSubmitButton);


function saveFirstName() {
   localStorage.setItem("first-name",firstNameElement.value);
}
function saveLastName() {
  localStorage.setItem("last-name",lastNameElement.value);
}
function saveEmail() {
  localStorage.setItem("email",emailElement.value);
}
function savePhone() {
  localStorage.setItem("phone",phoneElement.value);
}
function saveCompany() {
  localStorage.setItem("company",companyElement.value);
}
function saveAddress() {
  localStorage.setItem("address",addressElement.value);
}

function fillForm()
{
  firstNameElement.value = localStorage.getItem("first-name");
  lastNameElement.value = localStorage.getItem("last-name");
  emailElement.value = localStorage.getItem("email");
  phoneElement.value = localStorage.getItem("phone");
  companyElement.value = localStorage.getItem("company");
  addressElement.value = localStorage.getItem("address");
}

function clickSubmitButton(){
  addToSubmittedValuesArray();
  emptySubmittedInfo();

}

function addToSubmittedValuesArray() {
  let submittedValuesArray = JSON.parse(localStorage.getItem("submittedValues") || "[]");
  submittedValuesArray.push(createValuesObject());
  localStorage.setItem("submittedValues", JSON.stringify(submittedValuesArray));
  console.log(JSON.stringify(submittedValuesArray));
}


function emptySubmittedInfo() {
  localStorage.setItem("first-name","");
  localStorage.setItem("last-name","");
  localStorage.setItem("email","");
  localStorage.setItem("phone","");
  localStorage.setItem("company","");
  localStorage.setItem("address","");
}


function createValuesObject() {
  return  {
  "firstName":firstNameElement.value,
  "lastName":lastNameElement.value,
  "email":emailElement.value,
  "phone":phoneElement.value,
  "company":companyElement.value,
  "address":addressElement.value
  }
}

