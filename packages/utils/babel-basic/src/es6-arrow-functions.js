// (function (x, f = () => x) {
//   var x;
//   var y = x;
//   x = 2;
//   return [x, y, f()];
// })(1);

var x = 1;
var a = () => x;
(function () {
  var x = 2;
  console.log(a());
})(1);
