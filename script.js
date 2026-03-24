let taskname = document.getElementById('task-name')
let addTask = document.getElementById('add-task-btn')
let taskList = document.getElementById('tasklist')
let tasks = [];
num = 0

addTask.addEventListener('click', function() {
    let name = ''
    if (taskname.value != '') {
        name = taskname.value

        let task = document.createElement("div")
        taskList.appendChild(task)
        let tasktitle = document.createElement("h1")
        tasktitle.textContent = name
        task.appendChild(tasktitle)
        let buttonscontainer = document.createElement("div")
        task.appendChild(buttonscontainer)
        let round = document.createElement("div")
        buttonscontainer.appendChild(round)
        let check = document.createElement("input")
        round.appendChild(check)
        let label = document.createElement("label")
        round.appendChild(label)
        let deletebtn = document.createElement("button")
        buttonscontainer.appendChild(deletebtn)
        let icon = document.createElement("img")
        deletebtn.appendChild(icon)

        taskList.classList.add("tasklist")
        task.classList.add("task")
        tasktitle.classList.add("taskname")
        buttonscontainer.classList.add("buttons-container")
        round.classList.add("round")
        num += 1
        check.id = `checkbox${num}`
        check.type = "checkbox"
        label.setAttribute("for",`checkbox${num}`)
        deletebtn.classList.add("delete")
        icon.src = "assets/trash 1.png"

        check.addEventListener("change", function() {
            if (this.checked) {
                task.classList.add("task-checked")
                console.log("funciona")
            } else {
                task.classList.remove("task-checked")
            }
            salvarTasks()
        })

        deletebtn.addEventListener("click", function() {
            task.remove()
            tasks.splice(tasks.indexOf(task), 1)
            salvarTasks()
        })

        tasks.push(task)
        salvarTasks()
    } else {
        alert('A tarefa precisa de um nome!')
    }
})

function salvarTasks() {
    let dados = tasks.map(function(task) {
        return {
            nome: task.querySelector(".taskname").textContent,
            concluida: task.classList.contains("task-checked")
        }
    })
    localStorage.setItem("tasks", JSON.stringify(dados))
}

function carregarTasks() {
    let dados = JSON.parse(localStorage.getItem("tasks")) || []
    dados.forEach(function(dado) {
        taskname.value = dado.nome
        addTask.click()

        if (dado.concluida) {
            let ultimaTask = tasks[tasks.length - 1]
            let check = ultimaTask.querySelector("input[type='checkbox']")
            check.checked = true
            ultimaTask.classList.add("task-checked")
        }
    })
    taskname.value = ''
}

carregarTasks()