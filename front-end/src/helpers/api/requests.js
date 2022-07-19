const fetchPost = (body, route, token) => {
  const fetchRoute = fetch(`http://localhost:3001/${route}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: token,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));

  return fetchRoute;
};

export default fetchPost;
