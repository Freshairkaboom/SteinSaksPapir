//View
sspView()
function sspView(){
    html = `
    <div id="showResult"><h1>${resultat}</h1></div>
    <div class="score-board">
    <div id="you-label" class="badge">You</div>
    <div id="robot-label" class="badge">Robot</div>

    <span id="user-score">${youScore}</span>:<span id="robot-score">${robotScore}</span>
    </div>

    <div class="board">
    <img onclick="valgtNoe(1)" src="rock.png" alt="Stein">
    <img onclick="valgtNoe(2)" src="scissor.png" alt="Saks">
    <img onclick="valgtNoe(3)" src="paper.png" alt="Paper">
    </div>
    </br>

    <div class="robotboard">
    <div><img id="robotSlave" src="Robot.png" alt="Robotmann"></div>
    <img class="robotValg" src="${robotBilde}" alt="Robotvalg">
    </div>
    `;
    appen.innerHTML = html;
}
