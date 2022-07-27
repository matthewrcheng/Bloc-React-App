var pars = $("p");
text = pars[0].innerHTML;
var arrOfStrings = [];
$.ajax({
  type: "POST",
  url: "python/test.py",
  data: { param: text}
}).done(function( o ) {
   arrOfStrings = processParagraph(text);
});
console.log(arrOfStrings);