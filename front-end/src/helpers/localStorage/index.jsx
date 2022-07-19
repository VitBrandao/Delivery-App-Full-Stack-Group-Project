export function setItemLocalStorage(dataUser) {
  localStorage.setItem('dataUser', JSON.stringify(dataUser));
}

export function getItemLocalStorage() {
  const getItem = localStorage.getItem('dataUser');
  return JSON.parse(getItem);
}
