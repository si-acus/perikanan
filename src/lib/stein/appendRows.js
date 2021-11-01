export const appendRows = (url, sheetName, rows) => {
  const newUrl = `${url}${sheetName}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rows)
  };
  return new Promise((resolve, reject) => {
    fetch(newUrl, options)
      .then(apiResponse => {
        resolve(apiResponse.json());
      })
      .catch(err => {
        reject(err);
      });
  });
};