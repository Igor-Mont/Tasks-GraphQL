import { User } from "../../../../database/models/User";

class DeleteUserService {

  async execute(id) {
    const deleted = await User.findOneAndDelete(id);

    return !!deleted;
  }
}

export { DeleteUserService };