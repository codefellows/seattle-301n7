'use strict';
(function() {
  let something = 'hello from parent';
  (function() {
    console.log(something);
  })();
})();
