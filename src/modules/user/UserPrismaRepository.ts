import { prismaClient } from "../../database/client";
import { IUserRepository } from "./IUserRepository";
import { User } from "./User";

export class UserPrismaRepository implements IUserRepository {
  async create({ name, username }: User): Promise<User> {
    const user = await prismaClient.user.create({
      data: {
        name,
        username,
      },
    });

    return user;
  }
  async list(): Promise<User[]> {
    const users = await prismaClient.user.findMany();
    return users;
  }
}
