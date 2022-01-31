import { User } from "../../../database/models/User";
import { CreateUserService } from "./services/CreateUserService";
import { DeleteUserService } from "./services/DeleteUserService";
import { UpdateUserService } from "./services/UpdateUserService";

const createUserService = new CreateUserService();
const updateUserService = new UpdateUserService();
const deleteUserService = new DeleteUserService();

export default {
  Query: {
    users: async () => await User.find(),
    user: async (_, { id }) => await User.findById(id)
  },
  Mutation: {
    createUser: async (_, { data }) => await createUserService.execute(data),
    updateUser: async (_, { id, data }) => await updateUserService.execute(id, data),
    deleteUser: async (_, { id }) => await deleteUserService.execute(id),
  }
}