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

it('Expect add() ', () => {
    expect(add(1, 1)).toBe(2)
    expect(add(0, 1)).toBe(1)
})

function getStringLength(str) {
    return str.length
}

it('Expect getStringLength() ', () => {
    expect(getStringLength('')).toBe(0)
    expect(getStringLength('a')).toBe(1)
    expect(getStringLength('abc')).toBe(3)
})

function isStringEmpty(str) {
    return !str.length
}

it('Expect isStringEmpty() to return true if empty else false', () => {
    expect(isStringEmpty('')).toBe(true)
    expect(isStringEmpty('a')).toBe(false)
    expect(isStringEmpty('0')).toBe(false)
})


function incrementNum(num) {
    return num + 1
}

it('Expect incrementNum() ', () => {
    expect(incrementNum(1)).toBe(2)
    expect(incrementNum(0)).toBe(1)
})

function decrementNum(num) {
    return num - 1
}

it('Expect decrementNum() ', () => {
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