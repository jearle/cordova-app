
/*

  Converts a dash cased string to camelcase

*/

export default (s) =>
  
  s
    .split('-')
    .reduce((current, next) => `
        ${current}
        ${next.substr(0, 1).toUpperCase()}
        ${next.substr(1)}
      `.replace(/\s+/g, ''));
