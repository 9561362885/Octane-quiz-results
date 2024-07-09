
$( document ).ready(function() {

$('.astro__cards_main_prod_nav ul.prodnav li a').click(function(e){
e.preventDefault()
var conid = $(this).attr('href');
$(this).parents('.astro__cards_main_prod').find('ul.prodnav li a').removeClass('acive')
$(this).parents('.astro__cards_main_prod').find('.astro__cards_main_prod_inner .prodcontent').hide()
$(this).addClass("active")
$(conid).show()

})
$('.astro__cards_main_prod_nav ul.prodnav li:first-child a').trigger('click')
})