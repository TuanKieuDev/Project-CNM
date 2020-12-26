class Screen extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this.src = this.getAttribute('src');
        this._shadowRoot.innerHTML = `
            
        `
    }
