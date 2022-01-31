import { Task } from "../../../../database/models/Task";

class DeleteTaskService {

  async execute(id) {
    const deleted = await Task.findOneAndDelete(id);

    return !!deleted;
  }
}

export { DeleteTaskService };