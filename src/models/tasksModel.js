const connection = require('./connection');
const getAll = async()=>{
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

const createTask = async (task) => {
  const {title} = task;
  const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?,?,?)';
  const dataUtc = new Date().toUTCString();
  const [createdTask] = await connection.execute(query,[title, 'pendente', dataUtc]);

  return createdTask;
};

module.exports = {
  getAll,
  createTask
};