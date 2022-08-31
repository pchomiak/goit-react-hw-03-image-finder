const KEY = '28308223-0c2c2ce813bae66b46c0e2992';

const fetchImages = (name, page) => {
  return fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${name}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
};

const api = {
  fetchImages,
};

export default api;
