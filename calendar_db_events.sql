-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: calendar_db
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `start_date` datetime NOT NULL,
  `end_date` datetime DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `reminder` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (8,' Business Meeting','Quarterly business review','2025-02-10 09:00:00','2025-02-10 11:00:00','Conference Room A','1 day before'),(9,'Wedding Ceremony','John and Alice\'s wedding celebration','2025-03-12 14:00:00','2025-02-12 18:00:00','Rose Garden','3 days before'),(10,'Developer Conference','Annual conference for software developers','2025-04-20 10:00:00','2025-04-12 17:00:00','Downtown Convention Center','1 week before'),(11,'Yoga Class','Morning yoga session for beginners','2025-02-05 06:30:00','2025-02-05 07:30:00','Wellness Studio','1 day before'),(12,'Birthday Party','Celebrating Sarah\'s 30th birthday','2025-03-22 18:00:00','2025-03-22 23:00:00','Sarah\'s House','3 days before'),(13,'Product Launch',' Launch event for new product','2025-05-15 08:00:00','2025-05-15 12:00:00','Tech Park Auditorium','1 week before'),(14,' Art Exhibition','Contemporary art display by local artists','2025-06-10 09:00:00','2025-06-10 17:00:00','City Art Gallery','1 week before'),(15,'Cooking Workshop','Learn to cook Italian dishes','2025-07-17 10:00:00','2025-07-17 14:00:00','Culinary School','3 days before'),(16,'Charity Run',' 5K charity run for children’s health','2025-08-25 08:00:00','2025-08-25 10:00:00','Central Park','1 week before'),(17,'Music Concert','Live concert with indie bands','2025-09-30 18:00:00','2025-09-30 22:00:00','Music Arena','1 week before'),(18,'Tech Meetup','Networking event for developers','2025-01-28 18:00:00','2025-01-28 20:00:00','Co-working Space',' 1 day before'),(19,'Film Screening',' Screening of a new blockbuster movie','2025-02-18 09:10:00','2025-02-18 21:00:00','Movie Theater','1 day before'),(20,'Science Fair','Exhibition of student science projects','2025-04-14 09:00:00','2025-04-14 15:00:00',' High School Gym','1 week before'),(21,'Board Game Night','Night of social board games','2025-03-05 19:00:00','2025-03-05 22:00:00','Local Cafe ','1 day before'),(22,'Poetry Reading  ','Reading of local poets\' works   \n','2025-06-03 18:00:00','2025-06-03 20:00:00','Bookstore Cafe   ','3 days before'),(23,'Networking Mixer   ','Professional networking event for entrepreneurs   \n','2025-07-09 18:00:00','2025-07-09 20:00:00','Downtown Hotel   ','1 week before'),(24,'Fashion Show   ','Showcase of emerging fashion designers   \n','2025-08-13 19:00:00','2025-08-13 22:00:00','Fashion House   ','3 days before'),(25,'Business Seminar   ','Seminar on leadership and growth   \n','2025-09-04 09:00:00','2025-09-04 16:00:00','Business Center   ','1 week before'),(26,'Comedy Night   ','Stand-up comedy show   \n','2025-10-02 20:00:00','2025-10-02 22:00:00','Comedy Club   ','3 days before'),(27,'Wine Tasting   ','Exclusive wine tasting with sommeliers   \n','2025-11-17 17:00:00','2025-11-17 20:00:00','Vineyard Estate   ','1 week before'),(28,'Hiking Trip   ','Guided hike through national park   \n','2025-12-03 07:00:00','2025-12-03 14:00:00','Mountain Trail   ','3 days before'),(29,'Digital Marketing Workshop   ','Workshop on effective marketing strategies   \n','2025-03-08 09:00:00','2025-03-08 12:00:00','Business Hub   ','1 week before'),(30,'Coffee Tasting   ','Sampling of different coffee beans   \n','2025-04-22 10:00:00','2025-04-22 12:00:00','Coffee Shop   ','1 day before'),(31,'Soccer Match   ','Local amateur soccer team match   \n','2025-05-11 15:00:00','2025-05-11 17:00:00','Sports Stadium   ','1 day before'),(32,'Spa Day   ','A relaxing day at the spa   \n','2025-06-18 09:00:00','2025-06-18 15:00:00','Wellness Spa   ','3 days before'),(33,'Book Club Meeting   ','Discussion of the latest book   \n','2025-07-26 14:00:00','2025-07-26 16:00:00','Library   ','1 week before'),(34,'Car Show   ','Exhibition of vintage and new cars   \n','2025-08-06 10:00:00','2025-08-06 16:00:00','Exhibition Center   ','3 days before'),(35,'Dance Party   ','Fun night of dancing to various music   \n','2025-09-20 22:00:00','2025-09-21 02:00:00','Nightclub   ','1 week before'),(36,'Environmental Cleanup   ','Volunteering event for cleaning the beach   \n','2025-10-14 09:00:00','2025-10-14 12:28:00','Beachfront   ','1 week before');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-24 13:41:49
