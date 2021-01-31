const FactoryLogic = require("./ECommerce/dist/logic/FactoryLogic").FactoryLogic;
const Category = require("./ECommerce/dist/shared/entity/Category").Category;
const Article = require("./ECommerce/dist/shared/entity/Article").Article;
const Client = require("./ECommerce/dist/shared/entity/Client").Client;
const Administrator = require("./ECommerce/dist/shared/entity/Administrator").Administrator;

// var dtcat = new Category("Monitor", "Teléfono portátil que puede hacer o recibir llamadas a través de una portadora de radiofrecuencia, mientras el usuario se está moviendo dentro de un área de servicio telefónico");
// var dtart=new Article("12345678909898","Monitor Led 19.5' Hd Kolke Entradas Hdmi Y Vga Loi",,10,
// "Disfrutá de una buena calidad de imagen con este monitor Kolke KES-459 que cuenta con una pantalla LED de 19.5 y una resolución de 1366 x 768. Puede inclinarse 5° hacia adelante y 15° hacia atrás.",
// "gdsg.gif",dtcat);
// var dtclient = new Client("82889551",'Client1',"rwkama3","rwkama4","Address 111 ","375259829079721");
var dtadmin = new Administrator("85634858",'AdminAdmin',"Admin2","Admin","Manager");

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
// FactoryLogic.getLArticle().filterArticlesbyCategory(dtcat).then(data => {
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
 
FactoryLogic.getLUser().addUser(dtadmin).then(data => {
    console.log(data);
});
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







