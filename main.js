$(document).ready(function (){
    tabshow();
})

function tabshow(){
    $('.see-all').on('click', function (){
        $('.see-all').addClass('active')
        $('.see-search').removeClass('active')

        $('.see-all-area').show()
        $('.see-search-area').hide()
    })
    $('.see-search').on('click', function (){
        $('.see-all').removeClass('active')
        $('.see-search').addClass('active')

        $('.see-search-area').show()
        $('.see-all-area').hide()
    })
}