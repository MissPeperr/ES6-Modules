const cardDiv = document.querySelector("#card-div");
let num = 0;

const createCardHTML = () => {
    return `
    <div class="card" id="card-${num}">
        <h3>I'm card number ${num}!</h3>
        <p>Hello! 👋</p>
        <button class="btn btn-danger" id="deleteBtn-${num}">Delete me! 😿</button>
    </div>
    `
}

const addCardToDOM = () => {
    num++;
    cardDiv.innerHTML += createCardHTML();
}

const deleteCard = (cardId) => {
    document.querySelector(`#card-${cardId}`).remove();
}

export {addCardToDOM, deleteCard};