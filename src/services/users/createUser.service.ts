import { Repository } from "typeorm";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { AppDataSource } from "../../data-source";
import { responseUserSchema } from "../../schemas/users.schemas";
import { User } from "../../entities/users.entity";

const createUserService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepo.create(userData);

  await userRepo.save(user);

  const userZod: TUserResponse = responseUserSchema.parse(user);
  return userZod;
};

export default createUserService;
