'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var submodules = ['flow', // Unified abstraction
'control', // Control flow utilities
'fp', // Async utils for functional programming
'adapters', // Adapters to convert different async contracts
'throttle', // Throttling utilities
'array', // Array utilities
'chain', // Process arrays sync and async array in chain
'collector', // DataCollector and KeyCollector
'queue', // Concurrent queue
'memoize', // Async memoization
'do'].map(function (path) {
  return require('./dist/' + path);
});

var flow = submodules[0].flow;
module.exports = Object.assign.apply(Object, [flow].concat(_toConsumableArray(submodules)));
