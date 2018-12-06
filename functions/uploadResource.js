/** @module uploadResource */


import _ from 'lodash'

const OnReadyStateChange = 'OnReadyStateChange'.toLocaleLowerCase();

export default function (url, formData, progressCallback, successCallback, errorCallback) {
  let xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);

  xhr.upload.addEventListener("progress", function (evt) {
    if (!evt.lengthComputable) return true;
    let res = _.pick(evt, ['loaded', 'total']);
    res.percent = Math.round(evt.loaded * 100 / evt.total);
    if (progressCallback) progressCallback(res);
  }, false);

  xhr[OnReadyStateChange] = function () {
    if (xhr.readyState !== 4) return;

    if(xhr.status !== 200 || !xhr.responseText){
      let error;
      if (xhr.responseText) error = JSON.parse(xhr.responseText);
      errorCallback(error);
      return;
    }

    successCallback();
  };
  xhr.send(formData);
}
