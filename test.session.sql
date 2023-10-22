create table Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    bio TEXT,
    country VARCHAR(2)
);

--@block
INSERT INTO Users (email, bio, country) 
VALUES ('ola@portugal.com', 'brap', 'PT'),
    ('hola@munda.com', 'bar', 'MX'),
    ('bonjour@monde.com', 'baz', 'FR');

-- @block
