//Model
let appen = getId("app");
let viewValgt = "index";
let html = "";
let showResult = getId('showResult');
let valgt = "";
let robotValg = 2;
let resultat = "Velg stein, saks eller papir";
let robotBilde = "blank.png";
let youScore = 0;
let robotScore = 0;
let status = "";
let restarted = ""
let index = 1;
let blackJack = {
	playerValue: 0,
	blackJackBust: false,
	blackJackbj: false,
	blackJackAiBust: false,
	currentCards: [],
	currentAiCards: [],
	aiValue: 0,
	players: 1,
	winner: 0,
	kortahtml: "",
	aiKorta: ""
};


function getId(id) {
	return document.getElementById(id);
}