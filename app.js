-- Creating PRODUCT Table
CREATE TABLE PRODUCT (
    Product_id NUMBER PRIMARY KEY,
    Product_name VARCHAR2(50) NOT NULL,
    Price NUMBER(6, 2) NOT NULL,
    Category VARCHAR2(20)
);

-- Creating CUSTOMER Table
CREATE TABLE CUSTOMER (
    Cust_id NUMBER PRIMARY KEY,
    Cust_name VARCHAR2(50) NOT NULL,
    Cust_address VARCHAR2(100),
    Cust_tel VARCHAR2(20)
);

-- Creating ORDERS Table
CREATE TABLE ORDERS (
    Order_id NUMBER PRIMARY KEY,
    Order_date DATE NOT NULL,
    Product_id NUMBER,
    Quantity NUMBER,
    CONSTRAINT fk_orders_product FOREIGN KEY (Product_id) REFERENCES PRODUCT(Product_id)
);

-- Creating PAYMENT Table
CREATE TABLE PAYMENT (
    Payment_id NUMBER PRIMARY KEY,
    Order_id NUMBER,
    Amount NUMBER(8, 2) NOT NULL,
    Payment_date DATE DEFAULT SYSDATE,
    CONSTRAINT fk_payment_orders FOREIGN KEY (Order_id) REFERENCES ORDERS(Order_id)
);