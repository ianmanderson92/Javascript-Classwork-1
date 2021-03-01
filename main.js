/*

    Ian Anderson
	University of Colorado Denver CSCI 4800 E01
	Web Application Developement
	Javascript Classwork 1

	February 22nd, 2021

	Status = Functional

*/


//Dead code from class example
function factorize_Old( n ) {
    var factors = [];
    for( var i = 0; i <= n; i++ ) {
        factors.push(i);
    }
    return factors;
}


//factorizes the input number.
function factorize ( num ) {
    var factors = [], i;
    for (i = 1; i <= Math.floor(Math.sqrt(num)); i += 1 ) {
        if ( num % i === 0 ) {
            factors.push(num / i);
        }
        factors.sort(function( x, y ) {
            return x - y;
        }
        );

    }
    return factors;
}

//find the unique letters in a string.
function findUnique( in_string ) {
    var unique_string = "";
    for ( var i = 0; i < in_string.length; i++ ) {
        if (unique_string.indexOf( in_string.charAt(i)) == -1 ) {
            unique_string += in_string[i];
        }
    }
    return unique_string;
}


//recieves two numbers and a function and performs the function on the two numbers returning the result.
function doOperation ( x, y, operator ) {
    return operator( x, y );
}

function multiply ( x, y ) {
    return x * y;
}

function power ( x, y ) {
    return Math.pow ( x, y );
}