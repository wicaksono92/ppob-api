-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 22, 2024 at 10:01 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_ppob`
--

-- --------------------------------------------------------

--
-- Table structure for table `balance`
--

CREATE TABLE `balance` (
  `id` int(11) NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  `saldo_awal` int(11) DEFAULT NULL,
  `debit` int(11) DEFAULT NULL,
  `kredit` int(11) DEFAULT NULL,
  `balance` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `balance`
--

INSERT INTO `balance` (`id`, `user`, `saldo_awal`, `debit`, `kredit`, `balance`, `createdAt`, `updatedAt`) VALUES
(2, 'budi@gmail.com', 2000, NULL, 77000, 79000, '2024-05-20 10:10:22', '2024-05-20 09:20:13'),
(4, 'cahyo@gmail.com', 0, 0, 4000, 4000, '2024-05-22 07:23:51', '2024-05-22 07:23:51');

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `id` int(11) NOT NULL,
  `banner_name` varchar(255) DEFAULT NULL,
  `banner_image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`id`, `banner_name`, `banner_image`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Banner 1', 'https://nutech-integrasi.app/dummy.jpg', 'Lerem Ipsum Dolor sit amet', '2024-05-20 09:14:00', '2024-05-20 09:14:00'),
(2, 'Banner 2', 'https://nutech-integrasi.app/dummy.jpg', 'Lerem Ipsum Dolor sit amet', '2024-05-20 09:14:00', '2024-05-20 09:14:00');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `service_code` varchar(255) DEFAULT NULL,
  `service_name` varchar(255) DEFAULT NULL,
  `service_icon` varchar(255) DEFAULT NULL,
  `service_tariff` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `service_code`, `service_name`, `service_icon`, `service_tariff`, `createdAt`, `updatedAt`) VALUES
(1, 'PAJAK', 'Pajak PBB', 'https://nutech-integrasi.app/dummy.jpg', 40000, '2024-05-20 09:15:42', '2024-05-20 09:15:42'),
(2, 'PLN', 'Listrik', 'https://nutech-integrasi.app/dummy.jpg', 10000, '2024-05-20 09:15:42', '2024-05-20 09:15:42');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `id` int(11) NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  `invoice_number` varchar(255) DEFAULT NULL,
  `service_code` varchar(255) DEFAULT NULL,
  `service_name` varchar(255) DEFAULT NULL,
  `transaction_type` varchar(255) DEFAULT NULL,
  `total_amount` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`id`, `user`, `invoice_number`, `service_code`, `service_name`, `transaction_type`, `total_amount`, `createdAt`, `updatedAt`) VALUES
(1, 'cahyo@gmail.com', 'INV2152024-1', 'PLN', 'Listrik', 'PAYMENT', 10000, '2024-05-21 07:15:24', '2024-05-21 07:15:24'),
(2, 'cahyo@gmail.com', 'INV2152024-2', 'PLN', 'Listrik', 'PAYMENT', 10000, '2024-05-21 07:15:43', '2024-05-21 07:15:43'),
(3, 'budi@gmail.com', 'INV2152024-3', 'PLN', 'Listrik', 'PAYMENT', 10000, '2024-05-21 07:16:55', '2024-05-21 07:16:55'),
(4, 'budi@gmail.com', 'INV2152024-4', 'PLN', 'Listrik', 'PAYMENT', 10000, '2024-05-21 07:17:33', '2024-05-21 07:17:33'),
(5, 'budi@gmail.com', 'INV2152024-5', 'PLN', 'Listrik', 'PAYMENT', 10000, '2024-05-21 07:18:07', '2024-05-21 07:18:07'),
(6, 'budi@gmail.com', 'INV2152024-6', 'PAJAK', 'Pajak PBB', 'PAYMENT', 40000, '2024-05-21 07:18:27', '2024-05-21 07:18:27'),
(7, 'budi@gmail.com', 'INV2152024-7', 'PAJAK', 'Pajak PBB', 'PAYMENT', 40000, '2024-05-21 07:24:42', '2024-05-21 07:24:42'),
(8, 'cahyo@gmail.com', 'INV2152024-1', 'code', '', 'TOPUP', 400000, '2024-05-21 07:32:17', '2024-05-21 07:32:17'),
(9, 'cahyo@gmail.com', 'INV2152024-2', '', '', 'TOPUP', 4000, '2024-05-21 07:33:07', '2024-05-21 07:33:07'),
(10, 'cahyo@gmail.com', 'INV2152024-8', 'PAJAK', 'Pajak PBB', 'PAYMENT', 40000, '2024-05-21 07:34:00', '2024-05-21 07:34:00'),
(11, 'budi@gmail.com', 'INV2252024-3', '', '', 'TOPUP', 4000, '2024-05-22 07:05:50', '2024-05-22 07:05:50'),
(12, 'cahyo@gmail.com', 'INV2252024-4', '', '', 'TOPUP', 4000, '2024-05-22 07:09:43', '2024-05-22 07:09:43'),
(13, 'cahyo@gmail.com', 'INV2252024-5', '', '', 'TOPUP', 4000, '2024-05-22 07:12:00', '2024-05-22 07:12:00'),
(14, 'cahyo@gmail.com', 'INV2252024-6', '', '', 'TOPUP', 4000, '2024-05-22 07:13:39', '2024-05-22 07:13:39'),
(15, 'cahyo@gmail.com', 'INV2252024-7', '', '', 'TOPUP', 4000, '2024-05-22 07:14:17', '2024-05-22 07:14:17'),
(16, 'cahyo@gmail.com', 'INV2252024-8', '', '', 'TOPUP', 4000, '2024-05-22 07:14:25', '2024-05-22 07:14:25'),
(17, 'cahyo@gmail.com', 'INV2252024-9', '', '', 'TOPUP', 4000, '2024-05-22 07:23:51', '2024-05-22 07:23:51');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `profile_image`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'cahyo', 'Budi wae', NULL, 'cahyo@gmail.com', '$2b$10$rC8IgUUxF1Pzxg3xC0tzcefh4aR.ZlvHETJsv9YT4WDxXAawva/Ce', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJjYWh5byIsImVtYWlsIjoiY2FoeW9AZ21haWwuY29tIiwiaWF0IjoxNzE2MzYzMDA4LCJleHAiOjE3MTY0NDk0MDh9.ODHcSvvp2ML6ebDG-IeOudxrcre8quvBGB5x904_1Y8', '2024-05-21 06:33:52', '2024-05-22 07:30:08'),
(2, 'budi', 'wicaksono', NULL, 'budi@gmail.com', '$2b$10$Kep/x1ouwaRo7wzeRJp73OLVAQaWrz0oma4NsFIrx1X7REtXA3SaC', NULL, '2024-05-22 06:39:38', '2024-05-22 06:39:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `balance`
--
ALTER TABLE `balance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `balance`
--
ALTER TABLE `balance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
