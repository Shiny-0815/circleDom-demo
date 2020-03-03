var n = 0
$('div').on('click', function (e) {
    setTimeout(() => {
        $(e.currentTarget).addClass('active')
    }, n * 1000);
    //e.stopPropagation()
    n += 1
})