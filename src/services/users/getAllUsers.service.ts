import { Repository } from "typeorm";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { usersArraySchema } from "../../schemas/users.schemas";
import { User } from "../../entities/users.entity";

const getAllUsersService = async (
  isAdmin: boolean
): Promise<TUserResponse[]> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  if (!isAdmin) {
    throw new AppError("Insufficient permission", 403);
  }

  const users: Array<User> = await userRepo.find();

  const usersZod: TUserResponse[] = usersArraySchema.parse(users);

  return usersZod;
};

export default getAllUsersService;
