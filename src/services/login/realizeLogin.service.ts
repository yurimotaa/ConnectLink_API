import jwt from "jsonwebtoken";
import "dotenv/config";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { compare } from "bcryptjs";
import {
  TLoginRequest,
  TLoginResponse,
} from "../../interfaces/login.interfaces";
import { User } from "../../entities/users.entity";

const realizeLoginService = async (
  loginData: TLoginRequest
): Promise<TLoginResponse> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepo.findOne({
    where: {
      email: loginData.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign(
    {
      userId: user.id,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  return { token };
};

export default realizeLoginService;
