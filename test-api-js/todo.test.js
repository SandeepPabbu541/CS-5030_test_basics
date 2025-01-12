var todoservice = require("./todo.service.js");
describe("todo test suite", () => {
  test("truth_value", () => {
    expect(true).toBe(true);
  });

  let todo_service = new todoservice();

  test("if service instance is created", () => {
    expect(todo_service instanceof todoservice).toBe(true);
  });

  // Initial length of the todo list is 3 // 3 default tasks
  test("get_todos", () => {
    expect(todo_service.get_todos().todo.length).toEqual(3);
  });

  // Write all your test cases here that corresponds to software requirements

  test("Adding new todo and checking its existance", () => {
    todo_service.add_todo({
      title: "T4",
      description: "D4",
      done: false,
    });
    expect(todo_service.get_todos().todo.length).toEqual(4);
    all_todos = todo_service.get_todos().todo;
    let value_found = false;
    for (var i = 0; i < all_todos.length; i++) {
      value_found = all_todos[i].title === "T4";
      if (value_found === true) break;
    }
    expect(value_found).toBe(true);
  });

  test("Deleting a todo from list and verifying it", () => {
    expect(todo_service.get_todos().todo.length).toEqual(4);
    answer = todo_service.delete_todo("T4");
    expect(answer).toBe(true);
    expect(todo_service.get_todos().todo.length).toEqual(3);
  });

  test("Updating a todo and verifying it", () => {
    expect(todo_service.get_todos().todo.length).toEqual(3);
    answer = todo_service.update_todo("T3", {
      title: "T45",
      description: "D45",
      done: false,
    });
    expect(answer).toBe(true);
    all_todos = todo_service.get_todos().todo;
    let value_found = false;
    for (var i = 0; i < all_todos.length; i++) {
      value_found = all_todos[i].title === "T45";
      if (value_found === true) break;
    }
    expect(value_found).toBe(true);
  });

  
});
