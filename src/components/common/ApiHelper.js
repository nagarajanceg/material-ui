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
}
