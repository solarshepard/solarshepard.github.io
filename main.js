function onReady() {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('html')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('html', true);
  setVisible('#loading', false);
});
