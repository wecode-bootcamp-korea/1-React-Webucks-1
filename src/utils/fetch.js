const getData = () => {
  return fetch('http://localhost:3000/data/hayoungGam/mockData.json')
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.error(error));
};

export default getData;
