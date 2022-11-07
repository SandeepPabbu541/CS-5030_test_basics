class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T2",
            "description": "D2",
            "done": false
        },{
            "title": "T3",
            "description": "D3",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        this.todo_data["todo"].push(todo);
    }

    delete_todo(id){
        var todos = [];
        todos = this.todo_data.todo;
        for(var i=0; i < todos.length; i++){
            let value_found = todos[i].title;
            if( id === value_found){
                this.todo_data["todo"].splice(i, 1);
                return true;
            }
        }
        return false;
    }

    update_todo(id, todo){
        var todos = [];
        todos = this.todo_data.todo;
        for(var i=0; i < todos.length; i++){
            let value_found = todos[i].title;
            if( id === value_found){
                this.todo_data["todo"][i] = todo;
                return true;
            }
        }
        return false;
    }
}


module.exports= todoservice;