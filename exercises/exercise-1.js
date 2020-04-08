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