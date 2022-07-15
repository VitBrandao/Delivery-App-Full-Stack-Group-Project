const fetchRegister = (body) => {
  const postRegister = fetch('http://localhost:3001/register', {
  method: 'POST',
  body: JSON.stringify(body),
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => console.log(error));
  
  return postRegister;
  };
  
  export default fetchRegister; 