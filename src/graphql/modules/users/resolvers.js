import { User } from "../../../database/models/User";
import { CreateUserService } from "./services/CreateUserService";

const createUserService = new CreateUserService();

export default {
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id)
  },
  Mutation: {
    createUser: async (_, { data }) => createUserService.execute(data),
    updateUser: async (_, { id, data }) => await User.findOneAndUpdate(id, data, { new: true }),
    deleteUser: async (_, { id }) => !!(await User.findOneAndDelete(id)),
  }
}