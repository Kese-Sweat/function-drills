function deepEqual(a, b) {
    if (a && b && typeof a == 'object' && typeof b == 'object') {
      if (Object.keys(a).length != Object.keys(b).length) return false;
      for (var key in a) if (!deepEqual(a[key], b[key])) return false;
      return true;
    } else return a === b
  }

// a simple "it" function for naming groups of expectations
function it(description, contents){
    console.log('\n\n"It '+ description + '"');
    contents();
  }
  
// A simple function for expecting values
// Ex: expect(sadie.color).toBe('black'); // should return true
function expect(target) {
    return {
        toBe: function(expectation) {
            let passed = target === expectation;
            // handle arrays and objects differently
            if (Array.isArray(target) || typeof target === 'object') {
                passed = deepEqual(target, expectation)
            }
            if (passed) {
                console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation );
                return true;
            } else {
                console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation );
                return false;
            }
        }
    }
}
  