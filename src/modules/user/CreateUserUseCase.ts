import { IUserRepository } from "./IUserRepository";
import { User } from "./User";

export class CreateUserUseCase {
  constructor(private repository: IUserRepository) {}

  async execute(user: User) {
    const userCreated = await this.repository.create(user);
    return userCreated;
  }
}
