const FactoryLogic = require("./ECommerce/dist/logic/FactoryLogic").FactoryLogic;
const Category = require("./ECommerce/dist/shared/entity/Category").Category;
const Article = require("./ECommerce/dist/shared/entity/Article").Article;

var dtcat = new Category("Monitor", "Teléfono portátil que puede hacer o recibir llamadas a través de una portadora de radiofrecuencia, mientras el usuario se está moviendo dentro de un área de servicio telefónico");
// var dtart=new Article("12345678909898","Monitor Led 19.5' Hd Kolke Entradas Hdmi Y Vga Loi",,10,
// "Disfrutá de una buena calidad de imagen con este monitor Kolke KES-459 que cuenta con una pantalla LED de 19.5 y una resolución de 1366 x 768. Puede inclinarse 5° hacia adelante y 15° hacia atrás.",
// "gdsg.gif",dtcat);
 
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

// FactoryLogic.getLCategory().getCategory(dtcat.name).then(scat => {
//     console.log(scat);
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





