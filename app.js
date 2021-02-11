// const FactoryLogic = require("./ECommerce/dist/logic/FactoryLogic").FactoryLogic;
// const Category = require("./ECommerce/dist/shared/entity/Category").Category;
// const Article = require("./ECommerce/dist/shared/entity/Article").Article;
// const Client = require("./ECommerce/dist/shared/entity/Client").Client;
// const Administrator = require("./ECommerce/dist/shared/entity/Administrator").Administrator;
// const Order = require("./ECommerce/dist/shared/entity/Order").Order;
//  var dtcat = new Category("Conectividad", "");
// var dtart=new Article("12345678909898","Monitor Led 19.5' Hd Kolke Entradas Hdmi Y Vga Loi",,10,
// "Disfrutá de una buena calidad de imagen con este monitor Kolke KES-459 que cuenta con una pantalla LED de 19.5 y una resolución de 1366 x 768. Puede inclinarse 5° hacia adelante y 15° hacia atrás.",
// "gdsg.gif",dtcat);
 var dtclient = new Client("72289541",'Client3',"Client3","Client3","","");
// var dtadmin = new Administrator("85634858",'AdminAdmin',"Admin2","Admin","Manager");


//***************************************************************
//CATEGORIES

// FactoryLogic.getLCategory().addCategory(dtcat).then(data => {
//     console.log(data);
// });

// FactoryLogic.getLCategory().deleteCategory(dtcat).then(data => {
//     console.log(data);
// });
//  FactoryLogic.getLCategory().getCategorysByNameLetter('').then(data => {
//     console.log(data);
// });
//  FactoryLogic.getLCategory().getCategories().then(data => {
//     console.log(data);
// });

//********************************************************************************** */
//ARTICLES

// FactoryLogc.getLCategory().getCategory(dtcat.name).then(scat => {
//     console.ilog(scat);
//    var dtart=new Article("45687945345387","Monitor Samsung Curvo 24 Pulgadas Gamer Freesync Cf390 - Bde",184,23,
// "Monitor Samsung Curvo 24 Pulgadas Gamer Freesync Cf390 - Bde Black Dog Electronics",
// "monitorsm.jpg",scat);
//     FactoryLogic.getLArticle().addArticle(dtart).then(data => {
//         console.log(data);
//     });


//  });

// FactoryLogic.getLCategory().getCategory(dtcat.name).then(scat => {
//     console.log(scat);
//    var dtart=new Article("478963545879789","Disco Duro 1tb Wd Purpura",85,28,
// "Está hecho exclusivamente para videovigilancia, el mejor para trabajar 24/7 y además reduce errores de grabación.",
// "discoduro.jpg",scat);
//     FactoryLogic.getLArticle().updateArticle(dtart).then(data => {
//         console.log(data);
//     });


//  });

// FactoryLogic.getLArticle().deleteArticle(dtart).then(scat => {
//     console.log(scat);

// })

// FactoryLogic.getLArticle().registerStock("12345678909898",1000).then(scat => {
//     console.log(scat);

// });
//  FactoryLogic.getLArticle().orderArticlesbyPrice().then(data => {
//     console.log(data);
// });
// FactoryLogic.getLArticle().orderArticlesbyCategory().then(data => {
//     console.log(data);
// });
// FactoryLogic.getLArticle().filterArticlesbyCategory(dtcat.name).then(data => {
//     console.log(data);
// });
// FactoryLogic.getLArticle().deStock("12345678909898",1).then(data => {
//     console.log(data);
// });

//********************************************************************************** */
//USER

//CLIENT

// FactoryLogic.getLUser().addUser(dtclient).then(data => {
//     console.log(data);
// });
// FactoryLogic.getLUser().loginUser("Client1","Client").then(data => {
//     console.log(data);
// });
// FactoryLogic.getLUser().updateUser(dtclient).then(data => {
//     console.log(data);
// });
// FactoryLogic.getLUser().deleteUser(dtclient).then(data => {
//     console.log(data);
// });
// FactoryLogic.getLUser().getClients().then(data => {
//     console.log(data);
// });

//ADMIN
 
// FactoryLogic.getLUser().addUser(dtadmin).then(data => {
//     console.log(data);
// });
// FactoryLogic.getLUser().loginUser("Admin","Admin").then(data => {
//     console.log(data);
// });
// FactoryLogic.getLUser().updateUser(dtadmin).then(data => {
//     console.log(data);
// });
// FactoryLogic.getLUser().deleteUser(dtadmin).then(data => {
//     console.log(data);
// });
// FactoryLogic.getLUser().getAdmins().then(data => {
//     console.log(data);
// });
//************************************************************************ */
//ORDER
// async function addordertoshoppingcart () {
 
//       let start = await FactoryLogic.getLOrder().startOrder();
//       console.log(start);
//       let registerItemonOrder = await FactoryLogic.getLOrder().registerItemonOrder("478963545879789", 1);
//       console.log(registerItemonOrder);
//       let registerItemonOrder2 = await FactoryLogic.getLOrder().registerItemonOrder("653453487975466548", 2);
//       console.log(registerItemonOrder2);
//       let registerItemonOrder3 = await FactoryLogic.getLOrder().registerItemonOrder("45687945345387", 1);
//       console.log(registerItemonOrder3);
     
//       let loginClient = await FactoryLogic.getLUser().loginUser(dtclient.username, dtclient.password);
//       console.log("Welcome: "+loginClient.completename)
      
//       let close = await FactoryLogic.getLOrder().closeOrder();
//       console.log(close);
//     //   let cancel = await FactoryLogic.getLOrder().cancelOrder();
//     //   console.log(cancel);
//     //   let removeItem = await FactoryLogic.getLOrder().removeItemonOrder("45687945345387");
//     //   console.log(removeItem);
      
//     //   let close2 = await FactoryLogic.getLOrder().closeOrder();
//     //   console.log(close2);
      
//       let saveorder = await FactoryLogic.getLOrder().saveOrder(loginClient);
//       console.log(saveorder);
    
//   }
//   addordertoshoppingcart().then(data => {
           
//    }); 

// FactoryLogic.getLOrder().getOrder(1).then(data => {
//     console.log(data);
// });
// FactoryLogic.getLOrder().getPendingOrders().then(data => {
//     console.log(data);
// });
// FactoryLogic.getLOrder().getClientOrders(dtclient.identitycard).then(data => {
//     console.log(data);
// });
// FactoryLogic.getLOrder().getAllOrders().then(data => {
//     console.log(data);
// });
// FactoryLogic.getLOrder().getDeliveredOrders().then(data => {
//     console.log(data);
// });
// async function deliverOrder () {
 
//       let getorder = await FactoryLogic.getLOrder().getOrder(3);
//       console.log(getorder);
//       let delivorder = await FactoryLogic.getLOrder().deliverOrder(getorder);
//       console.log(delivorder);
     
//   }
//   deliverOrder().then(data => {
           
//    }); 
// async function PersonalOrder () {
 
 
//       let loginClient = await FactoryLogic.getLUser().loginUser(dtclient.username, dtclient.password) ;
//       console.log("Welcome: "+loginClient.completename)
//       let getorders = await FactoryLogic.getLOrder().getClientOrders(loginClient.identitycard);
//       console.log(getorders);
//       let getorder = await FactoryLogic.getLOrder().getOrder(0);
//       console.log(getorder);
//     let pervorder = await FactoryLogic.getLOrder().personalOrder(getorder);
//     console.log(pervorder);
   
// }
// PersonalOrder().then(data => {
           
//    }); 

// var date1=new Date("February 2,2021");
// var date2=new Date("February 4,2021");
// FactoryLogic.getLOrder().getOrdersbyDates(date1,date2).then(data => {
//     console.log(data);
// });





