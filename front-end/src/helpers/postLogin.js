const fechPostLogin = (body) => {
  const fetchLogin = fetch('http://localhost:3001/login', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));

  return fetchLogin;
};

export default fechPostLogin;
