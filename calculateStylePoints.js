const calculateStylePoints = (styleNotes) => {
    
    if (typeof(styleNotes) !== 'object' || styleNotes.length != 5) return null;
    
    if (styleNotes.every(isValid)) {
        
        const notesCopy = [...styleNotes];
        notesCopy.sort((a,b) => (a-b));
        notesCopy.pop();
        notesCopy.shift();

        return notesCopy.reduce((a,b) => (a+b));
        
    } else {
        return null;
    }
};

const isValid = (element) => {
    return !(isNaN(element) || element < 0 || element > 20 || element % 0.5 != 0);
}

module.exports = calculateStylePoints;