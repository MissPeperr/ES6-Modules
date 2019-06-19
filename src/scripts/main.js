// Every file has their own local scope, which makes everything private if we don't add all of the files to your HTML
// We're only going to use main.js, and import and export our files into one another
// Making sure to import/export what we want to use and be public!

// MAKE SURE TO ADD type="module" IN YOUR SCRIPT TAG IN HTML
import {addCardToDOM, deleteCard} from "./card.js"

document.querySelector("body").addEventListener("click", () => {
    if(event.target.id === "create-card-btn"){
        addCardToDOM();
    } else if(event.target.id.includes("deleteBtn")){
        deleteCard(event.target.id.split("-")[1])
    }
})