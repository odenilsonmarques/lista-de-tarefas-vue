// var todos = [
//     {
//         name:'Aprender javascript',
//         status:false
//     }, 
//     {
//         name:'Aprender xadrez',
//         status:true
//     },
//      {
//         name:'Aprender matemática',
//         status:false
//     }
// ]


const todoList = {

    data() {
        return {
            // todos:window.todos

            todos: [],

            newTodo: {
                status: false
            }
        }
    },

    methods: {
        addTodo: function () {
            if (!this.newTodo.name) {
                alert("Preencha o campo")
            }
            this.todos.push(this.newTodo)
            this.newTodo = { status: false }

            // Usando o localStorage e JSON.stringify para salvar a lista atualizada, para persistir os dados mesmo após recarregar a página.
            // O JSON.stringify converte o array de objetos em uma string JSON. O localStorage só pode armazenar strings.'
            localStorage.setItem('todos', JSON.stringify(this.todos))
        }
    },

    created() {
        const savedTodos = localStorage.getItem('todos')
        // console.log('aqui'+ savedTodos);
        if (savedTodos) {
            this.todos = JSON.parse(savedTodos)
        }
    },

    updated() {
        // atualizando as lista de tarefa (Antes ao marcar uma tarefa como conluida e ao atualizarmos a pagina se perdia essa alteração agora a alteração permanece mesmo atualizando a página)
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }
}

Vue.createApp(todoList).mount("#app")