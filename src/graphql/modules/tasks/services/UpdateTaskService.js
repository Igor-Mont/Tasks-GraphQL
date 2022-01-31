import { Task } from "../../../../database/models/Task";

class UpdateTaskService {

  async execute(id ,{ title, description, isImportant, owner }) {
    const tasksByUser = await Task.find({ owner }).exec();
    const taskAlreadyExists = tasksByUser.some(task => task.title === title && task.description === description)

    if(taskAlreadyExists) throw new Error("Email already exists");

    const task = await Task.findOneAndUpdate(id, {
      title,
      description,
      isImportant,
      owner
    }, { new: true });

    return task;
  }
}

export { UpdateTaskService };