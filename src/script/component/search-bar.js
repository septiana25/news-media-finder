import './news-categories.js';
class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
        //this.renderCategories();
    }

    set categories(categories) {
        this._categories = categories;
        this.renderCategories();
    }

    get value1() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }

/*     renderCategories() {
        this.shadowDOM.innerHTML = '';
        const searchElement = document.querySelector('.wrapper');
        const categoriesElemnt = document.createElement('div');
        console.log(searchElement);
        //categoriesElemnt.setAttribute('id', 'buttons');
        //searchElement.appendChild(categoriesElemnt);
    } */

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            
            .wrapper {
                max-width: 800px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
                border-radius: 5px;
                display: flex;
                flex-flow: column nowrap;
                gap: 16px;
                margin-block-end: 1rem;
            }

            .search-container {
                
                display: flex;
                top: 10px;
                background-color: #f5f8ff;
                position: sticky;
            }
            
            .search-container > input {
                background-color: transparent;
                width: 75%;
                padding: 16px;
                border: 0;
                border-bottom: 1px solid #110f29;
                font-weight: bold;
            }
            
            .search-container > input:focus {
                outline: 0;
                border-bottom-color: #6759ff;
            }
            
            .search-container > input:focus::placeholder {
                font-weight: bold;
            }
            
            .search-container > input::placeholder {
                color: cornflowerblue;
                font-weight: normal;
            }
            
            .search-container > button {
                width: 23%;
                cursor: pointer;
                margin-left: auto;
                padding: 16px;
                background-color: #6759ff;
                color: white;
                border-radius: 20px;
                border: 0;
                text-transform: uppercase;
            }

             #buttons {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-flow: row wrap;
                gap: .4rem;
            }

            #buttons > button {
                border: 1px solid #6759ff;
                border-radius: 15px;
                background-color: trasparent;
                color: #6759ff;
                padding: 5px 10px;
                cursor: pointer;
            }

            #buttons button.active {
                background-color: #6759ff;
                color: white;
            }

            @media screen and (max-width: 550px) {
                .search-container {
                flex-direction: column;
                position: static;
                }
            
                .search-container > input {
                width: 100%;
                margin-bottom: 12px;
                }
            
                .search-container > button {
                width: 100%;
                }
            }
        </style>
        
        <div class="wrapper">
            <div id="search-container" class="search-container">
                <input placeholder="Search media news" id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Search</button>
            </div>

        </div>
        `;

        /*             <div id="buttons">
                <button class="button-value active">terbaru</button>
                <button class="button-value">terbaru</button>
                <button class="button-value">terbaru</button>
                <button class="button-value">terbaru</button>
            </div> */       
        
        
        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }

    renderCategories() {
        this.shadowDOM.innerHTML = '';
        this.render();
        const searchElement = this.shadowDOM.querySelector('.wrapper');
        const categoriesElemnt = document.createElement('div');
        categoriesElemnt.setAttribute('id', 'buttons');
        searchElement.appendChild(categoriesElemnt);
        this._categories.forEach(category => {
            const buttonElement = document.createElement('button');
            buttonElement.classList.add('button-value');
            buttonElement.textContent = 'terbaru';
            buttonElement.addEventListener('click', this._clickEvent);
            categoriesElemnt.appendChild(buttonElement);
        })
    }
}

customElements.define('search-bar', SearchBar);