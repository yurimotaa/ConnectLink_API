import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { User } from "../../entities/users.entity";

const deleteUserService = async (
  userId: number,
  isAdmin: boolean
): Promise<void> => {
  if (!isAdmin) {
    throw new AppError("Insufficient permission", 403);
  }

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id: userId });

  await userRepo.softRemove(user!);
};

export default deleteUserService;
