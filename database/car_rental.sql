-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 04 Oca 2024, 17:22:16
-- Sunucu sürümü: 10.4.32-MariaDB
-- PHP Sürümü: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `car_rental`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `photo1` text NOT NULL,
  `photo2` text NOT NULL,
  `brand` varchar(30) NOT NULL,
  `model` smallint(6) NOT NULL,
  `fuel_type` varchar(15) NOT NULL,
  `price` float NOT NULL,
  `gearbox` varchar(15) NOT NULL,
  `available` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Tablo döküm verisi `cars`
--

INSERT INTO `cars` (`id`, `photo1`, `photo2`, `brand`, `model`, `fuel_type`, `price`, `gearbox`, `available`) VALUES
(1, 'https://cdn.24.co.za/files/Cms/General/d/3089/b1cf3fb0a479438fabf174b092301c29.jpg', 'https://img.autotrader.co.za/17873025', 'Renault Clio', 2019, 'diesel', 30, 'manuel', 0),
(2, 'https://www.razaoautomovel.com/wp-content/uploads/2021/11/Dacia-Duster-4x4-6-scaled_925x520_acf_cropped.jpg', 'https://www.topgear.com/sites/default/files/2022/12/Dacia-Duster-on-road-058.jpg', 'Dacia Duster', 2021, 'diesel', 80, 'automatic', 1),
(3, 'https://location-voiture.ma/uploads/images/cars/slider/572416_ve%CC%81hicule-utilitaire-multispace-berlingo-7-places.jpg', 'https://thumbs.img-sprzedajemy.pl/1000x901c/ad/92/ef/citroen-berlingo-xtr-ledy-klimatronik-lift-115-berlingo-560193777.jpg', 'Citroen Berlingo', 2019, 'petrol', 60, 'manuel', 1),
(4, 'https://www.journalofnomads.com/wp-content/uploads/2019/12/Renting-a-Car-in-Morocco-and-Driving-in-Morocco-e1649421213271.jpg', 'https://www.locationvoiture-agadir.fr/timg/phpThumb.php?src=../admin/media/img_vehicule/7c66c06e43509490ea500222f2c7e6e4_001.jpg&w=555&h=331&far=C&bg=FFFFFF&f=png&hash=1787e1341c517d3b249a83bdd1f0eefa', 'Dacia Logan', 2019, 'petrol', 40, 'manuel', 1),
(6, 'https://www.oneclickdrive.com/car-for-rent/slider-desktop/Mercedes-Benz_Mayback-S500_2020_10864_10864_3100348325-5_small.jpg?vr=3', 'https://img.gocar.be/v7/_cloud_wordpress_/2019/06/mercedes-maybach_s_650_24.jpg', 'Mercedes Benz', 2019, 'petrol', 80, 'automatic', 1),
(7, 'https://cdn.24.co.za/files/Cms/General/d/3089/b1cf3fb0a479438fabf174b092301c29.jpg', 'https://img.autotrader.co.za/17873025', 'Renault Clio', 2019, 'diesel', 30, 'manuel', 0),
(9, 'https://location-voiture.ma/uploads/images/cars/slider/572416_ve%CC%81hicule-utilitaire-multispace-berlingo-7-places.jpg', 'https://thumbs.img-sprzedajemy.pl/1000x901c/ad/92/ef/citroen-berlingo-xtr-ledy-klimatronik-lift-115-berlingo-560193777.jpg', 'Citroen Berlingo', 2019, 'petrol', 60, 'manuel', 1);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `rentals`
--

CREATE TABLE `rentals` (
  `id` int(11) NOT NULL,
  `rental_date` date NOT NULL,
  `return_date` date NOT NULL,
  `price` float NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `car_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `telephone` varchar(50) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `rentals`
--
ALTER TABLE `rentals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `car_id` (`car_id`);

--
-- Tablo için indeksler `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Tablo için AUTO_INCREMENT değeri `rentals`
--
ALTER TABLE `rentals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Dökümü yapılmış tablolar için kısıtlamalar
--

--
-- Tablo kısıtlamaları `rentals`
--
ALTER TABLE `rentals`
  ADD CONSTRAINT `rentals_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `rentals_ibfk_2` FOREIGN KEY (`car_id`) REFERENCES `cars` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
