function compareArrayOrObj(value, other) {

	// Get the value type
	var type = Object.prototype.toString.call(value);

	// If the two objects are not the same type, return false
	if (type !== Object.prototype.toString.call(other)) return false;

	// If items are not an object or array, return false
	if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

	// Compare the length of the length of the two items
	var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
	var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
	if (valueLen !== otherLen) return false;

	// Compare two items
	function compare(item1, item2) {

		// Get the object type
		var itemType = Object.prototype.toString.call(item1);
		// If an object or array, compare recursively
		if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
			if (!compare(item1, item2)) return false;
		}

		// Otherwise, do a simple comparison
		else {
			// If the two items are not the same type, return false
			if (itemType !== Object.prototype.toString.call(item2)) return false;

			// Else if it's a function, convert to a string and compare
			// Otherwise, just compare
			if (itemType === '[object Function]') {
				if (item1.toString() !== item2.toString()) return false;
			} else {
				if (item1 !== item2) return false;
			}

		}
	};

	// Compare properties
	if (type === '[object Array]') {
		for (var i = 0; i < valueLen; i++) {
			if (compare(value[i], other[i]) === false) return false;
		}
	} else {
		for (var key in value) {
			if (value.hasOwnProperty(key)) {
				if (compare(value[key], other[key]) === false) return false;
			}
		}
	}
	// If nothing failed, return true
	return true;

};

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
                passed = compareArrayOrObj(target, expectation)
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
  