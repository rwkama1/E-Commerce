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
    public async getOrder(id:string) {

        let orderobj= null;
        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Order");
            const getorder = await collection.findOne({_id:id});
            if (getorder == null) { return null; }
            orderobj = new Order(getorder._id,getorder._date,getorder._state,getorder._total,getorder._client,getorder._listOrderDetails);
            return orderobj;
            cn.close();

        }
        catch (e) {
            throw new DataException("Order could not be searched");
        }

    }
    public async listpendingOrders() {
        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Order");
            const result = await collection.find({_state : 'Pending' }).toArray();

            let array = [];
            for (var order of result) {
                var orderobj = new Order(order._id,order._date,order._state,order._total,order._client,order._listOrderDetails);
                array.push(orderobj);
            }
            return array;
            cn.close();

        }
        catch (e) {
            throw new DataException("Orders could not be listed" + e.message);
        }

    }
    public async updatestateOrder(dtorder:Order ) {
        try {

            let cn = await Conexion.uri().connect();
            let query = { _id: dtorder.id };
            var newvalues = { $set: { _state: dtorder.state} };
            const colorder = cn.db("ECommerce").collection("Order");
            const result = await colorder.updateOne(query,newvalues);
            cn.close();

        }
        catch (e) {
            throw new DataException("Order could not be updated" + e.message);
        }
    }
}