const PubSub = require('../helpers/pub_sub.js');


const SelectView = function() {

}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:sending-data', (evt) => {
    this.populate(evt.detail);

  })
    const dropDown = document.querySelector('#countries');
    dropDown.addEventListener('change', this.publishSelect);
};

SelectView.prototype.publishSelect = function (evt) {
  PubSub.publish('selectView: send-selected', evt.target.value);

};

SelectView.prototype.populate = function (data) {
  const dropDown = document.querySelector('#countries');

  data.forEach((item,index) => {
    const optionItem = document.createElement('option');
    optionItem.textContent = item.name;
    optionItem.value = index;
    dropDown.appendChild(optionItem);
  });
};




module.exports = SelectView;
