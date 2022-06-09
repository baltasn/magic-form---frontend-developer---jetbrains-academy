let mainHistoryContent;
let submittedValuesArray;
let content = "";

createPageContent();
window.addEventListener("storage", createPageContent);

function createPageContent() {
  retrieveFromLocalStorage();
  getHistoryCards();
  showCards();
}

function retrieveFromLocalStorage(){
  mainHistoryContent = document.getElementById("main-history");
  submittedValuesArray = JSON.parse(localStorage.getItem("submittedValues") || "[]");
  content = "";
}

function getHistoryCardHtml(i) {
 return `<div class="submit-history-card">
      <p class="history-card-title">First Name</p>
      <p class="history-card-info card-first-name">${submittedValuesArray[i].firstName}</p> 
      
      <p class="history-card-title">Last Name</p>
      <p class="history-card-info card-last-name">${submittedValuesArray[i].lastName}</p>
      
      <p class="history-card-title">Email</p>
      <p class="history-card-info card-email">${submittedValuesArray[i].email}</p> 
      
      <p class="history-card-title">Phone</p>
      <p class="history-card-info card-phone">${submittedValuesArray[i].phone}</p>
      
      <p class="history-card-title">Company</p>
      <p class="history-card-info card-company">${submittedValuesArray[i].company}</p> 
      
      <p class="history-card-title">Adress</p>
      <p class="history-card-info card-address">${submittedValuesArray[i].address}</p>  
      
      <div class="delete-button-container-div">
      <button type="submit" class="delete-button" onClick="deleteCard(${i})">Delete</button>         
      </div>
   </div>`
}
function getHistoryCards(){
  for (let i = 0; i < submittedValuesArray.length; i++) {
    content = content + getHistoryCardHtml(i);
  }
}

function showCards(){
  mainHistoryContent.innerHTML = content;
}

function deleteCard(index) {
  submittedValuesArray.splice(index,1);
  localStorage.setItem("submittedValues", JSON.stringify(submittedValuesArray));

  //location.reload();  Error: Execution context was destroyed, most likely because of a navigation.

  createPageContent();

}