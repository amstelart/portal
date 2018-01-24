// Если на проекте jQuery
$( document ).ready(function() {

  // Открытие/закрытие блока с кодом
  $('.tags__toggler').on('click', function (e) {
    var $toggler = $(this),
        $tagsBody = $toggler.closest('.tags').find('.tags__body'),
        shownClass = 'tags__body--shown',
        textOpen = $toggler.data('text-open'),
        textClose = $toggler.data('text-close');

    if ($tagsBody.hasClass(shownClass)) {
      $tagsBody.removeClass(shownClass);
      $toggler.text(textOpen);
    } else {
      $tagsBody.addClass(shownClass);
      $toggler.text(textClose);
    }
  });

});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
