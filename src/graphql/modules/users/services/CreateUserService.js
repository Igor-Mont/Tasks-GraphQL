import { User } from "../../../../database/models/User";

class CreateUserService {

  async execute({ name, username, email }) {
    const userAlreadyExists = await User.findOne({ email }).exec();

    if(userAlreadyExists) throw new Error("Email already exists");

    const user = await User.create({
      name,
      username,
      email
    });

    return user;
  }
}

export { CreateUserService };