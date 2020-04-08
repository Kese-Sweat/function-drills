// testing it works
it('[1] should equal [1]', function(){
    expect([1]).toBe([1]);
});

it('{foo: 1} should equal {foo: 1}', function(){
    expect({foo: 1}).toBe({foo: 1});
});

function grabFirst(str) {
    return str.charAt(0) || false
}

it('Expect grabFirst() to grab the first character in a str or return false', () => {
    expect(grabFirst('a')).toBe('a')
    expect(grabFirst('')).toBe(false)
})