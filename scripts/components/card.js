export default function Card(){
    this.elements = {
        self: document.createElement("div"),
        items: [],
    }
    
    this.render = () => {
        const parent = document.querySelector(".cards__container");
        this.elements.self.classList.add("cards__card");
        parent.append(this.elements.self);
    }
}