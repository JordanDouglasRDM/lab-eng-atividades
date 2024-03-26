let total = 0;
let femaleCount = 0;
let maleCount = 0;

function updateTotal() {
    document.getElementById('totalCounter').innerText = total;
}

function updateFemaleCount() {
    document.getElementById('femaleCounter').innerText = femaleCount;
    updateTotal();
}

function updateMaleCount() {
    document.getElementById('maleCounter').innerText = maleCount;
    updateTotal();
}

function incrementFemale() {
    femaleCount++;
    total++;
    updateFemaleCount();
}

function decrementFemale() {
    if (femaleCount > 0) {
        femaleCount--;
        total--;
        updateFemaleCount();
    }
}

function incrementMale() {
    maleCount++;
    total++;
    updateMaleCount();
}

function decrementMale() {
    if (maleCount > 0) {
        maleCount--;
        total--;
        updateMaleCount();
    }
}

function resetCount() {
    total = 0;
    femaleCount = 0;
    maleCount = 0;
    updateFemaleCount();
    updateMaleCount();
}
window.onload = function createElements() {
    const container = document.getElementById('containePrincipal');

    const h2 = document.createElement('h2');
    h2.className = 'text-center mt-5'
    h2.innerText = 'Contador de Pessoas';
    container.appendChild(h2);

    const divRowHeader = document.createElement('div');
    divRowHeader.className = 'row mt-5 text-center justify-content-center mb-4';
    container.appendChild(divRowHeader)

    const pTotal = document.createElement('p');
    pTotal.className = 'col-12';
    pTotal.innerText = 'Total de Pessoas';
    divRowHeader.appendChild(pTotal);

    const sTotal = document.createElement('span');
    sTotal.className = 'col-1 border text-center border-success my-1';
    sTotal.innerText = '0';
    sTotal.id = 'totalCounter';
    divRowHeader.appendChild(sTotal);

    const aReset = document.createElement('a');
    aReset.className = 'col-auto mt-1 text-secondary-emphasis';
    aReset.setAttribute('onclick','resetCount()');
    divRowHeader.appendChild(aReset);

    const iconReset = document.createElement('i');
    iconReset.className = 'fa-solid fa-arrows-rotate';
    aReset.appendChild(iconReset);

    const divRowMain = document.createElement('div');
    divRowMain.className = 'row justify-content-center';
    divRowMain.style.height = '300px';
    container.appendChild(divRowMain);

    const cardMale = document.createElement('div');
    cardMale.className = 'card col-3 d-flex align-items-center';
    divRowMain.appendChild(cardMale);

    const imgCardMale = document.createElement('img');
    imgCardMale.className = 'rounded-circle mt-3';
    imgCardMale.setAttribute('src', '../../img/avatar_masc.jpg');
    imgCardMale.setAttribute('alt', 'Avatar Masculino');
    imgCardMale.style.maxWidth = '100px';
    imgCardMale.style.maxHeight = '100px';
    cardMale.appendChild(imgCardMale);

    const pTotalMale = document.createElement('p');
    pTotalMale.className = 'text align-items-center mt-2 m-0';
    pTotalMale.innerText = 'Homens';
    cardMale.appendChild(pTotalMale);

    const divIncrementMale = document.createElement('div');
    divIncrementMale.className = 'row align-items-center justify-content-center';
    cardMale.appendChild(divIncrementMale);

    const spanTotalMale = document.createElement('span');
    spanTotalMale.className = 'border text-center border-secondary px-4 my-4 border-info-subtle';
    spanTotalMale.innerText = '0';
    spanTotalMale.id = 'maleCounter';
    divIncrementMale.appendChild(spanTotalMale);

    const decrementMaleLink = document.createElement("a");
    decrementMaleLink.className = "col-auto text-danger-emphasis";
    decrementMaleLink.setAttribute("onclick", "decrementMale()");
    divIncrementMale.appendChild(decrementMaleLink);

    const decrementMaleIcon = document.createElement("i");
    decrementMaleIcon.className = "fa-solid fa-circle-minus";
    decrementMaleLink.appendChild(decrementMaleIcon);

    const incrementMaleLink = document.createElement("a");
    incrementMaleLink.className = "col-auto text-success-emphasis";
    incrementMaleLink.setAttribute("onclick", "incrementMale()");
    divIncrementMale.appendChild(incrementMaleLink);

    const incrementMaleIcon = document.createElement("i");
    incrementMaleIcon.className = "fa-solid fa-circle-plus";
    incrementMaleLink.appendChild(incrementMaleIcon);



    // cardFeminino
    const cardFemale = document.createElement('div');
    cardFemale.className = 'card col-3 d-flex align-items-center ms-2';
    divRowMain.appendChild(cardFemale);

    const imgCardFemale = document.createElement('img');
    imgCardFemale.className = 'rounded-circle mt-3';
    imgCardFemale.setAttribute('src', '../../img/avatar_fem.jpg');
    imgCardFemale.setAttribute('alt', 'Avatar Feminino');
    imgCardFemale.style.maxWidth = '100px';
    imgCardFemale.style.maxHeight = '100px';
    cardFemale.appendChild(imgCardFemale);

    const pTotalFemale = document.createElement('p');
    pTotalFemale.className = 'text align-items-center mt-2 m-0';
    pTotalFemale.innerText = 'Mulheres';
    cardFemale.appendChild(pTotalFemale);

    const divIncrementFemale = document.createElement('div');
    divIncrementFemale.className = 'row align-items-center justify-content-center';
    cardFemale.appendChild(divIncrementFemale);

    const spanTotalFemale = document.createElement('span');
    spanTotalFemale.className = 'border text-center border-secondary px-4 my-4 border-info-subtle';
    spanTotalFemale.innerText = '0';
    spanTotalFemale.id = 'femaleCounter';
    divIncrementFemale.appendChild(spanTotalFemale);

    const decrementFemaleLink = document.createElement("a");
    decrementFemaleLink.className = "col-auto text-danger-emphasis";
    decrementFemaleLink.setAttribute("onclick", "decrementFemale()");
    divIncrementFemale.appendChild(decrementFemaleLink);

    const decrementFemaleIcon = document.createElement("i");
    decrementFemaleIcon.className = "fa-solid fa-circle-minus";
    decrementFemaleLink.appendChild(decrementFemaleIcon);

    const incrementFemaleLink = document.createElement("a");
    incrementFemaleLink.className = "col-auto text-success-emphasis";
    incrementFemaleLink.setAttribute("onclick", "incrementFemale()");
    divIncrementFemale.appendChild(incrementFemaleLink);

    const incrementFemaleIcon = document.createElement("i");
    incrementFemaleIcon.className = "fa-solid fa-circle-plus";
    incrementFemaleLink.appendChild(incrementFemaleIcon);
}



















