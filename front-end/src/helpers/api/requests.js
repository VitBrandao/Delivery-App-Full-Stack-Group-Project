const fetchPost = (body, route) => {
  const fetchRoute = fetch(`http://localhost:3001/${route}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));

  return fetchRoute;
};

export default fetchPost;
