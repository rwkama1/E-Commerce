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

## Usage

```Javascript
const factory = require("./RadioTransmitter/logic/FactoryLogic").FactoryLogic;
const Advertiser = require("./RadioTransmitter/shared/entityshared/Advertiser").Advertiser;
//EXAMPLE ADVERTISERS----------------------------------------

factory.getLogicAdvertiser().getAdvertisers().then(data => {
        console.log(data)
    });
factory.getLogicAdvertiser().getAdvertiserByNameLetter("s").then(data => {
        console.log(data)
    });
factory.getLogicAdvertiser().getAdvertiser(89878).then(data => {
    console.log(data)

    });
let datatypeAdvertiser = new Advertiser(898788, "NewAdvertiser", "Vasd", "545556546");

factory.getLogicAdvertiser().addAdvertiser(datatypeAdvertiser).then(data => {
        console.log(data)
    });
factory.getLogicAdvertiser().deleteAdvertiser(datatypeAdvertiser).then(data => {
        console.log(data)
    });
factory.getLogicAdvertiser().updateAdvertiser(datatypeAdvertiser).then(data => {
        console.log(data)
    });
```

## License
[MIT](https://choosealicense.com/licenses/mit/)




