function add(getX,getY,cb) {
	var x, y;
	getX( function(xVal){
		x = xVal;
		// both are ready?
		if (y != undefined) {
			cb( x + y );	// send along sum
		}
	} );
	getY( function(yVal){
		y = yVal;
		// both are ready?
		if (x != undefined) {
			cb( x + y );	// send along sum
		}
	} );
}

// `fetchX()` and `fetchY()` are sync or async
// functions
add( fetchX, fetchY, function(sum){
	console.log( sum ); // that was easy, huh?
} );

// wait ms milliseconds
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchX() {
  await wait(500);
  return 500000;
}

async function fetchY() {
  await wait(1500);
  return 50;
}
