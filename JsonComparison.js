let obj1 = { name: 'person 1', age: 5 }
let obj2 = { age: 5, name: 'person 1' }

function isEqual(value1, value2) {
    let objkey1 = Object.keys(value1);
    let objkey2 = Object.keys(value2);
    if (objkey1.length !== objkey2.length) {
        return false;

    }
    for (var obj of objkey1) {
        if (value1[obj] !== value2[obj]) {
            return false;
        }
    }
    return true
}
let result = isEqual(obj1, obj2)
console.log(result);

