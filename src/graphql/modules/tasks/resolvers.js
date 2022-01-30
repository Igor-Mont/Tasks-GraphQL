import { Task } from "../../../database/models/Task";

export default {
  Query: {
    tasks: async () => Task.find()
  },
  Mutation: {
    createTask: async (_, { data }) => Task.create(data),
    updateTask: async (_, { id, data }) => Task.findOneAndUpdate(id, data, { new: true }),
    deleteTask: async (_, { id }) => Task.findOneAndDelete(id),
  }
}