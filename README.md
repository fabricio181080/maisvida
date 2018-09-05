# maisvida

banco de dados:

CREATE DATABASE maisvida;

CREATE TABLE tb_estado
(
    id_estado         INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    ds_nome           VARCHAR(100) NOT NULL
);

CREATE TABLE tb_pessoa
(
    id_pessoa         INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_estado         INT NOT NULL DEFAULT 1,
    ds_nome           VARCHAR(100) NOT NULL
);


CREATE TABLE tb_documento
(
    id_documento         INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_pessoa            INT NOT NULL DEFAULT 1,
    ds_tipo              VARCHAR(100) NOT NULL,
    ds_numero            VARCHAR(100) NOT NULL
);

