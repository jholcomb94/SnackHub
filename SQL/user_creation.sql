CREATE USER 'SnackHub'@'localhost' IDENTIFIED BY 'SnackHub';

GRANT ALL PRIVILEGES ON * . * TO 'SnackHub'@'localhost';

ALTER USER 'SnackHub'@'localhost' IDENTIFIED WITH mysql_native_password BY 'SnackHub';