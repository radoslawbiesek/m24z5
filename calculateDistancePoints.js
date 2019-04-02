const calculateDistancePoints = (distance, hillSize, kPoint) => {
    if (!distance || !hillSize || !kPoint) return null;

    if (distance < 0 || distance % 0.5 !== 0 || kPoint < 0 || kPoint % 1 !== 0) return null;

    switch (hillSize) {
        case 'normal': {
            hillFactor = 2;
            hillPoints = 60;
            break;
        }
        case 'large': {
            hillFactor = 1.8;
            hillPoints = 60;
            break;
        }
        case 'flying': {
            hillFactor = 1.2;
            hillPoints = 120;
            break;
        }
        default:
            return null;

    }
    return hillPoints + (distance - kPoint) * hillFactor;
};

module.exports = calculateDistancePoints;