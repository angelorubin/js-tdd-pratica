export const sum = (n1, n2) => {
  return n1 + n2;
};

export const sub = (n1, n2) => n1 - n2;

export const mult = (n1, n2) => {
  return n1 * n2;
};

export const div = (n1, n2) => {
  if ((n1 > 0 && n2 === 0) || (n2 === 0 && n1 > 0)) {
    return "Não é possível divisão por zero";
  }
  return n1 / n2;
};
