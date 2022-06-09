let mainHistoryContent = document.getElementById("main-history");
let submittedValuesArray = JSON.parse(localStorage.getItem("submittedValues") || "[]");
let content = "";



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
for (let i = 0; i < submittedValuesArray.length; i++) {
  content = content + getHistoryCardHtml(i);
}

function deleteCard(index) {
  submittedValuesArray.splice(index,1);
  localStorage.setItem("submittedValues", JSON.stringify(submittedValuesArray));
  location.reload();
}

mainHistoryContent.innerHTML = content;
