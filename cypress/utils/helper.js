//Verify that Set_B is subset of A
export const isSuperSet = (set, subSet) => {
    for (let elem of subSet) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
};

//Union Sets
export const union = (setA, setB) => {
    var _union = new Set(setA);
    for (var elem of setB){
        _union.add(elem);
    }
    return _union;
}

//Intersection
export const intersection = (setA, setB) => {
    var _intersection = new Set();
    for (var elem of setB){
        if (setA.has(elem)){
            _intersection.add(elem);
        }
    }
    return _intersection;
}

//Difference
export const difference = (setA, setB) => {
    var _difference = new Set(setA);
    for (var elem of setB){
        _difference.delete(elem);
    }
    return _difference;
}
