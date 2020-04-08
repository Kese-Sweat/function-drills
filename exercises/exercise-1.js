// testing it works
it('[1] should equal [1]', function(){
    expect([1]).toBe([1]);
});

it('{foo: 1} should equal {foo: 1}', function(){
    expect({foo: 1}).toBe({foo: 1});
});


/*
    ONLY touch the functions and not the expect it statements
    The goal is have the function returns match the toBe statement
    First one is done below.
    
    good luck!
*/

function add(a, b) {
    return a + b
}

it('Expect add to add two numbers', () => {
    expect(add(1, 1)).toBe(2)
    expect(add(0, 1)).toBe(1)
})

function getNumCharacters(str) {
    return str.length
}

it('Expect getNumCharacters() to return how many characters a string is', () => {
    expect(getNumCharacters('')).toBe(0)
    expect(getNumCharacters('a')).toBe(1)
    expect(getNumCharacters('abc')).toBe(3)
})

function isStringEmpty(str) {
    return !str.length
}

it('Expect isStringEmpty() to return true if empty else false', () => {
    expect(isStringEmpty('')).toBe(true)
    expect(isStringEmpty('a')).toBe(false)
    expect(isStringEmpty('0')).toBe(false)
})

function greet(str) {
    return `Hello ${str}`
}

it('Expect greet() to return Hello {name} where name is a string', () => {
    expect(greet('john')).toBe('Hello john')
    expect(greet('mark')).toBe('Hello mark')
})

function checkIfStrHasA(str) {
    return str.includes('a')
}

it('Expect checkIfStrHasA', () => {
    expect(checkIfStrHasA('a')).toBe(true)
    expect(checkIfStrHasA('abc')).toBe(true)
    expect(checkIfStrHasA('b')).toBe(false)
})


function incrementNum(num) {
    return num + 1
}

it('Expect incrementNum() to make a number one more', () => {
    expect(incrementNum(1)).toBe(2)
    expect(incrementNum(0)).toBe(1)
})

function decrementNum(num) {
    return num - 1
}

it('Expect decrementNum() number one less', () => {
    expect(decrementNum(2)).toBe(1)
    expect(decrementNum(1)).toBe(0)
    expect(decrementNum(0)).toBe(-1)
})

function grabFirst(str) {
    return str.charAt(0) || false
}

it('Expect grabFirst() to grab the first character in a str or return false', () => {
    expect(grabFirst('a')).toBe('a')
    expect(grabFirst('')).toBe(false)
})

function grabStringAtIndex(str, index) {
    return str.charAt(index)
}

it('Expect grabStringAtIndex to grab a string by an index', () => {
    expect(grabStringAtIndex('a', 0)).toBe('a')
    expect(grabStringAtIndex('abc', 2)).toBe('c')
})

function grabArrayAtIndex(arr, index) {
    return arr[index]
}

it('Expect grabArrayAtIndex to grab an array at index', () => {
    expect(grabArrayAtIndex([1], 0)).toBe(1)
    expect(grabArrayAtIndex([1, {foo: 1}], 1)).toBe({foo: 1})
})

function grabLastStringIndex(str) {
    return str.charAt(str.length - 1)
}

it('Expect grabLastStringIndex to grab last index', () => {
    expect(grabLastStringIndex('a')).toBe('a')
    expect(grabLastStringIndex('abc')).toBe('c')
})

function reverseString(str) {
    let newString = ''
    for (let i = str.length; i >= 0; i--) {
        newString += str.charAt(i)
    }
    return newString
}


it('Expect reverseString to work - use a for loop!', () => {
    expect(reverseString('a')).toBe('a')
    expect(reverseString('abc')).toBe('cba')
})

function strToArray(str) {
    return str.split('')
}

it('Expect strToArray to convert string to array', () => {
    expect(strToArray('a')).toBe(['a'])
    expect(strToArray('abc')).toBe(['a', 'b', 'c'])
})

function arrToString(arr) {
    return arr.join('')
}

it('Expect arrToString to convert array to string', () => {
    expect(arrToString(['a', 'b'])).toBe('ab')
    expect(arrToString(['a'])).toBe('a')
})

function sumArr(arr) {
    return arr.reduce((a, b) => a + b)
}

it('Expect sumArr to sum all numbers in array', () => {
    expect(sumArr([1,2,3])).toBe(6)
    expect(sumArr([1])).toBe(1)
    expect(sumArr([100, 100])).toBe(200)
})

function checkIfArrIncludesA(arr) {
    return arr.includes('a')
}

it('Expect checkIfArrIncludesA to return true if an array includes a', () => {
    expect(checkIfArrIncludesA(['a'])).toBe(true)
    expect(checkIfArrIncludesA(['b', 'c', 'd'])).toBe(false)
})

function checkIfArrIncludesCharacter(arr, char) {
    return arr.includes(char)
}

it('Expect checkIfArrIncludesCharacter to return true if an array includes a character', () => {
    expect(checkIfArrIncludesCharacter(['a'], 'a')).toBe(true)
    expect(checkIfArrIncludesCharacter(['b', 'c', 'd'], 'x')).toBe(false)
    expect(checkIfArrIncludesCharacter(['b', 'c', 'd'], 'b')).toBe(true)
})

function checkIfTruthy(prop) {
    return !!prop
}


it('Expect checkIfTruthy to return is the value is a truthy value or falsey value', () => {
    expect(checkIfTruthy('')).toBe(false)
    expect(checkIfTruthy('a')).toBe(true)
    expect(checkIfTruthy(null)).toBe(false)
})

function flipper(prop) {
    return !prop
}

it('Expect flipper to take a value and return false for a truthy value and true for a falsey value', () => {
    expect(flipper(false)).toBe(true)
    expect(flipper(true)).toBe(false)
    expect(flipper('')).toBe(true)
})

function doubleIfMorethanLimit(num, limit) {
    if (num > limit) {
        return num * 2
    }
    return num
}

it('Expect doubleIfMorethanLimit to double if num is more than limit, otherwise return the number', () => {
    expect(doubleIfMorethanLimit(1, 0)).toBe(2)
    expect(doubleIfMorethanLimit(1, 2)).toBe(1)
    expect(doubleIfMorethanLimit(11, 2)).toBe(22)
})

function onlyGreaterThanLimit(arr, limit) {
    return arr.filter(i => i > limit)
}

it('Expect onlyGreaterThanLimit to only give back an array of numbers greater than a limit', () => {
    expect(onlyGreaterThanLimit([1,2,3], 1)).toBe([2,3])
    expect(onlyGreaterThanLimit([1,2,3], 2)).toBe([3])
    expect(onlyGreaterThanLimit([1,2,3], 9)).toBe([])
})

function addToArray(arr, v) {
    arr.push(v)
    return arr
}

it('Expect add to arr to give me back an array with the new value added', () => {
    expect(addToArray([true], true)).toBe([true, true])
    expect(addToArray([1,2,3], false)).toBe([1,2,3,false])
    expect(addToArray([null], false)).toBe([null, false])
})

function makeButtonHTML(arr) {
    return arr.map(x => `<button>${x}</button>`).join('')
}

it('Expect button html to make a html string of buttons from arr', () => {
    expect(makeButtonHTML([1,2,3])).toBe(`<button>1</button><button>2</button><button>3</button>`)
})

function grabProp(o, prop) {
    return o[prop] || false
}

it('Expect grab prop to take an object and prop name and return the value of it otherwise return false if it doesnt exist', () => {
    expect(grabProp({foo: 1}, 'foo')).toBe(1)
    expect(grabProp({name: 'ryan'}, 'name')).toBe('ryan')
})

function hasProp(o, prop) {
    return o.hasOwnProperty(prop)
}

it('Expect has prop to take an obj and say if it has a property or not', () => {
    expect(hasProp({foo: 1}, 'foo')).toBe(true)
    expect(hasProp({foo: false}, 'foo')).toBe(true)
    expect(hasProp({foo: null}, 'foo')).toBe(true)
    expect(hasProp({list: [1]}, 'list')).toBe(true)
})