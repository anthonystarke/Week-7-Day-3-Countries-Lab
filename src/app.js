const PubSub = require('./helpers/pub_sub.js');
const RequestHelper = require('./helpers/request_helper.js');
const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');



document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectView = new SelectView();
  selectView.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();

  const newCountry = new Countries();
  newCountry.getData();
  newCountry.bindEvents();


});
