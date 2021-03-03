$(document).ready(function () {
    tab_show();
})

function tab_show() {
    $('.see-all').on('click', function () {
        $('.see-all').addClass('active')
        $('.see-search').removeClass('active')

        $('.see-all-area').show()
        $('.see-search-area').hide()
    })
    $('.see-search').on('click', function () {
        $('.see-all').removeClass('active')
        $('.see-search').addClass('active')

        $('.see-search-area').show()
        $('.see-all-area').hide()
    })
}

function textarea_edit_post(id) {
    textarea_show_hide(id);
    let contents = $(`#${id}-contents`).text().trim();
    console.log(contents)
    $(`#${id}-edit`).val(contents.trim())
}

function textarea_show_hide(id) {
    if ($(`#${id}-edit`).css('display') == 'none') {
        $(`#${id}-edit`).show()
        // alert(id)
        $(`#${id}-icon`).addClass('active')
        $(`#${id}-icon`).removeClass('deactive')
        $(`#${id}-save-btn`).addClass('active')
    } else if ($(`#${id}-edit`).css('display') == 'block') {
        $(`#${id}-edit`).hide()
        $(`#${id}-icon`).removeClass('active')
        $(`#${id}-icon`).addClass('deactive')
        $(`#${id}-save-btn`).removeClass('active')
    }
}