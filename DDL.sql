-- Create the PRODUCT table
CREATE TABLE PRODUCT (
    Product_id VARCHAR2(20) PRIMARY KEY,
    Product_Name VARCHAR2(20) NOT NULL,
    Price NUMBER CHECK (Price > 0)
);

-- Create the CUSTOMER table
CREATE TABLE CUSTOMER (
    Customer_id VARCHAR2(20) PRIMARY KEY,
    Customer_Name VARCHAR2(20) NOT NULL,
    Customer_Tel NUMBER
);

-- Create the ORDERS table
CREATE TABLE ORDERS (
    Customer_id VARCHAR2(20),
    Product_id VARCHAR2(20),
    Quantity NUMBER,
    Total_amount NUMBER,
    OrderDate DATE DEFAULT SYSDATE,
    CONSTRAINT fk_customer FOREIGN KEY (Customer_id) REFERENCES CUSTOMER(Customer_id),
    CONSTRAINT fk_product FOREIGN KEY (Product_id) REFERENCES PRODUCT(Product_id)
);

-- Add a column Category to the PRODUCT table
ALTER TABLE PRODUCT ADD Category VARCHAR2(20);

-- Add a column OrderDate to the ORDERS table
ALTER TABLE ORDERS MODIFY OrderDate DEFAULT SYSDATE;