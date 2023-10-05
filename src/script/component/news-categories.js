class NewsCategories extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    set category(category) {
        this._category = category;
        this.render();
    }

    

    render(){
        this.shadowDOM.innerHTML = `
            <style>
            :host > input{
                border: 1px solid #6759ff;
                border-radius: 15px;
                background-color: trasparent;
                color: #6759ff;
                padding: 5px 10px;
                cursor: pointer;
                text-transform: capitalize;
            }

            :host > input.active {
                background-color: #6759ff;
                color: white;
            }
            </style>
        `;
        let no = 1;
        this._category.forEach(cat => {
             let active = no === 1 ? 'active' : ''; 
            this.shadowDOM.innerHTML += `
            <input type="button" class="${active}" id="data-${no}" value="${ cat.name }"></input>
        `;

            no++;
        })        
    }
}

customElements.define('news-categories', NewsCategories);