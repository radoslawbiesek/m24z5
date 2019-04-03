const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor = 0, gateFactor = 0) => {

  if (isNaN(windFactor) || isNaN(gateFactor)) return null;  

  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  return Number((distancePoints + stylePoints + windFactor + gateFactor).toFixed(1));
}

module.exports = calculateTotalPoints;