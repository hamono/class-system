export const strSearch = (parm: object) => {
  return Object.entries(parm).reduce((pre, next, index) => {
    const prefix = index === 0 ? "" : "&";
    return `${pre}${prefix}${next[0]}=${next[1]}`;
  }, "?");
};
