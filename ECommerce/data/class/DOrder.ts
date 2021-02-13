import { Client } from "../../shared/entity/Client";
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
      var randomenumber = Math.floor(Math.random()*(9999999999+1))
        dtorder.id=randomenumber;
          var now =new Date();
          dtorder.date=now;
           let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Order");
            const result = await collection.insertOne(dtorder);
            cn.close();

        }
        catch (e) {
            throw new DataException("Order could not be added" + e.message);
        }
    }
    public async deleteOrder(dtorder:Order ) {
        try {
            let query = { _id: dtorder.id };
           let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Order");
            const result = await collection.deleteOne(dtorder);
            cn.close();

        }
        catch (e) {
            throw new DataException("Order could not be deleted" + e.message);
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
    //***************************************************** */
    public async getOrder(id:number) {

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
    public async listdeliveredOrders() {
        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Order");
            const result = await collection.find({_state : 'Delivered' }).toArray();

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
    public async listClientOrders(identitycard:string) {
        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Order");
            const result = await collection.find({"_client._identitycard":identitycard }).toArray();

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
    public async getOrders() {
        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Order");
            const result = await collection.find({}).toArray();

            let array =[];
            for (var order of result) {
                var orderobj = new Order(order._id,order._date,order._state,order._total,order._client,order._listOrderDetails);
                array.push(orderobj);
            }
            cn.close();
            return array;
            

        }
        catch (e) {
            throw new DataException("Orders could not be listed" + e.message);
        }

    }
    public async listOrdersbyDate(date1:Date,date2:Date) {
        try {
            let cn = await Conexion.uri().connect();
            const collection = cn.db("ECommerce").collection("Order");
            const result = await collection.find({$and :[{  _date : { '$gte' : date1 } },{  _date : { '$lte' : date2 } },{  _state : 'Delivered' } ] }).toArray();

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
    
}