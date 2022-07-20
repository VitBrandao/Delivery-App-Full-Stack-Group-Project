export function setItemLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getItemLocalStorage(key) {
  const getItem = localStorage.getItem(key);
  return JSON.parse(getItem);
}

export function removeItemLocalStorage(key) {
  localStorage.removeItem(key);
}
