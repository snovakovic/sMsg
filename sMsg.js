/*****************************************************
	  https://github.com/snovakovic/sMsg
    author: stefan.novakovich@gmail.com
    version: 0.0.2
 ***************************************************/
(function(global, factory) {
  // UMD pattern
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    global.sMsg = factory();
  }
}(this, (function() {
  var subs = {};

  return {
    on: function(subscribe, callback) {
      subs[subscribe] = subs[subscribe] ? subs[subscribe] : [];
      subs[subscribe].push(callback);
    },
    broadcast: function(subscription, data) {
      var subscribers = subs[subscription];
      (subscribers || []).forEach(function(sub) { sub.call(data); });
    }
  }
})));
