import { User } from "./User";

export interface IUserRepository {
  create(user: User): Promise<User>;
  list(): Promise<User[]>;
}
