import { Task } from "../../../database/models/Task";
import { User } from "../../../database/models/User";
import { CreateTaskService } from "./services/CreateTaskService";
import { DeleteTaskService } from "./services/DeleteTaskService";
import { UpdateTaskService } from "./services/UpdateTaskService";

const createTaskService = new CreateTaskService();
const deleteTaskService = new DeleteTaskService();
const updateTaskService = new UpdateTaskService();

export default {
  Task: {
    owner: async (post) => await User.findById(post.owner)
  },
  Query: {
    tasks: async () => await Task.find()
  },
  Mutation: {
    createTask: async (_, { data }) => await createTaskService.execute(data),
    updateTask: async (_, { id, data }) => await updateTaskService.execute(id, data),
    deleteTask: async (_, { id }) => await deleteTaskService.execute(id) ,
  }
}