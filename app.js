var app = new Vue({
  el: "#app",
  data: {
    title: "My Todo List",
    shouldWarn: false,
    newTodo: "",
    todos: ["Learn Vue", "Learn CI/CD", "Eat dinner", "Play GTA V"],
  },
  methods: {
    createNewTodo: function () {
      if (this.newTodo) {
        this.todos.push(this.newTodo);
        this.newTodo = "";
        this.shouldWarn = false;
      } else {
        console.log("newTodo doesn't exists.");
        this.shouldWarn = true;
      }
    },
  },
});
