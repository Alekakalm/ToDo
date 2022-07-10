document.addEventListener('DOMContentLoaded', () => {


    const addTask = document.querySelector('.add>button')
    const list = document.querySelector('.list')

    addTask.addEventListener('click', () => {
        list.innerHTML += '  <div class="input-group mb-3">\n' +
            '                <div class="input-group-text">\n' +
            '                    <input class="form-check-input mt-0" type="checkbox" value="" >\n' +
            '                </div>\n' +
            '                <input type="text" class="form-control">\n' +
            '            </div>'
    })


})
