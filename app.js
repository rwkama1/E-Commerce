const FactoryLogic = require("./ECommerce/dist/logic/FactoryLogic").FactoryLogic;
const Category = require("./ECommerce/dist/shared/entity/Category").Category;

let dtcat = new Category("PCc", "PC de Escritorio");
// FactoryLogic.getLCategory().addCategory(dtcat).then(data => {
//     console.log(data);
// });
// FactoryLogic.getLCategory().getCategory(dtcat.name).then(data => {
//     console.log(data);
// });
FactoryLogic.getLCategory().updateCategory(dtcat).then(data => {
    console.log(data);
});