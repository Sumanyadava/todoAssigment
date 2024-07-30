import Todo from "../model/todo.model.js";

const hello = async(req,res) =>{
  res.send("server is running")
}

const todoGet = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos); 
}

const todoPost =async (req, res) => {
  const newTodo = new Todo({
    text: req.body.text,
    completed: false, 
  });
  const savedTodo = await newTodo.save();
  res.json(savedTodo);
}

const todoEdit = async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text, completed: req.body.completed },
    { new: true }
  );
  res.json(updatedTodo);
}

const todoDelete = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Todo deleted' });
}


export {hello,todoGet,todoPost,todoEdit, todoDelete}
