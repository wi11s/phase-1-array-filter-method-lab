// Code your solution here
function findMatching(array, string) {
    return array.filter(name => {
        let lowerCaseName = name.toLowerCase();
        let lowerCaseString = string.toLowerCase();
        return lowerCaseName === lowerCaseString;
    });
};

function fuzzyMatch(array, string) {
    let inputLength = string.length;
    return array.filter(name => {
        return name.slice(0, inputLength) === string;
    });
};
function matchName(array, string) {
    return array.filter(element => {
        return element.name === string;
    });
};