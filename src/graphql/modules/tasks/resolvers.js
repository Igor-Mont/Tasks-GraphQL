import { Task } from "../../../database/models/Task";
import { User } from "../../../database/models/User";

export default {
  Task: {
    owner: async (post) => await User.findById(post.owner)
  },
  Query: {
    tasks: async () => await Task.find()
  },
  Mutation: {
    createTask: async (_, { data }) => await Task.create(data),
    updateTask: async (_, { id, data }) => await Task.findOneAndUpdate(id, data, { new: true }),
    deleteTask: async (_, { id }) => await Task.findOneAndDelete(id),
  }
}