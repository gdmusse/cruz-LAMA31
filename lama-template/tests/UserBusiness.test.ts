import { BandBusiness } from "../src/business/BandBusiness";
import { UserBusiness } from "../src/business/UserBusiness";
import { UserDatabase } from "../src/data/UserDatabase";
import { BandInputDTO } from "../src/model/Band";
import { LoginInputDTO, UserInputDTO } from "../src/model/User";

import hashGeneratorMock from "./mocks/hashGeneratorMock";
import idGeneratorMock from "./mocks/idGeneratorMock";

import userDatabaseMock from "./mocks/UserDatabaseMock";
import bandDatabaseMock from "./mocks/BandDatabaseMock";
import authenticatorMock from "./mocks/authenticatorMock";
import { BandDatabase } from "../src/data/BandDatabase";

const userBusinessMock = new UserBusiness(
  idGeneratorMock,
  hashGeneratorMock,
  userDatabaseMock as UserDatabase,
  authenticatorMock
);

describe("UserBusiness", () => {
  describe("signup", () => {
    test("Should catch error when name is empty", async () => {
      expect.assertions(2);

      const user: UserInputDTO = {
        name: "",
        email: "mock@g.com",
        password: "123456",
        role: "normal",
      };

      try {
        await userBusinessMock.createUser(user);
      } catch (error) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Missing input");
      }
    });

    test("Should catch error when email is invalid", async () => {
      expect.assertions(2);

      const user: UserInputDTO = {
        name: "mock",
        email: "mockg.com",
        password: "123456",
        role: "normal",
      };

      try {
        await userBusinessMock.createUser(user);
      } catch (error) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Invalid email");
      }
    });

    test("Should catch error when password is invalid", async () => {
      expect.assertions(2);

      const user: UserInputDTO = {
        name: "mock",
        email: "mock@g.com",
        password: "1",
        role: "normal",
      };

      try {
        await userBusinessMock.createUser(user);
      } catch (error) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Invalid password");
      }
    });

    test("Should catch error when role is invalid", async () => {
      expect.assertions(2);
      const user: UserInputDTO = {
        name: "mock",
        email: "mock@g.com",
        password: "123456",
        role: "GUEST",
      };
      try {
        await userBusinessMock.createUser(user);
      } catch (error) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Invalid user role");
      }
    });

    test("Should return access token on sucessful signup", async () => {
      expect.assertions(1);
      const user: UserInputDTO = {
        name: "mock",
        email: "mock@g.com",
        password: "123456",
        role: "NORMAL",
      };
      try {
        const accessToken = await userBusinessMock.createUser(user);

        expect(accessToken).toBe("token_mock");
      } catch (error) {
        console.log(error.message);
      }
    });
  });

  describe("getUserByEmail", () => {
    test("Should catch error when email is not registered", async () => {
      expect.assertions(2);

      const userMock: LoginInputDTO = { email: "g@g.com", password: "1" };

      try {
        await userBusinessMock.getUserByEmail(userMock);
      } catch (error) {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("User not found");
      }
    });
  });
});

