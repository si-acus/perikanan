
export const removeRows = (url, sheetName, { search, limit }) => {
  
  const newLimit = !isNaN(limit) && limit ? limit : null; // validate limit
  const newUrl = `${url}${sheetName}`;

  // data to post
  const data = {
    condition: search,
    newLimit
  };
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
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