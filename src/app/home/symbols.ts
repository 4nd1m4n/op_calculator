export const SYM_ALLCLEAR = 'AC';
export const SYM_CLEAR = 'C';
export const SYM_DELETE = '<==';
export const SYM_DIVIDE = '/';
export const SYM_TIMES = '*';
export const SYM_MINUS = '-';
export const SYM_PLUS = '+';
export const SYM_DOT = '.';
export const SYM_NEGATE = '+/-';
export const SYM_EQUALS = '=';

export const KEY_GROUPS = [
  [SYM_ALLCLEAR, SYM_CLEAR, SYM_DELETE, SYM_DIVIDE],
  [7, 8, 9, SYM_TIMES],
  [4, 5, 6, SYM_MINUS],
  [1, 2, 3, SYM_PLUS],
  [0, SYM_DOT, SYM_NEGATE, SYM_EQUALS]];

export const ERR_DIV_BY_ZERO = 'ERROR DIVISION BY 0';