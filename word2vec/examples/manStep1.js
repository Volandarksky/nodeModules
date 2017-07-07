'use strict';

var w2v = require( './../lib' );

w2v.word2phrase( __dirname + '/gift/man.txt', __dirname + '/gift/phrasesMan.txt', {
	threshold: 5,
	debug: 2,
	minCount: 2
});
