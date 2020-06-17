import { sayHello } from "./client.js";
import "./DatePicker.js";

class Message extends HTMLElement{

    constructor() { 
        super();
        this.message = sayHello("JUG Ob.");
    }

    connectedCallback() { 
        this.innerHTML = `
            <ui5-datepicker id="myDatepicker1"></ui5-datepicker>
            hello ${this.message}
        `;
    }

} 

customElements.define("j-message",Message);

