CREATE TABLE users (
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  age INTEGER NOT NULL,
  country TEXT NOT NULL,
  phone TEXT NOT NULL,
  balance INTEGER NOT NULL
);

SELECT first_name, age FROM users;

SELECT * FROM users;

SELECT rowid, first_name FROM users;

SELECT first_name, age FROM users ORDER BY age ASC;

SELECT first_name, age FROM users ORDER BY age DESC;

SELECT first_name, age, balance FROM users ORDER BY age ASC, balance DESC;

SELECT country FROM users;

SELECT DISTINCT country FROM users;

SELECT DISTINCT first_name, country FROM users;

SELECT DISTINCT first_name, country FROM users ORDER BY country DESC;

SELECT first_name, age, balance FROM users WHERE age >= 30;

SELECT first_name, age, balance FROM users WHERE age >= 30 AND balance > 500000;

SELECT first_name, last_name FROM users WHERE first_name LIKE '%호%';

SELECT first_name, age FROM users WHERE age LIKE '2_';

SELECT first_name, age FROM users WHERE age NOT BETWEEN 20 AND 30;

SELECT first_name, age FROM users WHERE age < 20 OR age > 30;

SELECT country, COUNT(*) FROM users GROUP BY country;

DROP TABLE users;





CREATE TABLE zoo (
  name TEXT NOT NULL,
  eat TEXT NOT NULL,
  weight INT NOT NULL,
  height INT,
  age INT
);

-- 1) 
INSERT INTO zoo VALUES 
(5, 180, 210, 'gorilla', 'omnivore');

-- 2)
INSERT INTO zoo (rowid, name, eat, weight, age) VALUES
(10,'dolphin', 'carnivore', 210, 3),
(10, 'alligator', 'carnivore', 250, 50);

-- 3)
INSERT INTO zoo (name, eat, age) VALUES
('dolphin', 'carnivore', 3);

DROP TABLE zoo;

CREATE TABLE classmates (
  name TEXT,
  age INT,
  address TEXT
);

insert into classmates values(name='seoul', age=20, address='홍길동');

insert into classmates (address, age, name)
values('seoul', 20, '홍길동');