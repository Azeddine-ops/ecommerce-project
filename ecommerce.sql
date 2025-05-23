-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 23 mai 2025 à 12:17
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ecommerce`
--

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`) VALUES
(1, 'Playstation 5', 932, 'images/ps5.webp'),
(2, 'iPhone 16 Pro Max', 550, 'images/iphone16pro.webp'),
(3, 'Écouteurs sans fil', 60, 'images/airpods.webp'),
(4, 'Asus TUF Gaming A17', 1900, 'images/pcportable.webp'),
(5, 'Samsung Galaxy S25 Ultra', 1204, 'images/samsungs.webp'),
(6, 'Nintendo Switch', 266, 'images/nitendoswitch.webp'),
(7, 'MSI MAG Infinite S3', 1600, 'images/pcgamer.webp'),
(8, 'CHiQ TV 55 Pouces 4K', 600, 'images/telee4k.webp'),
(9, 'Google Pixel Watch 3', 339, 'images/smartwatch.webp'),
(10, 'Casque sans fil', 34, 'images/casqi.webp'),
(11, 'Mi Smart Band 4', 40, 'images/exclusive.png'),
(12, 'Casque VR tout-en-un', 550, 'images/vr.webp');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
