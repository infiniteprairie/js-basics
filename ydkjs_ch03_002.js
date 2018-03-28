function add(xPromise, yPromise) {
	// `Promise.all([ .. ])` takes an array of promises,
	// and returns a new promise that waits on them
	// all to finish
	return Promise.all( [xPromise, yPromise] )

	// when that promise is resolved, let's take the
	// received `X` and `Y` values and add them together.
	.then( function(values){
		// `values` is an array of the messages from the
		// previously resolved promises
		return values[0] + values[1];
	} );
}

// `fetchX()` and `fetchY()` return promises for
// their respective values, which may be ready
// *now* or *later*.
add( fetchX(), fetchY() )

// we get a promise back for the sum of those
// two numbers.
// now we chain-call `then(..)` to wait for the
// resolution of that returned promise.
.then( function(sum){
	console.log( 'sum ='+ sum ); // that was easier!
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
