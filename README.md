# sMsg

!!sMsg is now part of s.js library https://github.com/snovakovic/s.js 
This repository is deprecated. 

Extremely small and straight forward messaging (< 0.193 kb minified). 

Make as many subscriptions as you like and then just broadcast message to subscribers at any point. 
When you broadcast message you can send any object as a second parameter passing to subscribers whatever you want.

```javascript

    document.getElementById("send").addEventListener("click", function(){
        sMsg.broadcast('send', { message: 'message have been send'});
    });


    sMsg.on('send', function(obj){
        console.log("we have receive following object");
        console.log(obj);
    });

    sMsg.on('send', function () {
        console.log("we can have as much subscribers as we like");
    });

```
