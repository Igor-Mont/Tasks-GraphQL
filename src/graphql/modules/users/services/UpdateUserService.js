import { User } from "../../../../database/models/User";

class UpdateUserService {

  async execute(id ,{ name, username, email }) {
    const userAlreadyExists = await User.findOne({ email });

    if(userAlreadyExists) throw new Error("Email already exists");

    const user = await User.findOneAndUpdate(id, data, { new: true });

    return user;
  }
}

export { UpdateUserService };