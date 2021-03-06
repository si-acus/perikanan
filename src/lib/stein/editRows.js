export const editRows = (url, sheetName, { search, set, limit }) => {

  const newLimit = !isNaN(limit) && limit ? limit : null; // validate limit
  const newUrl = `${url}${sheetName}`;
  // data to post
  const data = {
    condition: search,
    set,
    newLimit
  };
  const options = {
    method: 'PUT',
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