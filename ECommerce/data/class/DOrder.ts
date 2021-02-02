import { Order } from "../../shared/entity/Order";
import { DataException } from "../../shared/exceptions/dataexception";
import { Conexion } from "../Conection";

export class DOrder implements DOrder {

    private static instancia: DOrder;
    private constructor() { }
    public static getInstance(): DOrder {
        if (!DOrder.instancia) {
            DOrder.instancia = new DOrder();
        }

        return DOrder.instancia;
    }
    public async addOrder(dtorder:Order ) {
        try {

           let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Order");
            const result = await collection.insertOne(dtorder);
            cn.close();

        }
        catch (e) {
            throw new DataException("Order could not be added" + e.message);
        }
    }
}