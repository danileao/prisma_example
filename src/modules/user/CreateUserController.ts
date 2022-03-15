import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserPrismaRepository } from "./UserPrismaRepository";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, username } = request.body;

    const repository = new UserPrismaRepository();
    const createUserUseCase = new CreateUserUseCase(repository);

    const createUser = await createUserUseCase.execute({ name, username });

    return response.json(createUser);
  }
}
