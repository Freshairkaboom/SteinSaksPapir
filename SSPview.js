//View
sspView()
function sspView(){
    html = `
    <h1>Stein, saks, papir!</h1>
    <hr>
    <div id="showResult"><h1>${resultat}</h1></div>
    <div class="board">
    <img onclick="valgtNoe(1)" src="rock.png" alt="Stein">
    <img onclick="valgtNoe(2)" src="scissor.png" alt="Saks">
    <img onclick="valgtNoe(3)" src="paper.png" alt="Paper">
    </div>
    </br>
    <div class="robotboard">
    <div id="scoreboard"></div>
    <div><img id="robotSlave" src="Robot.png" alt="Robotmann"></div>
    <img class="robotValg" src="${robotBilde}" alt="Robotvalg">
    </div>
    `;
    appen.innerHTML = html;
}
