import { User } from "../../../database/models/User";

export default {
  Query: {
    user: async () => User.find()
  },
  Mutation: {
    createUser: async (_, { data }) => User.create(data),
    updateUser: async (_, { id, data }) => User.findOneAndUpdate(id, data, { new: true }),
    deleteUser: async (_, { id }) => User.findOneAndDelete(id),
  }
}