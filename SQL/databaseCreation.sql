-- -----------------------------------------------------
-- Schema foodDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `foodDB` DEFAULT CHARACTER SET utf8 ;
USE `foodDB` ;
-- -----------------------------------------------------
-- Table `foodDB`.`Users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodDB`.`Users` ;

CREATE TABLE IF NOT EXISTS `foodDB`.`Users` (
  `UserID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(512) NULL,
  `Address` VARCHAR(512) NULL,
  `Phone` VARCHAR(45) NULL,
  PRIMARY KEY (`UserID`));

-- -----------------------------------------------------
-- Table `foodDB`.`Restaurant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodDB`.`Restaurant` ;

CREATE TABLE IF NOT EXISTS `foodDB`.`Restaurant` (
  `RestaurantID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(100) NULL,
  `Description` VARCHAR(512) NULL,
  `hours` VARCHAR(45) NULL,
  PRIMARY KEY (`RestaurantID`));


-- -----------------------------------------------------
-- Table `foodDB`.`MenuItem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodDB`.`MenuItem` ;

CREATE TABLE IF NOT EXISTS `foodDB`.`MenuItem` (
  `MenuItemID` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(512) NULL,
  `Description` VARCHAR(512) NULL,
  `Price` DECIMAL(18,2) NULL,
  `Restaurant_RestaurantID` INT NOT NULL,
  PRIMARY KEY (`MenuItemID`),
  INDEX `fk_MenuItem_Restaurant_idx` (`Restaurant_RestaurantID` ASC) VISIBLE,
  CONSTRAINT `fk_MenuItem_Restaurant`
    FOREIGN KEY (`Restaurant_RestaurantID`)
    REFERENCES `foodDB`.`Restaurant` (`RestaurantID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `foodDB`.`Transaction`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodDB`.`Transaction` ;

CREATE TABLE IF NOT EXISTS `foodDB`.`Transaction` (
  `TansactionID` INT NOT NULL,
  `Order_date` DATE NULL,
  `instructions` VARCHAR(512) NULL,
  `Total` DECIMAL(18,2) NULL,
  `UserID` INT NOT NULL,
  PRIMARY KEY (`TansactionID`),
  INDEX `fk_Transaction_Users1_idx` (`UserID` ASC) VISIBLE,
  CONSTRAINT `fk_Transaction_Users1`
    FOREIGN KEY (`UserID`)
    REFERENCES `foodDB`.`Users` (`UserID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);


-- -----------------------------------------------------
-- Table `foodDB`.`TransationDetails`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `foodDB`.`TransationDetails` ;

CREATE TABLE IF NOT EXISTS `foodDB`.`TransationDetails` (
  `TansactionID` INT NOT NULL,
  `quantity` VARCHAR(45) NOT NULL,
  `MenuItemID` INT NOT NULL,
  INDEX `fk_TransationDetails_MenuItem1_idx` (`MenuItemID` ASC) VISIBLE,
  INDEX `fk_TransationDetails_Transaction1_idx` (`TansactionID` ASC) VISIBLE,
  PRIMARY KEY (`quantity`),
  CONSTRAINT `fk_TransationDetails_MenuItem1`
    FOREIGN KEY (`MenuItemID`)
    REFERENCES `foodDB`.`MenuItem` (`MenuItemID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_TransationDetails_Transaction1`
    FOREIGN KEY (`TansactionID`)
    REFERENCES `foodDB`.`Transaction` (`TansactionID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);