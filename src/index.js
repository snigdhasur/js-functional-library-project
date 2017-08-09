function each(list, callback) {
	if (Array.isArray(list)) {
		for(let i = 0; i < list.length; i++){
		callback(list[i])
		}
	} 
	else {
		for(let i=0; i < Object.keys(list).length; i++) {
			callback(list[Object.keys(list)[i]])
		}
	}
	return list
}

function map(list, callback) {	
	if (Array.isArray(list)) {
		newArray = []
		for(let i = 0; i < list.length; i++){
		newArray.push(callback(list[i]))
		}
		return newArray
	} 
	else {
		newObject = {}
		for(let i=0; i < Object.keys(list).length; i++) {
			newObject[Object.keys(list)[i]] = callback(list[Object.keys(list)[i]])
		}
		return newObject	
	}
}

// the callback needs to be a function that takes two arguments and combines them, such as sum or concatenate
function reduce(list, callback) {	
	if (Array.isArray(list)) {
		result = list[0]
		for(let i = 1; i < list.length; i++){
		result = callback(list[i], result)
		}
	} 
	else {
		result = list[Object.keys(list)[0]]
		for(let i=1; i < Object.keys(list).length; i++) {
			result = callback(list[Object.keys(list)[i]], result)
		}
	}
  return result	
}


// the callback needs to be a function that is a boolean
function find(list, callback) {	
	if (Array.isArray(list)) {
		for(let i = 0; i < list.length; i++){
				if(callback(list[i])){
					return list[i]
				}
		}
	} 
	else {
		for(let key in object) {
			if(callback(object[key])) {
			return {[key]: object[key]}
		    }
	    }
    }
}



// the callback needs to be a function that is a boolean
function filter(list, callback) {	
	if (Array.isArray(list)) {
		newArray = []
		for(let i = 0; i < list.length; i++){
				if(callback(list[i])){
					newArray.push(list[i])
				}
		}
		return newArray
	} 
	else {
		newObject = {}
		for(let key in object) {
			if(callback(object[key])) {
			Object.assign(newObject, {[key]: object[key]})
		    }
	    }
	    return newObject
    }
}


// the iteratee is a (math) transformation for an array and the PROPERTY for an object
function compareNumbers(a, b) {
  if(typeof a === "number") {
    return a - b;
  }
  else {
    return null 
  }
}




function sortBy(list, iteratee) {	
	if (typeof list[0] === "number" || typeof list[0] === "string") {
		newArray = map(list,iteratee)
		newArray.sort(compareNumbers())
		return newArray
	} 
	else {
		for(i=0; i < list.length; i++){
			if(Object.keys(list[i])) === iteratee 
		}


		newObject = {}
		for(let key in object) {
			if(callback(object[key])) {
			Object.assign(newObject, {[key]: object[key]})
		    }
	    }
	    return newObject
    }
}




