var domDivArchievemant = document.getElementById("archievemants")
var domListArchievemant = document.getElementById("list-Archievemant")

var openAchievemantCalMed = setTimeout(function() {
    domDivArchievemant.insertAdjacentHTML("afterbegin", `
    
    <div class="alertAchievemant" id="alertAchievemantCal">
      <div id="grid-achievemant">
        <div class="grid-img">
          <img src="./img/Aula 1 - Média.png">
        </div>
        <div>
          <h2>Conquista desbloqueada</h2>
          <p>Calculadora de média</p>
        </div>
      </div>
    </div>
    
  `)
    domListArchievemant.insertAdjacentHTML("afterbegin", `<li><img src="./img/Aula 1 - Média.png"></li>`)
  }, 5000)
  
var closeAchievemantCalMed = setTimeout(function() {
    domDivArchievemant.innerHTML = ""
  }, 15000)

var openAchievemantConv = setTimeout(function() {
  domDivArchievemant.insertAdjacentHTML("afterbegin", `
  
  <div class="alertAchievemant" id="alertAchievemantCal">
    <div id="grid-achievemant">
      <div class="grid-img">
        <img src="./img/Dia 2 - Calculadora.png">
      </div>
      <div>
        <h2>Conquista desbloqueada</h2>
        <p>Conversor de Moedas</p>
      </div>
    </div>
  </div>
  
`)
domListArchievemant.insertAdjacentHTML("afterbegin", `<li><img src="./img/Dia 2 - Calculadora.png"></li>`)
}, 20000)
var closeAchievemantConv = setTimeout(function() {
  domDivArchievemant.innerHTML = ""
}, 30000)


var openAchievemantMent = setTimeout(function() {
  domDivArchievemant.insertAdjacentHTML("afterbegin", `
  
  <div class="alertAchievemant" id="alertAchievemantCal">
    <div id="grid-achievemant">
      <div class="grid-img">
        <img src="./img/Dia 3 - Mentalista.png">
      </div>
      <div>
        <h2>Conquista desbloqueada</h2>
        <p>Mentalista</p>
      </div>
    </div>
  </div>
  
`)
domListArchievemant.insertAdjacentHTML("afterbegin", `<li><img src="./img/Dia 3 - Mentalista.png"></li>`)
}, 35000)
var closeAchievemantMent = setTimeout(function() {
  domDivArchievemant.innerHTML = ""
}, 45000)

var openAchievemantConq = setTimeout(function() {
  domDivArchievemant.insertAdjacentHTML("afterbegin", `
  
  <div class="alertAchievemant" id="alertAchievemantCal">
    <div id="grid-achievemant">
      <div class="grid-img">
        <img src="./img/Dia 4 e 5 - Aluraflix.png">
      </div>
      <div>
        <h2>Conquista desbloqueada</h2>
        <p>AluraFlix</p>
      </div>
    </div>
  </div>
  
`)
domListArchievemant.insertAdjacentHTML("afterbegin", `<li><img src="./img/Dia 4 e 5 - Aluraflix.png"></li>`)
}, 50000)
var closeAchievemantConq = setTimeout(function() {
  domDivArchievemant.innerHTML = ""
}, 60000)

var openAchievemantPlac = setTimeout(function() {
  domDivArchievemant.insertAdjacentHTML("afterbegin", `
  
  <div class="alertAchievemant" id="alertAchievemantCal">
    <div id="grid-achievemant">
      <div class="grid-img">
        <img src="./img/Dia 6 - Placar.png">
      </div>
      <div>
        <h2>Conquista desbloqueada</h2>
        <p>Placar</p>
      </div>
    </div>
  </div>
  
`)
domListArchievemant.insertAdjacentHTML("afterbegin", `<li><img src="./img/Dia 6 - Placar.png"></li>`)
}, 65000)
var closeAchievemantPlac = setTimeout(function() {
  domDivArchievemant.innerHTML = ""
}, 75000)

var openAchievemantSupe = setTimeout(function() {
  domDivArchievemant.insertAdjacentHTML("afterbegin", `
  
  <div class="alertAchievemant" id="alertAchievemantCal">
    <div id="grid-achievemant">
      <div class="grid-img">
        <img src="./img/Dia 7 e 8 - Super Trunfo.png">
      </div>
      <div>
        <h2>Conquista desbloqueada</h2>
        <p>Super Trunfo</p>
      </div>
    </div>
  </div>
  
`)
domListArchievemant.insertAdjacentHTML("afterbegin", `<li><img ./img/Dia 7 e 8 - Super Trunfo.png></li>`)
}, 80000)
var closeAchievemantSupe = setTimeout(function() {
  domDivArchievemant.innerHTML = ""
}, 90000)