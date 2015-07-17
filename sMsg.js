
/************************************
 * sMsg : https://github.com/snovakovic/sMsg
 * author: stefan.novakovich@gmail.com (www.is.gd/snovakovic)
 * v0.1
 ****************************************/
var sMsg = (function () {
	var subscribers = [];
	return {
		on: function ( subscribe, callback ) {
			subscribers[subscribe] = subscribers[subscribe] ? subscribers[subscribe] : [];
			subscribers[subscribe].push(callback);
		},
		getAllSubscribers: function() {
			return subscribers;
		},
		broadcast: function( to, obj ) {
			for (var i = 0; i < subscribers[to].length; i++) {
				subscribers[to][i](obj);
			}
		}
	}
})();