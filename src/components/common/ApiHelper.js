import React from 'react';

export const defaultHeaders = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

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

export const fetchPost = (url, data, headers, callback) => {
	let customHeaders = headers || {
		'Accept': 'application/json',
	};
	customHeaders = { method: 'POST', body: data, headers: { ...customHeaders } };
  fetch(url, customHeaders)
		.then((response) => {
			if (response.headers.get('content-type')) {
				if (response.headers.get('content-type').match(/application\/json/)) {
					return response.json();
				} else if (response.headers.get('content-type').match(/application\/vnd.ms-excel/)) {
					return response.blob();
				}
			}
			return response;
		})
		.then((responseJSON) => {
			callback(responseJSON, true);
		})
    .catch(error => {
      console.log('error in post request', error);
      callback(error, false);
    });
};
