const FactoryLogic = require("./ECommerce/dist/logic/FactoryLogic").FactoryLogic;
const Category = require("./ECommerce/dist/shared/entity/Category").Category;

let dtcat = new Category("PC", "PC de Escritorio");
// FactoryLogic.getLCategory().addCategory(dtcat).then(data => {
//     console.log(data);
// });
FactoryLogic.getLCategory().getCategory(dtcat.name).then(data => {
    console.log(data);
});