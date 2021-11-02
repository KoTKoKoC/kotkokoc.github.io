let state, visibilityChange
  if (typeof document.hidden !== "undefined") {
    visibilityChange = "visibilitychange"
    state = "visibilityState"
  }
  document.addEventListener(visibilityChange, function() {
    document.title = isFocused()
  }, false);
  document.title = isFocused()
  function isFocused(){
    return document[state] === 'visible'
  }
