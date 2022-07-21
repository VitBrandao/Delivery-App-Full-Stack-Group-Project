export function setItemLocalStorage(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getItemLocalStorage() {
  const getItem = localStorage.getItem('user');
  return JSON.parse(getItem);
}
