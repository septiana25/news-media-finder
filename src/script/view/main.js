import { async } from 'regenerator-runtime';
import '../component/news-list.js'
import '../component/search-bar.js';
import DataSource from "../data/data-source.js";

const main = _ => {
  const navWrapper = document.querySelector('.nav-wrapper');
  const searchElement = document.querySelector('search-bar');
  const clubListElement = document.querySelector('news-list');
  
  const onButtonSearchClicked =  async _ => {

    try {
      //const result = await DataSource.searchClub(searchElement.value1);
      const categories = await DataSource.searchMedia();
      renderCategories(categories);
      //renderResult(result);
    } catch (error) {
      fallbackResult(error);
    }
  };

  const renderCategories = categories => {
    searchElement.categories = categories;
  }
  const renderResult = results => {
    clubListElement.newsList = results;
  };

  const fallbackResult = message => {
    clubListElement.renderError(message);
  };

  const renderNavigation = async _ => {
    try {
      const result = await DataSource.searchMedia();
      const rs = result.map(media => media.name);

      const mediaList = document.createElement('p');
      mediaList.innerHTML = ` <p>${rs.join(', ')}</p> `;
      navWrapper.appendChild(mediaList);
      
    } catch (error) {
      console.log(error);
    }

  }

  searchElement.clickEvent = onButtonSearchClicked;
  renderNavigation();
};

export default main;
