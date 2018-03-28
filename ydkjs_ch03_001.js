// added some async functions fetchX and fetchY to the original ydkjs
// version of the code.
// neither the modified verion of the add() function [below] or the
// original version actually produces the desired result.
// probably not a big deal since we are trying to move *away from* callbacks

function add(getX,getY,cb) {
	var x, y;
		// getX( function(xVal){
		// x = xVal;
		// both are ready?
		x = getX();
		if (y != undefined) {
			cb( x + y );	// send along sum
		}
	// } );
		// getY( function(yVal){
		//	y = yVal;
		y = getY();
		// both are ready?
		if (x != undefined) {
			cb( x + y );	// send along sum
		}
	// } );
}


// `fetchX()` and `fetchY()` are sync or async
// functions
add( fetchX, fetchY, function(sum){
	console.log( 'sum ='+ sum ); // that was easy, huh?
} );

// wait ms milliseconds
function wait(ms) {
	console.log( 'wait() called' );
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchX() {
	console.log( 'fetchX() called. time=' + new Date() );
  await wait(5000);
	console.log( 'fetchX() await done. time=' + new Date() );
  return 500000;
}

async function fetchY() {
	console.log( 'fetchY() called. time=' + new Date() );
  await wait(15000);
	console.log( 'fetchY() await done. time=' + new Date() );
  return 50;
}
