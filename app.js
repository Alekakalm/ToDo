document.addEventListener('DOMContentLoaded', () => {

    const tasks = []
    const addTask = document.querySelector('.input-group>.btn')
    const list = document.querySelector('.list')
    const taskCount = document.querySelector('.tasks')
    const taskText = document.querySelector('.input-group>.form-control')


    addTask.addEventListener('click', () => {


        list.innerHTML = '';

        tasks.push({ title: taskText.value, state: ''})

        tasks.forEach((task) => {
            list.innerHTML += '<div class="input-group mb-3">\n' +
                '                <div class="input-group-text">\n' +
                '                    <input class="form-check-input mt-0" type="checkbox" value="" ' + task.state + ' >\n' +
                '                </div>\n' +
                '                <input type="text" class="form-control" value="'+ task.title + '" >\n' +
                '            </div>'
        })

        taskText.value = ''

        taskCount.innerHTML = tasks.length + 'task';


       list.querySelectorAll('.form-check-input').forEach((checkbox, i) => {
           checkbox.addEventListener('click', ()=>{
               const task = tasks[i]
               if (checkbox.checked) {
                   task.state = 'checked'
               }
               else{
                   task.state = ''
               }
               console.log(checkbox.checked)
           })
       })
    })

})
