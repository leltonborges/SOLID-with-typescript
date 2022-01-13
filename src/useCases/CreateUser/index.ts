import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUserCase";

const mailtrapMailProvider: MailtrapMailProvider = new MailtrapMailProvider();
const postrgresUsersRepository: PostgresUserRepository = new PostgresUserRepository();

const createUserUseCase = new CreateUserUseCase(
    postrgresUsersRepository,
    mailtrapMailProvider,
);

const createuserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createuserController }