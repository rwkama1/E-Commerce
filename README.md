# E-Commerce

This package contains a backend of what would be the logic of a e-commerce software, the architecture used is made in 3 layers


## Description

### General idea

An important plaza company, a market leader in its field, has contacted its team to commission the development of its new site for electronic commerce.

### Description of Reality

The catalog of articles can be consulted by any visiting user, including different types of searches. Items can be added to the virtual shopping cart, but orders cannot be effectively placed until you are logged into the site.
Registered users are those who will be able to place orders through the site, since at the time of registration they will automatically be asked for a credit card number, which will be used to debit the amount of the order.
The administrators will be the only ones who can carry out the maintenance of the articles and registered customers. They will also be in charge of determining which order has already been generated and sent to the client.
The articles that the company sells via the web have the usual data: barcode (unique in the system and unique identifier), name, price, current stock, brief description of the same and an image. Also, articles belong to a category. Each category has a name (which identifies it) and a description.
Once an item is selected from the catalog, all the details of the catalog (including the image) should be displayed; and the user will be able to enter an amount (not higher than the current stock of the same) and if they wish they can add said item to the shopping cart.

### Website Features

#### Web Form: Main (site default form)
#### Participating Actor: public

Summary: The complete catalog of the company's articles must be displayed. The following filters / orders can be made: ordered by price (from lowest to highest), ordered by category, filtered by category. This last filter uses the category that the user selects from a Select control. If an item is selected, it must be displayed (including the image). You must also be able to enter an amount and you must be able to add said item to the shopping cart. A control button will be visible at all times, which will allow the order to be generated. As to place the order, you must have a registered client, you must request a username and password to verify that said client is registered. If it is, the complete order (articles and their quantities, final total) will be displayed on a new page, requesting order confirmation and stored in the data repository. Within the deployment of the order, the articles of the same can be eliminated. The orders have a self-generated identifier number, requested date (which is the current date and is loaded automatically), registered customer who requests it, set of ordered items (continuously with the quantity of each one) and a total thereof.

#### Web Form: ABM of Article Categories.
#### Participating Actor: Admin user

Summary: This form may perform any of the 3 actions, from the entry of the
name of a category. If the code already exists, it can be deleted or modified (after displaying all your data). In case the name does not exist, all the data will be requested to generate a new category in the data repository.

#### Web Form: ABM Articles
#### Participating Actor: Admin user

Summary: This form may perform any of the 3 actions, from the entry of the
barcode of an item. If the code already exists, it can be deleted or modified (after displaying all your data). In case the code does not exist, all the data will be requested to generate a new article in the data repository.

#### Web Form: ABM System Users
#### Participating Actor: Admin user

Summary: This form will allow you to perform any of the 3 actions, from the entry of
the identity card. If it already exists, it can be deleted or modified (after displaying all your data). If it does not exist, all the data will be requested to generate a new user in the data repository. All users are identified by their identity card, have full name, username (unique in the system) and password. In case of being a registered customer type user, you must also enter the shipping address of the orders and the credit card number for payment. If you are an administrator type user, you should also know your position.

#### Web Form: List of Pending Orders
#### Participating Actor: Administrator user

Summary: This form will show the list of orders not yet generated, nor
delivered. If one is selected, all its data (including list of items with quantities, requesting customer, total) must be displayed on a new web page. There should be a Button that allows marking the order as generated and delivered in the data repository.

#### Web Form: General Order List.
#### Participating Actor: Administrator user

Summary: This form will display a list of system orders. The list can be filtered by the following criteria: delivered orders, pending orders, orders from a client (request for the identity card of the same through a text box). If an order is selected, all its data must be displayed.



#### Web Form: List of Personal Orders.
#### Participating Actor: Registered customer user

Summary: This form will allow to duplicate or eliminate orders of the client currently logged in. For this, all the customer's orders must be listed, differentiating which were already delivered and which are still pending. If an order is selected, and depending on its status, it can either be eliminated (if pending) or duplicated (if it has already been generated). Either of both actions must have a confirmation from the user.

#### Web Form: List of Orders Delivered by Date.
#### Participating Actor: Administrator User

Summary: This form will request a range of dates, from which all orders that have been delivered within that range will be searched. For the purposes of this list, it is considered that the order request date is the same as when the delivery was made. An XML file must be generated with said information. The format of the nodes should be the following:

< Order >
< Date > yyyyMMdd < / Date >
< Client >  Client Name < Client >
< Address > Delivery Address < Address >
< QuantityTotalArticles > 9999 < / QuantityTotalArticles >
< Order >

## Usage

https://github.com/rwkama1/APIECommerce

```Javascript
const FactoryLogic = require("./ECommerce/dist/logic/FactoryLogic").FactoryLogic;
const Category = require("./ECommerce/dist/shared/entity/Category").Category;
const Article = require("./ECommerce/dist/shared/entity/Article").Article;
const Client = require("./ECommerce/dist/shared/entity/Client").Client;
const Administrator = require("./ECommerce/dist/shared/entity/Administrator").Administrator;
const Order = require("./ECommerce/dist/shared/entity/Order").Order;
 var dtcat = new Category("Conectividad", "");
var dtart=new Article("12345678909898","Monitor Led 19.5' Hd Kolke Entradas Hdmi Y Vga Loi",,10,
"Disfrutá de una buena calidad de imagen con este monitor Kolke KES-459 que cuenta con una pantalla LED de 19.5 y una resolución de 1366 x 768. Puede inclinarse 5° hacia adelante y 15° hacia atrás.",
"gdsg.gif",dtcat);
 var dtclient = new Client("72289541",'Client3',"Client3","Client3","","");
var dtadmin = new Administrator("85634858",'AdminAdmin',"Admin2","Admin","Manager");


***************************************************************
CATEGORIES

FactoryLogic.getLCategory().addCategory(dtcat).then(data => {
    console.log(data);
});

FactoryLogic.getLCategory().deleteCategory(dtcat).then(data => {
    console.log(data);
});
 FactoryLogic.getLCategory().getCategorysByNameLetter('').then(data => {
    console.log(data);
});
 FactoryLogic.getLCategory().getCategories().then(data => {
    console.log(data);
});

********************************************************************************** */
ARTICLES

FactoryLogc.getLCategory().getCategory(dtcat.name).then(scat => {
    console.ilog(scat);
   var dtart=new Article("45687945345387","Monitor Samsung Curvo 24 Pulgadas Gamer Freesync Cf390 - Bde",184,23,
"Monitor Samsung Curvo 24 Pulgadas Gamer Freesync Cf390 - Bde Black Dog Electronics",
"monitorsm.jpg",scat);
    FactoryLogic.getLArticle().addArticle(dtart).then(data => {
        console.log(data);
    });


 });

FactoryLogic.getLCategory().getCategory(dtcat.name).then(scat => {
    console.log(scat);
   var dtart=new Article("478963545879789","Disco Duro 1tb Wd Purpura",85,28,
"Está hecho exclusivamente para videovigilancia, el mejor para trabajar 24/7 y además reduce errores de grabación.",
"discoduro.jpg",scat);
    FactoryLogic.getLArticle().updateArticle(dtart).then(data => {
        console.log(data);
    });


 });

FactoryLogic.getLArticle().deleteArticle(dtart).then(scat => {
    console.log(scat);

})

FactoryLogic.getLArticle().registerStock("12345678909898",1000).then(scat => {
    console.log(scat);

});
 FactoryLogic.getLArticle().orderArticlesbyPrice().then(data => {
    console.log(data);
});
FactoryLogic.getLArticle().orderArticlesbyCategory().then(data => {
    console.log(data);
});
FactoryLogic.getLArticle().filterArticlesbyCategory(dtcat.name).then(data => {
    console.log(data);
});
FactoryLogic.getLArticle().deStock("12345678909898",1).then(data => {
    console.log(data);
});

********************************************************************************** */
USER

CLIENT

FactoryLogic.getLUser().addUser(dtclient).then(data => {
    console.log(data);
});
FactoryLogic.getLUser().loginUser("Client1","Client").then(data => {
    console.log(data);
});
FactoryLogic.getLUser().updateUser(dtclient).then(data => {
    console.log(data);
});
FactoryLogic.getLUser().deleteUser(dtclient).then(data => {
    console.log(data);
});
FactoryLogic.getLUser().getClients().then(data => {
    console.log(data);
});

ADMIN
 
FactoryLogic.getLUser().addUser(dtadmin).then(data => {
    console.log(data);
});
FactoryLogic.getLUser().loginUser("Admin","Admin").then(data => {
    console.log(data);
});
FactoryLogic.getLUser().updateUser(dtadmin).then(data => {
    console.log(data);
});
FactoryLogic.getLUser().deleteUser(dtadmin).then(data => {
    console.log(data);
});
FactoryLogic.getLUser().getAdmins().then(data => {
    console.log(data);
});
************************************************************************ */
ORDER
async function addordertoshoppingcart () {
 
      let start = await FactoryLogic.getLOrder().startOrder();
      console.log(start);
      let registerItemonOrder = await FactoryLogic.getLOrder().registerItemonOrder("478963545879789", 1);
      console.log(registerItemonOrder);
      let registerItemonOrder2 = await FactoryLogic.getLOrder().registerItemonOrder("653453487975466548", 2);
      console.log(registerItemonOrder2);
      let registerItemonOrder3 = await FactoryLogic.getLOrder().registerItemonOrder("45687945345387", 1);
      console.log(registerItemonOrder3);
     
      let loginClient = await FactoryLogic.getLUser().loginUser(dtclient.username, dtclient.password);
      console.log("Welcome: "+loginClient.completename)
      
      let close = await FactoryLogic.getLOrder().closeOrder();
      console.log(close);
    //   let cancel = await FactoryLogic.getLOrder().cancelOrder();
    //   console.log(cancel);
    //   let removeItem = await FactoryLogic.getLOrder().removeItemonOrder("45687945345387");
    //   console.log(removeItem);
      
    //   let close2 = await FactoryLogic.getLOrder().closeOrder();
    //   console.log(close2);
      
      let saveorder = await FactoryLogic.getLOrder().saveOrder(loginClient);
      console.log(saveorder);
    
  }
  addordertoshoppingcart().then(data => {
           
   }); 

FactoryLogic.getLOrder().getOrder(1).then(data => {
    console.log(data);
});
FactoryLogic.getLOrder().getPendingOrders().then(data => {
    console.log(data);
});
FactoryLogic.getLOrder().getClientOrders(dtclient.identitycard).then(data => {
    console.log(data);
});
FactoryLogic.getLOrder().getAllOrders().then(data => {
    console.log(data);
});
FactoryLogic.getLOrder().getDeliveredOrders().then(data => {
    console.log(data);
});
async function deliverOrder () {
 
      let getorder = await FactoryLogic.getLOrder().getOrder(3);
      console.log(getorder);
      let delivorder = await FactoryLogic.getLOrder().deliverOrder(getorder);
      console.log(delivorder);
     
  }
  deliverOrder().then(data => {
           
   }); 
async function PersonalOrder () {
 
 
      let loginClient = await FactoryLogic.getLUser().loginUser(dtclient.username, dtclient.password) ;
      console.log("Welcome: "+loginClient.completename)
      let getorders = await FactoryLogic.getLOrder().getClientOrders(loginClient.identitycard);
      console.log(getorders);
      let getorder = await FactoryLogic.getLOrder().getOrder(0);
      console.log(getorder);
    let pervorder = await FactoryLogic.getLOrder().personalOrder(getorder);
    console.log(pervorder);
   
}
PersonalOrder().then(data => {
           
   }); 

var date1=new Date("February 2,2021");
var date2=new Date("February 4,2021");
FactoryLogic.getLOrder().getOrdersbyDates(date1,date2).then(data => {
    console.log(data);
});
```

## License
[MIT](https://choosealicense.com/licenses/mit/)




