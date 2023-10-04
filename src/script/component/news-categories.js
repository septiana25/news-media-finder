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
            style>
                

            </style>

            <button class="button-value active">terbaru</button>
            <button class="button-value">terbaru</button>
            <button class="button-value">terbaru</button>
            <button class="button-value">terbaru</button>
        `;
    }
}

customElements.define('news-categories', NewsCategories);