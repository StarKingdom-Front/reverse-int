module.exports = function reverse (n) {
  n = n + "";
  return Math.abs(n.split("").reverse().join(""));
}
