import { BandBusiness } from "../src/business/BandBusiness";
import { BandInputDTO } from "../src/model/Band";
import hashGeneratorMock from "./mocks/hashGeneratorMock";
import idGeneratorMock from "./mocks/idGeneratorMock";
import bandDatabaseMock from "./mocks/BandDatabaseMock";
import authenticatorMock from "./mocks/authenticatorMock";
import { BandDatabase } from "../src/data/BandDatabase";

const bandBusinessMock = new BandBusiness(
  idGeneratorMock,
  bandDatabaseMock as BandDatabase,
  authenticatorMock
);

describe("BandBusiness", () => {
  describe("Register Band", () => {
    test("Should catch error if one input is empty", async () => {
      expect.assertions(2);

      const bandMock: BandInputDTO = {
        name: "mockBand",
        music_genre: "mockBand",
        responsible: "",
      };

      try {
        await bandBusinessMock.createBand(bandMock, "token_mock");
      } catch (error) {
        console.log(error);
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("Missing input");
      }
    });

    test("Should return success if everything is ok", async () => {
      expect.assertions(1);

      const bandMock: BandInputDTO = {
        name: "mockBand",
        music_genre: "mockBand",
        responsible: "mockBand",
      };

      try {
        const result = await bandBusinessMock.createBand(
          bandMock,
          "token_mock"
        );

        expect(result).toEqual("Band registered successfully!");
      } catch (error) {
        console.log(error.message);
      }
    });
  });
});
