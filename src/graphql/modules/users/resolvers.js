import { User } from "../../../database/models/User";

export default {
  Query: {
    user: async (__, { id }) => await User.findById(id)
  },
  Mutation: {
    createUser: async (_, { data }) => await User.create(data),
    updateUser: async (_, { id, data }) => await User.findOneAndUpdate(id, data, { new: true }),
    deleteUser: async (_, { id }) => await User.findOneAndDelete(id),
  }
}