import { Repository } from "typeorm";
import { AppError } from "../../error";
import { TUserResponse, TUserUpdate } from "../../interfaces/users.interfaces";
import { AppDataSource } from "../../data-source";
import { responseUserSchema } from "../../schemas/users.schemas";
import { User } from "../../entities/users.entity";

const updateUserService = async (
  isAdmin: boolean,
  tokenId: number,
  userData: TUserUpdate,
  userId: number
): Promise<TUserResponse> => {
  if (!isAdmin && Number(tokenId) !== userId) {
    throw new AppError("Insufficient permission", 403);
  }

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const updatedUser: User = await userRepo.save({
    id: userId,
    ...userData,
  });

  const newUser = await userRepo.findOneBy({ id: updatedUser.id });

  const zodUser: TUserResponse = responseUserSchema.parse(newUser);

  return zodUser;
};

export default updateUserService;
