const PubSub = require('./pub_sub.js');

const ResquestHelper = function (url) {
  this.url = url;
};

ResquestHelper.prototype.get = function (onComplete) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', this.url);

  xhr.setRequestHeader('Accept', 'application/json');

  xhr.addEventListener('load', () => {
    if (xhr.status !== 200) {
      return;
    }
    const jsonString = xhr.responseText;
    const data = JSON.parse(jsonString);
    onComplete(data);

  })

  xhr.send();
};



module.exports = ResquestHelper;
