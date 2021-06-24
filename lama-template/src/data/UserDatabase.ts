import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDatabase {

  protected tableName: string = "lama_users";

  public async createUser(
    user: User
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert(user)
        .into(this.tableName);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<User> {
    const result = await this.getConnection()
      .select("*")
      .from(this.tableName)
      .where({ email });

    return User.toUserModel(result[0]);
  }

}

export default new UserDatabase()