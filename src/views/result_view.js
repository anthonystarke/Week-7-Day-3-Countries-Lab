const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries: send-country', (evt) => {
    this.render(evt.detail);
  })

};

ResultView.prototype.render = function (data) {
  const country = document.querySelector('#country');
  country.innerHTML = '';

  const countryHeader = document.createElement('h2');
  countryHeader.textContent = data.name;

  const countryFlag = document.createElement('img');
  countryFlag.src = data.flag;

  const countryRegionText = document.createElement('h3');
  countryRegionText.textContent = 'Region:';

  const countryRegion = document.createElement('h4');
  countryRegion.textContent = data.region;

  const countryLanguageText = document.createElement('h3');
  countryLanguageText.textContent = 'Languages:';

  const countryLanguageUl = document.createElement('ul');

  const countryLanguageList = data.languages;
  console.log(data.languages);

  countryLanguageList.forEach((listItem)=>{
    const displayItem =  document.createElement('li');
    displayItem.textContent = listItem.name;
    countryLanguageUl.appendChild(displayItem);
  })

  country.appendChild(countryHeader);
  country.appendChild(countryFlag);
  country.appendChild(countryRegionText);
  country.appendChild(countryRegion);
  country.appendChild(countryLanguageText);
  country.appendChild(countryLanguageUl);

};














module.exports = ResultView;
