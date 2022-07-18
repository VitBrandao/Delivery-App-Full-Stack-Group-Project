const validateEmailAndPassword = (email, password) => {
  const SIX = 6;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validEmail = emailRegex.test(email);
  const validPassword = password.length >= SIX;

  if (validEmail && validPassword) {
    return false;
  }
  return true;
};

const validateRegister = (name, email, password) => {
  const TWELVE = 12;
  const validName = name.length >= TWELVE;
  if (validName) {
    return validateEmailAndPassword(email, password);
  }
  return true;
};

export { validateEmailAndPassword, validateRegister };
