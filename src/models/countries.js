const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js')

const Countries = function() {
  this.data = null;


};

Countries.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((data) =>{
    this.data = data;

    PubSub.publish('Countries:sending-data', this.data);
  })

};
Countries.prototype.bindEvents = function () {
  PubSub.subscribe('selectView: send-selected', (evt) => {
    const countryObject = this.countryObject(evt.detail);


    PubSub.publish('Countries: send-country', countryObject);
  })

};
Countries.prototype.countryObject = function (index) {
  return this.data[index];

};

module.exports = Countries;
