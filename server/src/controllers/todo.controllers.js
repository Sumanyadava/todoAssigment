import Todo from "../model/todo.model.js";

const hello = async (req, res) => {
  res.send("server is running");
};

const todoGet = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.json({ message: "failed to fetch" });
  }
};

const todoPost = async (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = new Todo({
      text: text,
      completed: false,
    });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (error) {
    console.log(error);
    res.json({ message: "failed as todo" });
  }
};

const todoEdit = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { text: req.body.text, completed: req.body.completed },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    res.json({ message: "failed at edit" });
  }
};

const todoDelete = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.json({ message: "failed at deleting" });
  }
};

export { hello, todoGet, todoPost, todoEdit, todoDelete };
