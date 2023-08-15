const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/taskMiddleware');

const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateTitleField, tasksController.createTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id',tasksMiddleware.validateStatusField, tasksMiddleware.validateTitleField, tasksController.updateTask);

module.exports = router;