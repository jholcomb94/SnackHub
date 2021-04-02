-- -----------------------------------------------------
-- Schema foodDB
-- -----------------------------------------------------
CREATE DATABASE `fooddb` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

-- -----------------------------------------------------
-- Table `foodDB`.`Users`
-- -----------------------------------------------------
CREATE TABLE `users` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(512) DEFAULT NULL,
  `Address` varchar(512) DEFAULT NULL,
  `Phone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;


-- -----------------------------------------------------
-- Table `foodDB`.`Restaurant`
-- -----------------------------------------------------
CREATE TABLE `restaurant` (
  `RestaurantID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `Description` varchar(512) DEFAULT NULL,
  `hours` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`RestaurantID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;



-- -----------------------------------------------------
-- Table `foodDB`.`MenuItem`
-- -----------------------------------------------------
CREATE TABLE `menuitem` (
  `Menu_ItemID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(512) DEFAULT NULL,
  `Description` varchar(512) DEFAULT NULL,
  `Price` decimal(18,2) DEFAULT NULL,
  `Restaurant_RestaurantID` int NOT NULL,
  PRIMARY KEY (`Menu_ItemID`),
  KEY `fk_MenuItem_Restaurant_idx` (`Restaurant_RestaurantID`),
  CONSTRAINT `fk_MenuItem_Restaurant` FOREIGN KEY (`Restaurant_RestaurantID`) REFERENCES `restaurant` (`RestaurantID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;



-- -----------------------------------------------------
-- Table `foodDB`.`Transaction`
-- -----------------------------------------------------
CREATE TABLE `transaction` (
  `TansactionID` int NOT NULL AUTO_INCREMENT,
  `Order_date` date DEFAULT NULL,
  `instructions` varchar(512) DEFAULT NULL,
  `Total` decimal(18,2) DEFAULT NULL,
  `UserID` int NOT NULL,
  PRIMARY KEY (`TansactionID`),
  KEY `fk_Transaction_Users1_idx` (`UserID`),
  CONSTRAINT `fk_Transaction_Users1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;



-- -----------------------------------------------------
-- Table `foodDB`.`TransationDetails`
-- -----------------------------------------------------
CREATE TABLE `transactiondetails` (
  `TransactionID` int NOT NULL,
  `quantity` varchar(45) NOT NULL,
  `Menu_ItemID` int NOT NULL,
  PRIMARY KEY (`quantity`),
  KEY `fk_TransactionDetails_MenuItem1_idx` (`Menu_ItemID`),
  KEY `fk_TransactionDetails_Transaction1_idx` (`TransactionID`),
  CONSTRAINT `fk_TransactionDetails_MenuItem1` FOREIGN KEY (`Menu_ItemID`) REFERENCES `menuitem` (`Menu_ItemID`),
  CONSTRAINT `fk_TransactionDetails_Transaction1` FOREIGN KEY (`TransactionID`) REFERENCES `transaction` (`TansactionID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
