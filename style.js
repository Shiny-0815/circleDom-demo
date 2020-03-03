let n = 0
let divs = $('div').get()
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', () => {
        setTimeout(() => {
            divs[i].classList.add('active')
        }, n * 500)
        n += 1
    }, true)  //从爷爷到孙子
}

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', () => {
        setTimeout(() => {
            divs[i].classList.remove('active')
        }, n * 500)
        n += 1
    })
}
