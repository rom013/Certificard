var domMain = document.getElementById("projetos");
var domButton = document.getElementById("button");
var domPort = document.getElementById("portfolio")
var domSpan = document.getElementById("spanVerMais")

var domIDProjeto = {
  calculadora: document.getElementById("codeCal"),
  conversor: document.getElementById("codeCon"),
  mentalista: document.getElementById("codeMen"),
  flix: document.getElementById("codeFlix"),
  tabela: document.getElementById("codeTab"),
  trunfo: document.getElementById("codeTrunfo")
};
var domID = {
  cal: document.getElementById("verMaisCalculadora"),
  con: document.getElementById("verMaisConversor"),
  men: document.getElementById("verMaisMentalista"),
  fli: document.getElementById("verMaisFlix"),
  tab: document.getElementById("verMaisTabela"),
  tru: document.getElementById("verMaisSuper")
};
function verMais() {
  domMain.style.display = `flex`;
  domSpan.style.transform = `rotate(180deg)`;
  domPort.removeAttribute("style")
  domButton.removeAttribute("onclick");
  domButton.setAttribute("onClick", "verMenos()");
}
function verMenos() {
  domMain.style.display = `none`;
  domSpan.style.transform = `rotate(0deg)`;
  domButton.removeAttribute("onclick");
  domPort.setAttribute("style", "max-height: 250px")
  domButton.setAttribute("onClick", "verMais()");
}

function verMaisCalculadora() {
  domIDProjeto.calculadora.style.display = `block`;
  domID.cal.style.transform = `rotate(180deg)`;
  domID.cal.removeAttribute("onclick");
  domID.cal.setAttribute("onClick", "verMenosCal()");
}
function verMaisConversor() {
  domIDProjeto.conversor.style.display = `block`;
  domID.con.style.transform = `rotate(180deg)`;
  domID.con.removeAttribute("onclick");
  domID.con.setAttribute("onClick", "verMenosCon()");
}
function verMaisMentalista() {
  domIDProjeto.mentalista.style.display = `block`;
  domID.men.style.transform = `rotate(180deg)`;
  domID.men.removeAttribute("onclick");
  domID.men.setAttribute("onClick", "verMenosMen()");
}
function verMaisFlix() {
  domIDProjeto.flix.style.display = `block`;
  domID.fli.style.transform = `rotate(180deg)`;
  domID.fli.removeAttribute("onclick");
  domID.fli.setAttribute("onClick", "verMenosFli()");
}
function verMaisTabela() {
  domIDProjeto.tabela.style.display = `block`;
  domID.tab.style.transform = `rotate(180deg)`;
  domID.tab.removeAttribute("onclick");
  domID.tab.setAttribute("onClick", "verMenosTab()");
}
function verMaisSuper() {
  domIDProjeto.trunfo.style.display = `block`;
  domID.tru.style.transform = `rotate(180deg)`;
  domID.tru.removeAttribute("onclick");
  domID.tru.setAttribute("onClick", "verMenosTru()");
}

function verMenosCal() {
  domIDProjeto.calculadora.style.display = `none`;
  domID.cal.style.transform = `rotate(0deg)`;
  domID.cal.removeAttribute("onclick");
  domID.cal.setAttribute("onClick", "verMaisCalculadora()");
}
function verMenosCon() {
  domIDProjeto.conversor.style.display = `none`;
  domID.con.style.transform = `rotate(0deg)`;
  domID.con.removeAttribute("onclick");
  domID.con.setAttribute("onClick", "verMaisConversor()");
}
function verMenosMen() {
  domIDProjeto.mentalista.style.display = `none`;
  domID.men.style.transform = `rotate(0deg)`;
  domID.men.removeAttribute("onclick");
  domID.men.setAttribute("onClick", "verMaisMentalista()");
}

function verMenosFli() {
  domIDProjeto.flix.style.display = `none`;
  domID.fli.style.transform = `rotate(0deg)`;
  domID.fli.removeAttribute("onclick");
  domID.fli.setAttribute("onClick", "verMaisFlix()");
}
function verMenosTab() {
  domIDProjeto.tabela.style.display = `none`;
  domID.tab.style.transform = `rotate(0deg)`;
  domID.tab.removeAttribute("onclick");
  domID.tab.setAttribute("onClick", "verMaisTabela()");
}
function verMenosTru() {
  domIDProjeto.trunfo.style.display = `none`;
  domID.tru.style.transform = `rotate(0deg)`;
  domID.tru.removeAttribute("onclick");
  domID.tru.setAttribute("onClick", "verMaisSuper()");
}

function mudarTema() {
  document.body.classList.toggle("dark");
}