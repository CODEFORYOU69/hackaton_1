-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: HACKATON
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `THEME_PARKS_2`
--

DROP TABLE IF EXISTS `THEME_PARKS_2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `THEME_PARKS_2` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(100) NOT NULL,
  `DESCRIPTION` varchar(417) NOT NULL,
  `IMAGE` varchar(245) NOT NULL,
  `COUNTRY` varchar(50) NOT NULL,
  `THEME` varchar(50) NOT NULL,
  `LATITUDE` decimal(17,15) NOT NULL,
  `LONGITUDE` decimal(19,16) NOT NULL,
  `CITY` varchar(50) DEFAULT NULL,
  `LIST_ATTRACTION` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `THEME_PARKS_2`
--

LOCK TABLES `THEME_PARKS_2` WRITE;
/*!40000 ALTER TABLE `THEME_PARKS_2` DISABLE KEYS */;
INSERT INTO `THEME_PARKS_2` VALUES (5,'Six Flags Discovery Kingdom','Immense parc d\'attractions regorgeant de man�ges et de montagnes russes � haute vitesse, avec parc animalier.','https://www.sixflags.com/sites/default/files/mobile/SFDK_Blur_750x368.jpg','ETATS UNIS','THEMEPARK',38.138670000000000,-122.2344400000000000,'SAN FRANCISCO',NULL),(6,'Six Flags Hurricane Harbor, Concord','1950 Waterworld Pkwy, Concord, CA','https://www.sixflags.com/sites/default/files/mobile/HHCO-Blur_750x368.jpg','ETATS UNIS','WATER_PARK',37.974015000000000,-122.0512010000000000,'CONCORD',NULL),(7,'Six Flags Magic Mountain','26101 Magic Mountain Parkway, Valencia, CA','https://www.sixflags.com/sites/default/files/mobile/SFMM_Blur_750x368.jpg','ETATS UNIS','THEMEPARK',34.424963000000000,-118.5979760000000000,'VALENCIA (USA)',NULL),(8,'San Diego Zoo','De San Diego Zoo is een dierentuin in San Diego in het zuiden van de Amerikaanse staat Californi�. Er verblijven zo\'n 4000 dieren van meer dan 800 verschillende diersoorten. De San Diego Zoo stond bekend om zijn reuzenpanda�s vanaf 1996. In april 2019 zijn de panda�s terug naar China gegaan.','https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/ed/ff/00.jpg','ETATS UNIS','ZOO',32.735317000000000,-117.1490480000000000,'SANDIEGO',NULL),(9,'Six Flags Hurricane Harbor, Phoenix','4243 W. Pinnacle Peak Road, Glendale, AZ','https://www.sixflags.com/sites/default/files/mobile/WWA_Blur_750x368.jpg','ETATS UNIS','WATER_PARK',33.695958000000000,-112.1496380000000000,'PHOENIX',NULL),(10,'Six Flags Mexico','Carretera Picacho al Ajusco KM 1.5, Ciudad de M�xico, MX','https://www.sixflags.com/sites/default/files/mobile/Mexico_Blur_750x368.jpg','MEXIQUE','THEMEPARK',19.294650000000000,-99.2088310000000000,'MEXICO',NULL),(11,'Six Flags Fiesta Texas','17000 IH-10 West, San Antonio, TX','https://www.sixflags.com/sites/default/files/mobile/SFFT_Blur_750x368.jpg','ETATS UNIS','THEMEPARK',29.597388000000000,-98.6106690000000000,'SAN ANTONIO',NULL),(12,'Six Flags Hurricane Harbor, Oklahoma City','3908 W. Reno Avenue, Oklahoma City, OK','https://www.sixflags.com/sites/default/files/mobile/WWA_Blur_750x368.jpg','ETATS UNIS','WATER_PARK',35.461189000000000,-97.5885230000000000,'OKLAHOMA CITY',NULL),(13,'Six Flags Frontier City','11501 Northeast Expressway, Oklahoma City, OK','https://www.sixflags.com/sites/default/files/mobile/animations/generic-park-750.gif','ETATS UNIS','THEMEPARK',35.584769000000000,-97.4411290000000000,'OKLAHOMA CITY',NULL),(14,'Six Flags Over Texas','2201 Road to Six Flags, Arlington, TX','https://www.sixflags.com/sites/default/files/mobile/SFOT_Blur_750x368.jpg','ETATS UNIS','THEMEPARK',32.756835000000000,-97.0698260000000000,'DALLAS',NULL),(15,'Six Flags Hurricane Harbor, SplashTown','21300 IH-45 North, Spring, TX','https://www.sixflags.com/sites/default/files/mobile/WWA_Blur_750x368.jpg','ETATS UNIS','WATER_PARK',30.069870000000000,-95.4319920000000000,'HOUSTON',NULL),(16,'Silver Dollar City','Silver Dollar City is een 61 hectare groot pretpark in Stone County, Missouri, in de buurt van de steden Branson en Branson West. Het park ligt langs Missouri Route 76 op het schiereiland Indian Point van Table Rock Lake. Silver Dollar City werd geopend op 1 mei 1960.','https://www.explorebranson.com/sites/default/files/styles/hero/public/articles/adc-header.jpg?itok=HVr5m2Nd','ETATS UNIS','THEMEPARK',36.667506050000000,-93.3385858900000000,'HOUSTON',NULL),(17,'Six Flags St. Louis','4900 Six Flags Road, Eureka, MO','https://www.sixflags.com/sites/default/files/mobile/SFSL_Blur_750x368.jpg','ETATS UNIS','THEMEPARK',38.515001000000000,-90.6757830000000000,'SAINT LOUIS',NULL),(18,'Six Flags Hurricane Harbor, Rockford','7820 Cherryvale North Blvd., Cherry Valley, IL','https://www.sixflags.com/sites/default/files/mobile/SFGM_Blur_750x368.jpg','ETATS UNIS','WATER_PARK',42.246003000000000,-88.9634700000000000,'CHERRY VALLEY',NULL),(19,'Six Flags Great America','542 North Route 21, Gurnee, IL','https://www.sixflags.com/sites/default/files/mobile/SFGM_Blur_750x368.jpg','ETATS UNIS','THEMEPARK',42.367646000000000,-87.9338660000000000,'GURNEE',NULL),(20,'Six Flags Over Georgia','275 Riverside Parkway, Austell, GA','https://www.sixflags.com/sites/default/files/mobile/SFOG_Blur_750x368.jpg','ETATS UNIS','THEMEPARK',33.768779000000000,-84.5512390000000000,'AUSTELL',NULL),(21,'Six Flags White Water, Atlanta','250 Cobb Parkway North, Marietta, GA','https://www.sixflags.com/sites/default/files/mobile/WWA_Blur_750x368.jpg','ETATS UNIS','WATER_PARK',33.957802000000000,-84.5200810000000000,'MARIETTA',NULL),(22,'Six Flags Darien Lake','9993 Allegheny Road, Darien Center, NY','https://www.sixflags.com/sites/default/files/mobile/TGE_Blur_750x368.jpg','ETATS UNIS','THEMEPARK',42.928260000000000,-78.3846570000000000,'BUFFALO',NULL),(23,'Six Flags America','13710 Central Avenue, Bowie, MD','https://www.sixflags.com/sites/default/files/mobile/SFA_Blur_750x368.jpg','ETATS UNIS','THEMEPARK',38.908277000000000,-76.7735490000000000,'WASHINGTON',NULL),(24,'Six Flags Great Adventure','Route 537 P.O. Box 120, Jackson, NJ','https://www.sixflags.com/sites/default/files/mobile/SFGAD_Blur_750x368.jpg','ETATS UNIS','THEMEPARK',40.136144000000000,-74.4398060000000000,'PHILADELPHIE',NULL),(25,'The Great Escape','1172 Route 9, Queensbury, NY','https://www.sixflags.com/sites/default/files/mobile/TGE_Blur_750x368.jpg','ETATS UNIS','THEMEPARK',43.350194000000000,-73.6895560000000000,'QUEENSBURY',NULL),(26,'La Ronde, Montreal','22 Chemin Macdonald, Montreal, QC','https://www.sixflags.com/sites/default/files/mobile/La_Ronde_Blur_750x368.jpg','CANADA','THEMEPARK',45.524620000000000,-73.5351920000000000,'MONTREAL',NULL),(27,'Six Flags New England','1623 Main Street, Agawam, MA','https://www.sixflags.com/sites/default/files/mobile/SFNE_Blur_750x368.jpg','ETATS UNIS','THEMEPARK',42.036500000000000,-72.6145000000000000,'AGAWAM',NULL),(28,'Parque Warner','Parque Warner Madrid is een themapark gelegen op 25 km ten zuidoosten van Madrid, Spanje, in de gemeente San Mart�n de la Vega.Het plan begon in 1997 en de bouw startte in de eerste helft van 1999.','https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/79/19.jpg','ESPAGNE','THEMEPARK',40.230382350000000,-3.5933957040000000,'MADRID',NULL),(29,'Alton Towers','Alton Towers is een attractiepark in het graafschap Staffordshire in Groot-Brittanni�. Alton Towers trekt jaarlijks ongeveer twee miljoen bezoekers, waarmee het na Legoland Windsor het meest bezochte attractiepark is in het Verenigd Koninkrijk.','https://i2-prod.staffordshire-live.co.uk/incoming/article5048290.ece/ALTERNATES/s1200b/1_JS213388284.jpg','GRANDE BRETAGNE','THEMEPARK',52.987700000000000,-1.8888000000000000,'ALTON',NULL),(30,'Paultons Park','Paultons Park is een pretpark in het New Forest National Park, in de buurt van het dorp Ower, in Hampshire, Engeland, met meer dan 70 attracties en attracties. Het themagebied Peppa Pig World is gebaseerd op de animatieserie Peppa Pig voor kinderen. Het themagebied Lost Kingdom omvat 27 animatronic-dinosaurussen.','https://www.railwayhotelfordingbridge.com/wp-content/uploads/2020/08/p.jpeg','GRANDE BRETAGNE','THEMEPARK',50.948900000000000,-1.5524000000000000,'NEW FOREST',NULL),(31,'Thorpe Park','Thorpe Park is een attractiepark in het Verenigd Koninkrijk. Het park ligt in het Engelse Chertsey op een plek waar vroeger een groeve lag. Thorpe Park werd geopend in 1979 en is momenteel eigendom van de \"Merlin Entertainments\"-groep. In het park bevinden zich ongeveer 25 attracties','https://www.runnymedehotel.com/wp-content/uploads/2017/02/Thorpe-Park-Nemesis-Inferno.jpg','GRANDE BRETAGNE','THEMEPARK',51.405012100000000,-0.5191569110000000,NULL,NULL),(32,'Chessington world of Adventures','Chessington World of Adventures is een attractiepark, dierentuin en een hotelcomplex dat ligt in Centraal-Londen, Engeland. Het park werd onder de naam Chessington Zoo geopend in 1931. Naast de dierentuin werd door The Tussauds Group een pretpark gebouwd.','https://i2-prod.liverpoolecho.co.uk/incoming/article16108222.ece/ALTERNATES/s1200b/0_CS75068432.jpg','GRANDE BRETAGNE','THEMEPARK',51.350407000000000,-0.3161950000000000,NULL,NULL),(33,'Tivoli','Tivoli is een attractiepark in het centrum van Kopenhagen en is gelegen naast het K�benhavns Hovedbaneg�rd en vlak bij R�dhuspladsen. Het park geniet grote bekendheid binnen en buiten Denemarken.','https://img.itinari.com/activity/images/original/827537bb-e1fa-4335-a647-739ff7acebd9-istock-458432813.jpg?ch=DPR&dpr=1&w=1200&h=800&s=53d46ec4ff38ef956795ecc46d5c95c7','DANEMARK','THEMEPARK',55.673663490000000,12.5685046500000000,NULL,NULL),(34,'Grona Lund','Tivoli Gr�na Lund is een attractiepark in de Zweedse hoofdstad Stockholm. Het park is gelegen op het schiereiland Djurg�rden en opende voor het eerst de poorten in 1883. In 2003 vierde het park dat het 120 jaar oud was met onder andere een nieuwe achtbaan.','https://www.nordicchoicehotels.com/globalassets/global/campaign-images/nch-global-campaigns/nojespark/view-night-grona-lund.jpg?t=ScaleDownToFill%7C985x549','SUEDE','THEMEPARK',59.323356400000000,18.0963901000000000,NULL,NULL),(35,'Six Flags Hurricane Harbor, Arlington','1800 Lamar Boulevard, Arlington, TX','https://www.sixflags.com/sites/default/files/mobile/HHA_Blur_750x368.jpg','ETATS UNIS','WATER_PARK',32.761917100000000,-97.0850796000000000,NULL,NULL),(36,'Six Flags Hurricane Harbor, Oaxtepec','Carretera Federal M�xico � Cuautla km. 27+200, Oaxtepec, MX','https://www.sixflags.com/sites/default/files/mobile/HHOX-Blur_750x368.jpg','MEXIQUE','WATER_PARK',18.900328700000000,-98.9811087000000000,NULL,NULL),(37,'Canada\'s Wonderland','Canada\'s Wonderland is een attractiepark in Vaughan in Canada, zo�n 30 km ten noorden van Toronto. Het park is eigendom van Cedar Fair Entertainment Company, een parkengroep die vooral bekend is van het park Cedar Point. Het park krijgt jaarlijks tussen 3 en 4 miljoen bezoekers.','https://pbs.twimg.com/media/E3UDlLOX0AU_Ze-.jpg','CANADA','THEMEPARK',43.841540500000000,-79.5451587000000000,NULL,NULL),(38,'Carowinds','Carowinds is een attractiepark gelegen in Charlotte, North Carolina in de Verenigde Staten. Het park bestrijkt 1,61 km_ oppervlakte. Het park is eigendom van de Cedar Fair Entertainment Company. De voormalige eigenaar was onderdeel van de Paramount Parks keten die overgenomen werd door Cedar Fair op 30 juni 2006.','https://d2j8c2rj2f9b78.cloudfront.net/uploads/carowinds/DSC_9931.jpg','ETATS UNIS','THEMEPARK',35.101756400000000,-80.9502442000000000,NULL,NULL),(39,'Cedar Point','Cedar Point is een attractiepark, gelegen in Sandusky op een schiereiland aan de zuidelijke oever van het Eriemeer in Ohio en bestaat sinds 1870. Het park trekt ongeveer drie miljoen bezoekers per jaar. Het vlakbijgelegen waterpark Soak City is ook onderdeel van Cedar Point. De mascotte van het park is Snoopy.','https://www.clickondetroit.com/resizer/J01xOnuMS5b-ElARSjfqYMHNOq4=/640x360/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/cloudfront-us-east-1.images.arcpublishing.com/gmg/LQQ3OD4KU5GXTBCIVRQDW644VU.jpg','ETATS UNIS','THEMEPARK',41.482211000000000,-82.6857093000000000,NULL,NULL),(40,'Dorney Park','Dorney Park & __Wildwater Kingdom is een Amerikaans amusement- en waterpark dat eigendom is van en wordt beheerd door Cedar Fair en gelegen is tussen Allentown en Emmaus, Pennsylvania. Het park beschikt over zeven achtbanen, andere attracties voor volwassenen en kinderen, en een waterpark, Wildwater Kingdom.','https://media.glassdoor.com/l/c0/c7/bf/2d/wildwater-kingdom-and-amp-talon.jpg','ETATS UNIS','THEMEPARK',40.580449700000000,-75.5370030000000000,NULL,NULL),(41,'California\'s Great Adventure','California\'s Great America is een attractiepark in de Amerikaanse stad Santa Clara (Californi�). Het pretpark is in het bezit van en wordt uitgebaat door de firma Cedar Fair Entertainment Company uit Ohio.','https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/GreatAmerica_CourtesyGreatAmerica_1280x642.jpg?itok=pu0lKHY9','ETATS UNIS','THEMEPARK',37.398409300000000,-121.9773454000000000,NULL,NULL),(42,'King\'s Dominion','Kings Dominion is een attractiepark gelegen in Doswell, Virginia in Hannover County. Het park bestrijkt 1,6 km_ oppervlakte. Het park is eigendom van de Cedar Fair Entertainment Company. De voormalige eigenaar was onderdeel van de Paramount Parks keten die overgenomen werd door Cedar Fair op 30 juni 2006.','https://media.wusa9.com/assets/WUSA/images/8d0e9ca8-d762-4bec-8910-91bc542f1636/8d0e9ca8-d762-4bec-8910-91bc542f1636_1920x1080.jpg','ETATS UNIS','THEMEPARK',37.839875200000000,-77.4463799000000000,NULL,NULL),(43,'Kings Island','Kings Island is een attractiepark in het Amerikaanse Mason, Ohio. Het totale grondoppervlak in bezit van het park is 314 ha maar slechts 147 ha is bebouwd. Kings Island is eigendom van de Cedar Fair Entertainment Company die het park kocht van Paramount Parks.','https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/kings-island/menu/features/ki-orion-menufeaturev2.jpg','ETATS UNIS','THEMEPARK',39.345183900000000,-84.2736270000000000,NULL,NULL),(44,'Knotts Berry Farm','Knott\'s Berry Farm is een attractiepark en voedingsbedrijf in Buena Park in de Amerikaanse staat Californi�. Het park, dat zichzelf Amerika\'s eerste themapark noemt, telt 40 attracties, waaronder 9 achtbanen en 4 waterattracties.','https://upload.wikimedia.org/wikipedia/commons/a/a2/Knott%27s_Gate.jpg','ETATS UNIS','THEMEPARK',33.844308200000000,-118.0047112000000000,NULL,NULL),(45,'Michigans Adventure','Michigan\'s Adventure is een pretpark van 250 hectare in Muskegon County, Michigan, ongeveer halverwege tussen Muskegon en Whitehall. Het is het grootste pretpark in de staat en is sinds 2001 eigendom van en wordt beheerd door Cedar Fair.','https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/ma-en-us/blogs/v2/season-pass-perks-banner.jpg','ETATS UNIS','THEMEPARK',43.341683800000000,-86.2726696000000000,NULL,NULL),(46,'Valley Fair','Valleyfair is een pretpark van 125 hectare in Shakopee, Minnesota, Verenigde Staten. Eigendom van Cedar Fair, het park werd geopend in 1976 en biedt nu meer dan 75 attracties en attracties, waaronder acht achtbanen. Valleyfair heeft ook een waterpark genaamd Soak City, dat bij de toegangsprijs is inbegrepen.','https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/vf-en-us/blogs/2017/july/banner---things-to-do-at-valleyfair.jpg','ETATS UNIS','THEMEPARK',41.100490200000000,-111.9047370000000000,NULL,NULL),(47,'Worlds of Fun','Worlds of Fun is een pretpark van 235 hectare in Kansas City, Missouri, Verenigde Staten. Opgericht door Amerikaanse zakenlieden Lamar Hunt en Jack Steadman, opende het park in 1973 onder eigendom van Hunt\'s bedrijf, Mid-America Enterprises.','https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/overlandpark/Mamba-2-1c094b5e5056a36_1c094eec-5056-a36a-0935f5f62dc8a9d3.jpg','ETATS UNIS','THEMEPARK',39.172888300000000,-94.4905130000000000,NULL,NULL),(48,'Ferrari Land','Ferrari Land is een Spaans themapark gelegen in het resort PortAventura World in Salou. Het is gewijd aan Ferrari en Itali�. Met een oppervlakte van 60.000 m_ Ferrari Land ligt naast PortAventura Park, een pretpark uit 1995','https://nl.letsgodigital.org/uploads/2018/03/pretpark-ferrari-land.jpg','ESPAGNE','THEMEPARK',41.084718450000000,1.1520460270000000,NULL,NULL),(49,'Portaventura','PortAventura World is een Spaans resort met een oppervlakte van 119 hectare gelegen in Salou en Vila-seca bestaand uit onder andere diverse hotels, twee attractieparken, een waterpark, een congrescentrum en een RV park.','https://nl.letsgodigital.org/uploads/2017/11/pretpark-portaventura-salou.jpg','ESPAGNE','THEMEPARK',41.088257830000000,1.1573011660000000,NULL,NULL),(50,'Parc Asterix','Parc Asterix is een Frans attractiepark in Plailly, ongeveer 35 km ten noorden van Parijs. Het is gebaseerd op de stripverhalen van Asterix en Obelix van Albert Uderzo en Ren� Goscinny. Het park werd in 1989 geopend en is erg populair. Het complex omvat het pretpark en een themahotel: het \"Hotel des Trois Hiboux\".','https://www.parcasterix.fr/sites/default/files/1440_579_3_0.jpg','FRANCE','THEMEPARK',49.136041000000000,2.5727680000000000,NULL,NULL),(51,'Plopsalande de Panne','Parc à theme avec montagnes russes, manèges à sensation, spectacles et zone enfants sur th�matique Snoopy.','https://www.plopsalanddepanne.be/sites/default/files/public/brand/logos/Plopsaland%20De%20Panne.jpg','BELGIQUE','THEMEPARK',51.080857220000000,2.5987519690000000,NULL,NULL),(52,'Disneyland Paris','Disneyland Paris, d\'abord Euro Disney Resort puis Disneyland Resort Paris, est un parc d\'attractions et un complexe de loisirs � Marne-la-Vall�e, une ville de la banlieue de la capitale fran�aise Paris.','https://www.sortiraparis.com/images/80/87950/484853-visuels-disneyland-paris-chateau.jpg','FRANCE','THEMEPARK',48.870321000000000,2.7796720000000000,NULL,NULL),(53,'Walt Disney Studios Park','Le Parc Walt Disney Studios est un parc d\'attractions en France et fait partie de Disneyland Paris. Il s\'agit du deuxi�me parc � th�me de ce complexe, qui a ouvert ses portes le 16 mars 2002. Le parc est situ� � l\'ouest du complexe, juste � c�t� de l\'entr�e du parc Disneyland.','https://www.magicontheweb.com/wp-content/uploads/2020/09/waltdisneystudiospark.jpg','FRANCE','THEMEPARK',48.868271000000000,2.7807190000000000,NULL,NULL),(54,'Bellewaerde','Bellewaerde est un parc d\'attractions et animalier pr�s d\'Ypres, situ� dans la province belge de Flandre occidentale. Le parc appartient � la Compagnie des Alpes fran�aise, dont les parcs Walibi font �galement partie. Bellewaerde a 54 hectares de terrain et est particuli�rement c�l�bre pour ses nombreux animaux et l\'attention port�e � la th�matique.','https://www.bellewaerde.be/sites/default/files/home/2021-03/wakala-home_0.jpg','BELGIQUE','THEMEPARK',50.846996000000000,2.9479480000000000,NULL,NULL),(55,'Bellewaerde Aquapark','Quality time met het hele gezin. Dat vind je terug in Bellewaerde Aquapark. Echte avonturiers voelen zich thuis in de glijbanen. De levensgenieters ontspannen in de wellness. Groot en klein leeft zich uit in de speelzones. En iedereen geniet samen in Aquaventure, d� glijbaan voor het hele gezin. Kom het zelf het hele jaar door beleven!','https://aquapark.bellewaerde.be/sites/default/files/2019-07/aquaventure_0.jpg','BELGIQUE','WATER_PARK',50.846870780000000,2.9486033750000000,NULL,NULL),(56,'Blijdorp','In de woonwijk Blijdorp is de dierentuin van Rotterdam gevestigd, met ijsberen, rode panda\'s en een onderwatertunnel van waaruit je haaien kunt observeren. In het naastgelegen Vroesenpark lopen paden langs rustige meren, en het nabijgelegen Telecommuseum beschikt over een curieuze collectie klassieke radio\'s, telefoons en faxmachines. In de omliggende straten vind je bakkerijen, pizzeria\'s en informele buurtcaf�s.','https://bollenstreek.nl/wp-content/uploads/2018/10/savanne-totaal-1-620x350.jpg','PAYS-BAS','ZOO',51.926960500000000,4.4481325000000000,NULL,NULL),(57,'Walibi Belgium','Walibi Belgium is een pretpark in de Belgische gemeente Waver.','https://www.walibi.be/sites/default/files/styles/1280x711/public/content/editorial/2020-06/W18-TIKIWAKA_0629-1.jpg?itok=69V5PXVt','BELGIQUE','THEMEPARK',50.701962210000000,4.5940361980000000,NULL,NULL),(58,'Bobbejaanland','Bobbejaanland is een pretpark in Lichtaart, gelegen tussen Herentals en Kasterlee in Belgi�, en is genoemd naar zijn oprichter Bobbejaan Schoepen. Het pretpark is gelegen in een moerassig gebied in de vallei van de Kleine Nete.','https://www.bobbejaanland.be/content/dam/bjl/images/generals/KVDS-20190616-171430-NIKON%20D5-2.jpg','BELGIQUE','THEMEPARK',51.200942100000000,4.9040014000000000,NULL,NULL),(59,'Efteling','De Efteling is een attractiepark en recreatiecomplex in Kaatsheuvel, een dorp in de Nederlandse provincie Noord-Brabant. Naast het attractiepark omvat de hele Wereld van de Efteling een theater, twee hotels, twee vakantieparken en een golfpark.','https://traveltrade.visitbrabant.com/uploads/cache/medium/uploads/media/5cac5f21d23d9/kopfoto-pardoes-en-pardijn-hartenhof-npf2017-5760x3840px-z-nr-16193.jpg','PAYS-BAS','THEMEPARK',51.649909160000000,5.0435614590000000,NULL,NULL),(60,'Safaripark Beekse Bergen','Safaripark Beekse Bergen is een dierenpark dat ligt tussen Tilburg en Hilvarenbeek in de gemeente Hilvarenbeek in de Nederlandse provincie Noord-Brabant. Het is qua oppervlakte het grootste dierenpark van de Benelux. Er worden ca. 100 diersoorten gehouden, vari�rend van kleine zoogdieren tot grote vogels.','https://d33b12c77av9bg.cloudfront.net/originals/safaripark-giraffen-gamedrive-savanne-beekse-bergen.jpg','PAYS-BAS','ZOO',51.513191000000000,5.1120000000000000,NULL,NULL),(61,'Speelland Beekse Bergen','Speelland Beekse Bergen is een attractiepark en speeltuin bij Hilvarenbeek en maakt deel uit van de groep van Beekse Bergen, waar ook Safaripark Beekse Bergen deel van uitmaakt. Het park is sinds 1987 onderdeel van Lib�ma Exploitatie BV. Speelland heeft vooral speeltuinen en waterattracties.','https://d33b12c77av9bg.cloudfront.net/originals/speelland-beachparty-strand-braai-barbecue.jpg','PAYS-BAS','THEMEPARK',51.524330000000000,5.1202100000000000,NULL,NULL),(62,'DippieDoe','DippieDoe is een pretpark gelegen bij recreatiegebied Aquabest, Best, Noord-Brabant, Nederland. De attracties in het park staan zowel binnen als buiten. Het park richt zich vooral op families met kinderen tot 12 jaar. Attractiepark DippieDoe is het attractiepark in Brabant voor kinderen t/m 12 jaar!','https://media.insiders.nl/vib/files/image/dolle-dobber_1770787802.jpeg','PAYS-BAS','THEMEPARK',51.500000000000000,5.4355500000000000,NULL,NULL),(63,'Ouwehands Dierenpark','Ouwehands Dierenpark is een dierentuin in Rhenen in de Nederlandse provincie Utrecht. Het is gebouwd op de Laarschenberg aan de oostzijde van de stad.','https://www.looopings.nl/img/foto/21/0601bonobo2.jpg','PAYS-BAS','ZOO',51.957435850000000,5.5902135250000000,NULL,NULL),(64,'Walibi Holland','Walibi Holland is een attractiepark, gelegen in Biddinghuizen in de Nederlandse provincie Flevoland. Voorheen heette dit park Walibi World, daarvoor Six Flags Holland, daarvoor Walibi Flevo, terwijl het park startte als Flevohof.','https://www.walibi.nl/sites/default/files/styles/1280x711/public/content/editorial/2020-01/Goliath-ALG-04_0.jpg?itok=SGL1LdeZ','PAYS-BAS','THEMEPARK',52.440200620000000,5.7627626580000000,NULL,NULL),(65,'Apenheul','Apenheul is een dierentuin met apen aan de rand van de Nederlandse stad Apeldoorn. In het park verblijven ruim 300 apen van zo\'n 35 verschillende soorten die thuishoren in Afrika, Zuid-Amerika en Azi�. Veel van de dieren zijn niet in hokken opgesloten: gaas of tralies ziet men er bijna niet.','https://cdn-cms.bookingexperts.nl/media/893/52/preprocessed.jpeg','PAYS-BAS','ZOO',52.213670000000000,5.9245900000000000,NULL,NULL),(66,'Toverland','Attractiepark Toverland, kortweg Toverland, is een deels overdekt attractiepark in het Nederlandse Sevenum. Het is een van de jongste attractieparken van Nederland.','https://i.ytimg.com/vi/WeUzyKUqR4I/maxresdefault.jpg','PAYS-BAS','THEMEPARK',51.396876790000000,5.9847988850000000,NULL,NULL),(67,'Hellendoorn','Avonturenpark Hellendoorn is een attractiepark in de Nederlandse plaats Hellendoorn. Het park is in 1936 begonnen als theehuis met speeltuin en is uitgegroeid tot een volwaardig attractiepark. Het attractiepark ligt in een bosrijke omgeving aan de Luttenbergerweg ten westen van de plaats Hellendoorn.','https://nl.letsgodigital.org/uploads/2018/04/hellendoorn-2018.jpg','PAYS-BAS','THEMEPARK',52.390125800000000,6.4478990000000000,NULL,NULL),(68,'Phantasialand','Phantasialand is een attractiepark in het Duitse Br�hl ten zuidwesten van Keulen. Het attractiepark is begonnen als sprookjespark en inmiddels uitgegroeid tot een van de best bezochte attractieparken van Europa.','https://static.phlcdn.de/files/uploads/themenpark/images/sommer/berlin/ga_keyvisual_berlin.jpg','ALLEMAGNE','THEMEPARK',50.798954000000000,6.8793140000000000,NULL,NULL),(69,'Wildlands','Wildlands, voluit Wildlands Adventure Zoo Emmen, is een dierenpark in Emmen. Het park heeft een oppervlakte van 24 hectare en is opgedeeld in drie themagebieden. In \'Jungola\' staat de jungle centraal, in \'Serenga\' de savanne en de woestijn en in \'Nortica\' het poolgebied.','https://media.nu.nl/m/ikrx3sva9qsa_wd1280.jpg/gemeente-emmen-neemt-schulden-van-dierenpark-wildlands-over.jpg','PAYS-BAS','ZOO',52.781399300000000,6.8887165080000000,NULL,NULL),(70,'Holiday Park','Holiday Park is een attractiepark gelegen in Ha�loch in de Duitse deelstaat Rijnland-Palts. Het maakt sinds 2010 deel uit van de pretparken van de Plopsa-groep.','https://www.holidaypark.de/sites/default/files/public/brand/logos/Holiday%20Park.jpg','ALLEMAGNE','THEMEPARK',49.318498730000000,8.2901655060000000,NULL,NULL),(71,'LegoLand Deutschland','Legoland Duitsland (of: Legoland Deutschland) ligt in het Duitse plaatsje G�nzburg in de deelstaat Beieren. De omvang van Legoland Duitsland en het grote attractie aanbod zorgen ervoor dat je na een dag zeker nog niet uitgekeken bent!','https://r-cf.bstatic.com/images/hotel/max1024x768/229/229051043.jpg','ALLEMAGNE','THEMEPARK',48.425885950000000,10.3084808000000000,NULL,NULL),(72,'Hansa Park','Hansa-Park is een attractiepark, gelegen bij Sierksdorf in de Duitse deelstaat Sleeswijk-Holstein. Het park werd geopend op 15 mei 1977 onder de naam \"Hansaland\". In 1987 werd het park omgedoopt tot Hansa-Park. Van 1973 tot 1976 was op dezelfde locatie het eerste Duitse Legoland.','https://www.looopings.nl/img/foto/21/0425wowhans.jpg','ALLEMAGNE','THEMEPARK',54.076900000000000,10.7800000000000000,NULL,NULL),(73,'Liseberg','Liseberg is een attractiepark in Goteborg in Zweden. Het park is geopend in 1923, is gelegen aan de snelweg en is te zien bij binnenkomst van G�teborg. Het park ontvangt per jaar ongeveer 3 miljoen bezoekers, waarmee het het meest bezochte attractiepark van Scandinavi� is.','https://www.liseberg.com/optimized/facebook/9e5815d4/globalassets/for-foretag/grupper-event/helix_150308_sommar_4.jpg','SUEDE','THEMEPARK',57.696246700000000,11.9856468000000000,NULL,NULL),(74,'Energylandia','Energylandia is een attractiepark in Zator in het zuiden van Polen. Het park ligt ongeveer 50 kilometer af van Krakau en 400 kilometer van de hoofdstad Warschau. Met een oppervlakte van zo\'n 30 hectare is Energylandia het grootste pretpark van het land.','https://www.pretparken.be/dynamic_pics/thumb_49fae35d671ebf883bd4d68e6f3728dc_1280_960_1.jpg','POLOGNE','THEMEPARK',49.999590000000000,19.4071600000000000,NULL,NULL),(75,'Palooza Land','Parc à thème avec des dinosaures automatisés, une maison hantée, des piscines, des manèges et des spectacles.','https://lh5.googleusercontent.com/p/AF1QipN25oIPzJL0txYxigedq9G3C5PlcD_WYQNMpByt=w408-h272-k-no','MAROC','THEMEPARK',31.668197100000000,-8.0170590000000000,'MARRAKECH',NULL);
/*!40000 ALTER TABLE `THEME_PARKS_2` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-25  3:39:36
