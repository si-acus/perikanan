export const readSheet = (url,
  sheetName,
  { limit, offset, search } = {}) => {
  const URLGetParameters = [
    limit ? `limit=${limit}` : '',
    offset ? `offset=${offset}` : '',
    search ? `search=${JSON.stringify(search)}` : ''
  ];
  const newUrl = `${url}${sheetName}?${URLGetParameters.filter(param => !!param).join('&')}`;
  return new Promise((resolve, reject) => {
    fetch(newUrl)
      .then(apiResponse => {
        if (!apiResponse.ok) {
          return apiResponse.json().then(error => {
            throw new Error(error.error);
          });
        }
        resolve(apiResponse.json());
      })
      .catch(response => {
        reject(response);
      });
  });
};
