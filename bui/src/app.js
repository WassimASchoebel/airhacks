class Message extends HTMLElement{

    constructor() { 
        super();
        this.message = "JUG O.";
    }

    connectedCallback() { 
        this.innerHTML = `
            hello ${this.message}
        `;
    }

} 

customElements.define("j-message",Message);

