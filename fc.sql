-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 27, 2020 at 03:03 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fc`
--

-- --------------------------------------------------------

--
-- Table structure for table `aset`
--

DROP TABLE IF EXISTS `aset`;
CREATE TABLE IF NOT EXISTS `aset` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` text NOT NULL,
  `tipe` text NOT NULL,
  `nilai` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `aset`
--

INSERT INTO `aset` (`id`, `nama`, `tipe`, `nilai`) VALUES
(2, 'Emas', 'Investasi', 500000),
(19, 'Tabungan BCA', 'Likuid', 100000);

-- --------------------------------------------------------

--
-- Table structure for table `dankel`
--

DROP TABLE IF EXISTS `dankel`;
CREATE TABLE IF NOT EXISTS `dankel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` text NOT NULL,
  `tipe` text NOT NULL,
  `nilai` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dankel`
--

INSERT INTO `dankel` (`id`, `nama`, `tipe`, `nilai`) VALUES
(1, 'Upah Karyawan', 'Perusahaan', 50000),
(2, 'Marketing', 'Operasional', 0),
(3, 'Modal Kerja', 'Jangka Pendek', 5000),
(4, 'Cicilan Kantor', 'Jangka Panjang', 5000),
(5, 'Tabungan Emas', 'Tabungan & Investasi', 10000),
(6, 'Internet', 'Konsumtif', 0),
(8, 'Pajak Mobil', 'Variabel', 0);

-- --------------------------------------------------------

--
-- Table structure for table `dansuk`
--

DROP TABLE IF EXISTS `dansuk`;
CREATE TABLE IF NOT EXISTS `dansuk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` text NOT NULL,
  `tipe` text NOT NULL,
  `nilai` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dansuk`
--

INSERT INTO `dansuk` (`id`, `nama`, `tipe`, `nilai`) VALUES
(1, 'Profit Bersih Jualan', 'Tetap', 200000),
(2, 'Profit Project', 'Tetap', 0),
(3, 'Pemasukan Rutin', 'Tetap', 0),
(4, 'Komisi', 'Tidak Tetap', 0),
(5, 'Honor', 'Tidak Tetap', 0),
(6, 'Hasil Sewa Aset', 'Tidak Tetap', 0),
(9, 'Keuntungan Usaha Ikan', 'Tidak Tetap', 0);

-- --------------------------------------------------------

--
-- Table structure for table `kewajiban`
--

DROP TABLE IF EXISTS `kewajiban`;
CREATE TABLE IF NOT EXISTS `kewajiban` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` text NOT NULL,
  `tipe` text NOT NULL,
  `nilai` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `kewajiban`
--

INSERT INTO `kewajiban` (`id`, `nama`, `tipe`, `nilai`) VALUES
(1, 'Kartu Kredit', 'Jangka Pendek', 485000);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
