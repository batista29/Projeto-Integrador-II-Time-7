CREATE TABLE Usuarios (
    Id_usuario INT PRIMARY KEY,
    Nome_completo VARCHAR(100) NOT NULL,
    Nome_usuario VARCHAR(100) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    Email_usuario VARCHAR(100) NOT NULL,
    data_abertura DATE NOT NULL
);
