module.exports = function warmup(temperature) {

  let tempF; // = 0;

  if (!isNaN(temperature)) {
    tempF = temperature * 9 / 5 + 32;
  }

  return tempF;

};
