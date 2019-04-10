import React from 'react';

export const fetchResource = (url, headers, callback) => {
  const customHeaders = headers || {
    Accept: 'application/json'
  };
  fetch(url, customHeaders)
    .then(response => {
      if (response.ok) {
        console.log('proper response');
        return response.json();
      } else {
        console.log('error data response');
      }
    })
    .then(json => {
      callback(json);
    })
    .catch(error => console.log('error in response', error));
};

export const fetchPost = (url, data, callback) => {
  fetch(url, { method: 'POST', body: data })
    .then(function(response) {
      if (response.ok) {
        callback(response, true);
      } else {
        callback(response, false);
      }
    })
    .catch(error => {
      console.log('error in post request', error);
      callback(error, false);
    });
};
