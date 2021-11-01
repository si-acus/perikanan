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
        console.log("apiResponse", apiResponse.json());
        resolve(apiResponse.json());
      })
      .catch(err => {
        console.log("error", err);
        reject(err);
      });
  });
};