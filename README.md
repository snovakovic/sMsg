# sMsg

Small Sub/Pub

```javascript
  document.getElementById("test").addEventListener("click", function() {
    sMsg.broadcast('test-click', { message: 'test message'});
  });

  sMsg.on('test-click', function(data) {
    console.log('click data', data);
  });

  sMsg.on('test-click', function () {
    console.log("we can have as much subscribers as we like");
  });

```
