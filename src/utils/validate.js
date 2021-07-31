export const validateEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = password => {
  return /^^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
};

export const matchPassword = (pw1, pw2) => {
  if (!pw1 || pw2.length < 8) {
    return false;
  }
  return pw1 === pw2;
};

export const morethanLength = (str, n) => {
  if (!str) {
    return false;
  }
  return str.length >= n;
};

export const validateKoreanName = str => {
  const re = /([^가-힣\x20])/i;
  return !re.test(str) && str.length >= 2;
};

export const checkAllItems = (email, pw1, pw2, name) => {
  return (
    validateEmail(email) &&
    validatePassword(pw1) &&
    matchPassword(pw1, pw2) &&
    validateKoreanName(name)
  );
};
