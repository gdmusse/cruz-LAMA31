import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {
    protected tableName: string = "lama_bands";

    public async createBand(band: Band): Promise<void> {
        try {
            await this.getConnection().insert(band).into(this.tableName)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}

export default new BandDatabase();