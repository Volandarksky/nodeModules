'use strict';

var w2v = require( './../lib' );

w2v.loadModel( __dirname + '/ff/vectorsff.txt', function( err, model ) {
	var wordVecs = model.getVectors( [ 'подарок', 'женский', 'браслет' ] );
	var result = wordVecs[0]
		.subtract( wordVecs[1] )
		.add( wordVecs[2] );

	console.log( model.getNearestWords(result, 10 ) );
});
