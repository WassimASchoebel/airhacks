console.log("Hello Web Standards 2");

const html = (a, b, c) => { 
    return "etwas zurueck " + a + b + c
}

const helloJug = (message) => { 
    return html`JUG Oberpfalz says: ${message}`;
    
}

console.log(helloJug("hello"));


