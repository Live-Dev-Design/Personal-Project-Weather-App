class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "London";
  }

  populateUI(data) {
    //de-structure vars

    //add to inner HTML
    this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h4 class="card-title">${data.name}</h4>
                <h6 class="card-subtitle mb-2 text-muted">Highs of ${Math.floor(data.main.temp_max)}C. Lows of ${Math.floor(data.main.temp_min)}C</h6>
                <h6 class="card-subtitle mb-2 text-muted">Real Feel of ${Math.floor(data.main.feels_like)}C.</h6>
                <p class="card-text ">Weather conditions are described as: <strong>${data.weather[0].description}</strong></p>
                
            </div>
        </div>        
        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }
}
