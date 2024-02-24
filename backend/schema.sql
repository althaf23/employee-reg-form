CREATE TABLE IF NOT EXISTS EMPLOYEES(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) not null,
    email varchar(255) not null,
    phone varchar(20) not null,
    dob varchar(100) not null,
    employee_id varchar(255) not null,
    address text not null,
    designation varchar(255) not null,
    salary varchar(255) not null,
    experience text not null,
);