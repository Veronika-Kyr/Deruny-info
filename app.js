
function translate() {
    let pRecipe = document.querySelector(".recipe");
    pRecipe.innerHTML = "Спочатку необхідно почистити та помити картоплю. Потім треба натерти картоплю на дрібній тертці. Додати до неї сіль, борошно, яйце, вичавити часник. Усю масу необхідно ретельно перемішати. На розігріту з олією пательню викладаємо порційно дерунчики розміром як оладки. Смажимо з обох боків приблизно по 3-5 хвилин. Смачного!";
    let pot = document.querySelector(".pot");
    pot.innerHTML = "1 кг картоплі";
    let gar = document.querySelector(".gar");
    gar.innerHTML = "1 зубчик часнику";
    let flo = document.querySelector(".flo");
    flo.innerHTML = "2 ст. л. борошна";
    let egg = document.querySelector(".egg");
    egg.innerHTML = "1 яйце";
    let salt = document.querySelector(".salt");
    salt.innerHTML = "сіль за смаком";
    let oil = document.querySelector(".oil");
    oil.innerHTML = "олія для смаження";



}

function dialogueSend() {
    let name = prompt("What is your name?");
    let email = prompt("what is your email?");
    let language = prompt("What language do you speak?");

    if (language === "Ukrainian") {
        alert("💙💛 " + name + ", I'll send you recipes on your email soon 💙💛");
    }
    else {
        alert(name + ", I'll send you recipes on your email soon");
    }
}

let btnBlue = document.querySelector(".blue");
btnBlue.addEventListener("click", translate);

let btnYellow = document.querySelector(".yellow");
btnYellow.addEventListener("click", dialogueSend);
