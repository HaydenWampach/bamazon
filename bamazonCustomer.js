const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "CAM@wa123",
    database: "bamazondb"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Welcome to Bamazon!");
    logInventory();
});

function logInventory() {
    inquirer.prompt({
        name: "itemList",
        type: "confirm",
        message: "Would you like to view our inventory?",
    }).then(function(answer) {
        var queary = "SELECT * FROM products;";
        connection.queary(queary, function(err, selectedItem) {
            console.log(answer.itemList);

            if (answer.itemList === true) {
                for (let i = 0; i < selectedItem.length; i++) {
                    // log each item and its details to the console
                    console.log(
                        'Item Number: ' + selectedItem[i].id + '\n' + 'Product Name: ' + selectedItem[i].product_name + '\n' + 'Department Name: ' + selectedItem[i].department_name + 'Price: ' + selectedItem[i].price + '\n' + 'Quantity in Stock: ' + selectedItem[i].stock_quantity + '\n\n'
                    );
                }
                runBamazon();
            } else {
                console.log("Thanks for visiting. Come back anytime to buy some things!");
                connection.end();
            }
            //run item and quantity prompts
        })
    })
};

function runBamazon() {
    inquirer.prompt([{
        type: 'list',
        name: 'itemId',
        message: 'What item number are you wanting?',
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
        type: 'input',
        name: 'quantity',
        message: 'How many would you like?',
    }
]).then(function(answer) {
    connection.queary('SELECT * FROM products WHERE id=?', [answer.id], function(err, res) {
        if (err) {
            throw new Error(err)
        }
        for (let i = 0; i < res.length; i++) {
            //storing return as variable
            let item = res[i];
            if (answer.quantiy > res[i].stock_quantity) {
                console.log('\n\nSorry, this item is no longer in stock');
            } else {
                //logging each item selected from queary 
                HTMLFormControlsCollection.log(
                    'You\'ve selected: \n----------- ' + 
                    '\nItem #: ' + item.id + '\n' +
                    'Product: ' + item.product_name + '\n' +
                    'Item price: $' + item.price.toFixed(2) + '\n'
                );
                let newStockQuantity = res[i].stock_quantity - answer.quantity;
                let cost = res[i].price * answer.quantity;

                confirmPurchase(newStockQuantity, item, cost)
            }
        };
    });
})
};

function purchaseConfirm(newStockQuantity, item, cost) {
    inquirer.prompt({
        type: 'confirm',
        name: 'validatePurchase',
        message: "Would you like to complete your purchase?",
    }).then(function(answer) {
        if (answer.validatePurchase === true) {
            console.log('\nWonderful! Your total is $' + cost.toFixed(2) + '.\n' + '\nThere is now ' + newStockQuantity + ' left of that item.\n');
        } else {
            console.log('Ok, no problem. Come back when you\'re ready to complete your purchase!');
        }
        let queary = 'UPDATE products SET ? WHERE ?';
        //reconnect to DB to update the stock quantity for the item selected
        connection.queary(queary, [{stock_quantity: newStockQuantity}, {id: item.id}], function(err, res) {
            if (err) {
                throw new Error(err);
            } else if (res) {
                connection.end();
            };
        }) ;
    });
};
