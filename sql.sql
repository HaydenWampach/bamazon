DROP DATABASE IF EXISTS bamazondb;

CREATE DATABASE bamazondb;

USE bamazondb;

CREATE TABLE products (
id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NULL,
department_name VARCHAR(40) NULL,
price DECIMAL (7,2) NULL,
stock_quantity INTEGER (5) NULL,
PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HEADPHONES", "ELECTRONICS", 100.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("SEAHAWKS JERSEY", "CLOTHING", 89.99, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("YANKEES HAT", "CLOTHING", 68.99, 54);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("THE GREAT GATSBY", "BOOKS", 55.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MULTIVITAMINS", "HEALTH & PERSONAL CARE", 25.89, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TENTS", "OUTDOOR", 75.00, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("EXTERNAL HARD DRIVE", "ELECTRONICS", 99.99, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("DOG TREATS", "PET SUPPLIES", 15.99, 186);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HAIR TRIMMERS", "BEAUTY PRODUCTS", 99.99, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MONOPOLY", "GAMES", 33.99, 56);