const baseurl = 'crypteco.local';
const postsEndpoint = '/wp-json/wp/v2/posts';
const categoriesEndpoint = '/wp-json/wp/v2/categories';

const getPosts = () =>
  new Promise((resolve, reject) => {
    const endpoint = baseurl + postsEndpoint;
    
    console.log("API URL " + endpoint);

    fetch(endpoint)
    .then(response => response.json()
    .then(json => ({
        totalPages: response.headers.get("x-wp-totalpages"),
        totalPosts: response.headers.get("x-wp-total"),
        allHeaders: response.headers,
        json
      })))
    .then(result => {
        resolve(result);
    }).catch((err) => {
        reject(err);
    });
  });