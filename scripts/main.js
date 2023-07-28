import Card from "./components/card";
import Item from "./components/item";

let allCardsList = [];
let allItemsList = [];
let id = 0;
const container = document.querySelector(".cards__container");

const addItemBtn = document.querySelector(".form__submit");
addItemBtn.disabled = true;
addItemBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const text = document.querySelector(".form__field").value;
    const color = document.querySelector(".form__select").value;
    if(text != "" && color != ""){
        const newItem = new Item(text, color, allCardsList[0].elements.items, id);
        newItem.render();
        allItemsList.push(newItem);
        id++;
    }
})

const addCardBtn = document.querySelector(".cards__add");
addCardBtn.addEventListener("click", ()=>{
    const newCard = new Card();
    newCard.render();
    allCardsList.push(newCard);
    addItemBtn.textContent = "Створити картку";
    addItemBtn.disabled = false;
});

container.addEventListener("dragstart", (e)=>{
    if(e.target.className == "cards__card__item"){
        e.dataTransfer.setData("text/plain", e.target.getAttribute("id"));
        let card = allCardsList.find(card=> card.elements.items.find(item => item.id == e.target.getAttribute("id")))
        let indexofItem = card.elements.items.findIndex(item => item.id == e.target.getAttribute("id"))
        card.elements.items.splice(indexofItem, 1);
    }
})
container.addEventListener("dragover", (e)=>{
    if(e.target.className == "cards__card"){
        e.preventDefault();
    }
})
container.addEventListener("drop", (e)=>{
    if(e.target.className == "cards__card"){
        const id = e.dataTransfer.getData("text/plain");
        const dragableElement = document.getElementById(id);
        e.target.append(dragableElement);

        let card = allCardsList.find(card => card.elements.self == e.target);
        let item = allItemsList.find(item => item.elements.self == dragableElement);
        card.elements.items.push(item);
        console.log(card);
    }
})



