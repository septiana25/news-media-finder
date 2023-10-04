class NewsItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    set news(news) {
        this._news = news;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
           :host {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }
                
            .news-thum {
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
            }
                
            .news-item {
                padding: 24px;
            }
                
            .news-item > h2 {
                font-weight: lighter;
            }
                
            .news-item > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10; /* number of lines to show */
            }
        </style>

        <img class="news-thum" src=" ${this._news.thumbnail} " alt="News Thumbnail">
        <div class="news-item">
            <h2> ${this._news.title} </h2>
            <p> ${this._news.description} </p>
        </div>`;
    }
}

customElements.define('news-item', NewsItem);