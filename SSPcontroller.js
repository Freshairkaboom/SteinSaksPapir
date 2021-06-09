//Controller
function valgtNoe(type) {
    if (type === 1) {
        valgt = "Stein";
    }
    else if (type === 2){
        valgt = "Saks"
    } else {
        valgt = "Papir";
    }
    sspView();
    robotMann();
}

function robotMann() {
    robotValg = Math.ceil(Math.random() * 3);
    if (robotValg == 1) robotBilde = "rock.png";
    else if (robotValg == 2) robotBilde = "scissor.png";
    else robotBilde = "paper.png";
    vinner();
    sspView();
}

function vinner() {
    if (valgt == "Stein" && robotValg == 2) {
        resultat = "Stein slår saks, du vant!";
    }
    else if(valgt == "Saks" && robotValg == 3) {
        resultat = "Saks slår papir, du vant!";
    }
    else if(valgt == "Papir" && robotValg == 1) {
        resultat = "Papir slår stein, du vant!"
    }
    else if (valgt == "Stein" && robotValg == 3) {
        resultat = "Papir slår stein, du tapte!";
    }
    else if(valgt == "Saks" && robotValg == 1) {
        resultat = "Stein slår saks, du tapte!";
    }
    else if(valgt == "Papir" && robotValg == 2) {
        resultat = "Saks slår papir, du tapte!"
    }
    else if (valgt == "Stein" && robotValg == 1) {
        resultat = "Begge valgte stein, uavgjort!";
    }
    else if(valgt == "Saks" && robotValg == 2) {
        resultat = "Begge valgte saks, uavgjort!";
    }
    else if(valgt == "Papir" && robotValg == 3) {
        resultat = "Begge valgte papir, uavgjort!"
    }
    sspView();
}


//Rene funksjoner
function getId(id) {
    return document.getElementById(id);
}
