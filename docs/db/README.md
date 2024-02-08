Overview
This repository contains the database schema and associated documentation for the organic food based e-commerce application . The database is designed to support the storage and retrieval of information related to products, customers, orders, address, service, category.

Table of Contents
1.Database Schema
2.Installation
3.Entities
4.Relationships

Database Schema
The database schema is organized into tables representing different entities within the e-commerce system. 

Entities
List and describe the main entities represented in the database. Include attributes, data types, and any constraints.

Product:
ProductID (Primary Key)
Price
img
Quantity
Product_desc
Category_id

Customers:
CustomerID (Primary Key)
mobile_no
first_name
last_name
email
password

Orders:
Order_no
ship_date
order_status
customer_id
product_id

Service:
service_id
service_desc
price
customer_id

Adress:
customer_id
house_no
street
city
zip_code
pin_code

Category:
category_id
category_name

Relationships
Explain the relationships between different entities. Use diagrams if applicable.

One-to-Many Relationship: Customers to Orders

A customer can have multiple orders, but each order belongs to only one customer.
Many-to-Many Relationship: Products to Orders

Each order can contain multiple products, and each product can be part of multiple orders.
