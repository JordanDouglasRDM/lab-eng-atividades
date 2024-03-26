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