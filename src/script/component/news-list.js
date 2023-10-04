import './news-item.js';

class NewsList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    set newsList(newsList) {
        this._newsList = newsList;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = '';
        //console.log(this._newsList);
        this._newsList['posts'].forEach(newsItem => {
            const clubItemElemnt = document.createElement('news-item');
            clubItemElemnt.news = newsItem;
            this.shadowDOM.appendChild(clubItemElemnt);
        });
    }

    renderError(error) {
        this.shadowDOM.innerHTML += `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0, 0, 0, 0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>`;
        this.shadowDOM.innerHTML = `<div class="placeholder">${error}</div>`;
    }
}

customElements.define('news-list', NewsList);