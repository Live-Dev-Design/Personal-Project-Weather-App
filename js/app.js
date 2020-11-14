//inst classes//
const ft = new Fetch();
const ui = new UI();

// iniatialise with no city showing
// init();

//add event listeners//
const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
const clear = document.getElementById("clear");

// event listener for submit button 
button.addEventListener("click", () => {
  const currentVal = search.value;

  if (searchUser.value !== "") {
      ft.getCurrent(currentVal).then((data) => {
        //call a UI method//
        ui.populateUI(data);
        //clear search field
        searchUser.value = "";
    });
  }
});

// event.listener for clear button
clear.addEventListener("click", () => {
    init();
    searchUser.value = "";
});

// Function to reset weather card innerHTML
function init() {
    const infoCard = document.getElementById('content');
    infoCard.innerHTML = "";
};