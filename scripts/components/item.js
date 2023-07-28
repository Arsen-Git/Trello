export default function Item(text, color, parentObj, id){
    this.text = text;
    this.color = color;
    this.parentObj = parentObj;
    this.id = id;

    this.elements = {
        self: document.createElement("div"),
        text: document.createElement("p"),
    }
    
    this.render = () => {
        this.elements.self.classList.add("cards__card__item");
        this.elements.self.setAttribute("draggable", true);
        this.elements.self.setAttribute("id", id);

        this.elements.text.classList.add("cards__card__item__text");
        this.elements.text.textContent = this.text;
        this.elements.text.style.color = `${color}`;

        this.elements.self.append(this.elements.text);
        document.querySelector(".cards__card").append(this.elements.self);
        this.parentObj.push(this);
    }
}