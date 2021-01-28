const FactoryLogic = require("./ECommerce/dist/logic/FactoryLogic").FactoryLogic;
const Category = require("./ECommerce/dist/shared/entity/Category").Category;
const Article = require("./ECommerce/dist/shared/entity/Article").Article;

var dtcat = new Category("Monitor", "PC de Escritoriooo");
var dtart=new Article("","Monitor Led 19.5' Hd Kolke Entradas Hdmi Y Vga Loi",84.00,10,
"Disfrutá de una buena calidad de imagen con este monitor Kolke KES-459 que cuenta con una pantalla LED de 19.5 y una resolución de 1366 x 768. Puede inclinarse 5° hacia adelante y 15° hacia atrás.",
"gdsg.gif",dtcat);
 
//****************************
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

//***************************************** */
//ARTICLES

// FactoryLogic.getLCategory().getCategory(dtcat.name).then(scat => {
//     console.log(scat);
//    var dtart=new Article("88934677890984364398","Monitor Led 19.5' Hd Kolke Entradas Hdmi Y Vga Loi",84.00,30,
// "Disfrutá de una buena calidad de imagen con este monitor Kolke KES-459 que cuenta con una pantalla LED de 19.5 y una resolución de 1366 x 768. Puede inclinarse 5° hacia adelante y 15° hacia atrás.",
// "gdsg.gif",scat);
//     FactoryLogic.getLArticle().addArticle(dtart).then(data => {
//         console.log(data);
//     });
    
    
// });

// FactoryLogic.getLCategory().getCategory(dtcat.name).then(scat => {
//     console.log(scat);
//    var dtart=new Article("12345678909898","Monitor Led 19.5' Hd Kolke Entradas Hdmi Y Vga Loi",500.00,20,
// "Disfrutá de una buena calidad de imagen con este monitor Kolke KES-459 que cuenta con una pantalla LED de 19.5 y una resolución de 1366 x 768",
// "gdsg.png",scat);
//     FactoryLogic.getLArticle().updateArticle(dtart).then(data => {
//         console.log(data);
//     });
// });

// FactoryLogic.getLArticle().deleteArticle(dtart).then(scat => {
//     console.log(scat);
    
// });

// FactoryLogic.getLArticle().registerStock("12345678909898",1000).then(scat => {
//     console.log(scat);
    
// });
 FactoryLogic.getLArticle().orderArticlesbyPrice().then(data => {
    console.log(data);
});

