indexView();
function indexView() {
	html = "<button onclick='blackJackView()'>BlackJack</button>"
		+ "<button onclick='sspView()'>Stein Saks Papir</button>"
	appen.innerHTML = html;
}

function back() {
	indexView();
}