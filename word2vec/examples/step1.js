'use strict';

var w2v = require( './../lib' );

w2v.word2phrase( __dirname + '/book/wim.txt', __dirname + '/book/phrases.txt', {
	threshold: 5,
	debug: 2,
	minCount: 2
});
