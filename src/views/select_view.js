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
  let counter = 0;
  for (let item of data){
    const optionItem = document.createElement('option');
    optionItem.textContent = item.name;
    optionItem.value = counter;
    dropDown.appendChild(optionItem);
    counter +=1;
  }


  // data.forEach((item, index){
  //
  //   // const optionItem = document.createElement('option');
  //   // option.textContent = item.name;
  //   // option.value = index;
  //   // dropDown.appendChild(option);
  //
  // })



};




module.exports = SelectView;
