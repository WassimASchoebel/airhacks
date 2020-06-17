import { sayHello } from "./client.js";
class Message extends HTMLElement{

    constructor() { 
        super();
        this.message = sayHello("JUG O.");
    }

    connectedCallback() { 
        this.innerHTML = `
            hello ${this.message}
        `;
    }

} 

customElements.define("j-message",Message);

