var inquirer = require("inquirer");

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "BamazonDB"

});

connection.connect(function (err) {
    if (err) throw (err);
    // console.log(`connected as id ${connection.threadId}`);

});


var query = connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw (err);
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].price);
    };
    start();
    //console.log(res);
});



function start() {
    inquirer.prompt([{
        type: "input",
        name: "productID",
        message: "What is the ID of the product you want to buy?"
    },
    {
        type: "input",
        name: "quantityRequested",
        message: "How much/many of this product would you like?"
    }
    ])
        .then(function (answer) {
           
            //get the quantity of the chosen item
            var chosenProduct;
            for (var i = 0; i <results.length; i++){
                if (results[i].id === answer.productID){
                    chosenProduct = results[i];
                    
                }

            }
           
           
                connection.query(
                "SELECT * FROM products ?",
                {
                    id: answer.id,
                    stock_quantity: answer.stock_quantity
                },

               
                function (){
                    if(err) throw err;
                    console.log("this action has been completed successfully!");
                    
            //     }

            // );
   //if stock_quantity > 0,
               

        });




//function checkQuantity(){
//   if (stock_quantity > 0){
       //fulfill order and update the db and show the cost of total purchase

//    }else{
//        console.log("insufficient quantity");

