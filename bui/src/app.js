import { sayHello } from "./client.js";
import "./DatePicker.js";
import { html,render } from "./lit-html.js";

class Message extends HTMLElement{

    constructor() { 
        super();
        this.message = sayHello("JUG Ob.");
        this.root = this.attachShadow({mode:"open"});
    }

    connectedCallback() { 
        const template = html`
          <style>
            h2{
                background-color: pink;
            }              
          </style>
            <h2>my nice header</h2>
            <button @click=${_ => this.save()}>hello</button>
            <ui5-datepicker @change=${e => this.onDateChange(e)} id="myDatepicker1"></ui5-datepicker>
            hello ${this.message}
        `;
        render(template, this.root);
    }
    onDateChange({ detail: { value } }) { 
        console.log(value);
    }



    async save() { 
        console.log("saving the application");
        const response = await fetch('http://localhost:8080/hello');
        const { content,title } = await response.json();
        console.log("##############",content,title);
    }

} 

customElements.define("j-message",Message);

