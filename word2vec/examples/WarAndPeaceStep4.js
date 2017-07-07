'use strict';

var w2v = require( './../lib' );

w2v.loadModel( __dirname + '/books/vectors.txt', function( err, model ) {
	console.log( model );

	var wordVecs = model.getVectors( [ 'дом', 'сын' ] );
	console.log( model.getNearestWord( wordVecs[0].values, 1 ) );

	var similar = model.mostSimilar( 'умер', 20 );
	console.log( similar );

	var analogy = model.analogy( 'мать',[ 'дом', 'отец' ], 10 );
	console.log( analogy );

	var similarity = model.similarity( 'отец', 'мать' );
	console.log( similarity );
});
