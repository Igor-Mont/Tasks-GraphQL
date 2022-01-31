import { Task } from "../../../../database/models/Task";

class CreateTaskService {

  async execute({ title, description, isImportant, owner }) {
    const tasksByUser = await Task.find({ owner }).exec();
    const taskAlreadyExists = tasksByUser.some(task => task.title === title && task.description === description)

    if(taskAlreadyExists) throw new Error("Task already exists");

    const task = await Task.create({
      title,
      description,
      isImportant,
      owner
    });

    return task;
  }
}

export { CreateTaskService };