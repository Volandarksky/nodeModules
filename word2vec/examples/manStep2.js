'use strict';

var w2v = require( './../lib' );

w2v.word2vec( __dirname + '/gift/male.txt', __dirname + '/gift/vectorsMale.txt', {
	cbow: 1,
	size: 1,
	window: 8,
	negative: 25,
	hs: 0,
	sample: 1e-4,
	threads: 0,
	iter: 15,
	minCount: 1
});
