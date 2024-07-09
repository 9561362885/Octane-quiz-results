$( document ).ready(function() {

$('.initial__cards_col_inner_nav ul.initnav li a').click(function(e){
e.preventDefault()
var conid = $(this).attr('href');
$(this).parents('.initial__cards_col_inner').find('ul.initnav li a').removeClass('acive')
$(this).parents('.initial__cards_col_inner').find('.initial__cards_col_inner_prod .initcontent').hide()
$(this).addClass("active")
$(conid).show()

})
$('.initial__cards_col_inner_nav ul.initnav li:first-child a').trigger('click')
})