-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 04-05-2024 a las 16:46:13
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ecommerceMascotas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'pienso'),
(2, 'camas'),
(3, 'rascadores'),
(4, 'bebederos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `producto_id` int(11) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `texto` varchar(255) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pedido`
--

CREATE TABLE `detalle_pedido` (
  `id` int(11) NOT NULL,
  `pedido_id` int(11) DEFAULT NULL,
  `producto_id` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precio_unitario` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `detalle_pedido`
--

INSERT INTO `detalle_pedido` (`id`, `pedido_id`, `producto_id`, `cantidad`, `precio_unitario`) VALUES
(1, 1, 1, 2, 1),
(2, 2, 1, 2, 1),
(3, 3, 1, 3, 60),
(4, 4, 1, 4, 60),
(5, 4, 3, 3, 100),
(6, 4, 5, 3, 40),
(7, 5, 1, 3, 60),
(8, 6, 1, 1, 60),
(9, 7, 1, 3, 60),
(10, 8, 1, 3, 60),
(11, 9, 1, 1, 60),
(12, 10, 1, 3, 60),
(13, 11, 1, 6, 60),
(14, 12, 1, 3, 60),
(15, 12, 3, 3, 100),
(16, 12, 5, 3, 40),
(17, 13, 1, 3, 60),
(18, 13, 3, 3, 100),
(19, 13, 5, 3, 40),
(20, 14, 1, 8, 60),
(21, 15, 1, 3, 60),
(22, 16, 1, 3, 60),
(23, 17, 1, 3, 60),
(24, 18, 1, 6, 60),
(25, 18, 3, 3, 100),
(26, 18, 5, 3, 40),
(27, 19, 1, 7, 60),
(28, 20, 1, 3, 60),
(29, 21, 1, 9, 60),
(30, 22, 1, 8, 60),
(31, 25, 1, 10, 60),
(32, 26, 1, 4, 60),
(33, 27, 1, 9, 60),
(34, 28, 1, 4, 60),
(35, 29, 1, 4, 60),
(36, 30, 1, 8, 60),
(37, 31, 1, 7, 60),
(38, 32, 1, 7, 60),
(39, 33, 1, 7, 60),
(40, 34, 3, 8, 100),
(41, 35, 1, 7, 60),
(42, 36, 1, 7, 60),
(43, 37, 1, 4, 60),
(44, 38, 1, 7, 60),
(45, 39, 1, 7, 60),
(46, 40, 1, 4, 60),
(47, 40, 3, 5, 100),
(48, 40, 5, 5, 40),
(49, 41, 1, 3, 60),
(50, 42, 1, 3, 60),
(51, 42, 3, 3, 100),
(52, 42, 5, 3, 40),
(53, 43, 1, 3, 60),
(54, 44, 10, 6, 22),
(55, 45, 1, 3, 60),
(56, 46, 11, 7, 11),
(57, 46, 5, 3, 40),
(58, 46, 3, 3, 100),
(59, 47, 1, 7, 60),
(60, 48, 3, 7, 100),
(61, 48, 5, 7, 40),
(62, 48, 7, 0, 99),
(63, 48, 1, 7, 60),
(71, 53, 3, 7, 100),
(72, 54, 5, 9, 40),
(73, 54, 7, 9, 99),
(74, 54, 8, 9, 99),
(75, 55, 3, 3, 100),
(76, 55, 5, 3, 40),
(77, 55, 7, 3, 99),
(78, 56, 1, 7, 60);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20240121152327', '2024-01-21 16:23:47', 21),
('DoctrineMigrations\\Version20240121154053', '2024-01-21 16:41:00', 93),
('DoctrineMigrations\\Version20240121154728', '2024-01-21 16:47:32', 125),
('DoctrineMigrations\\Version20240127122232', '2024-01-27 13:22:45', 103),
('DoctrineMigrations\\Version20240127122519', '2024-01-27 13:25:23', 41),
('DoctrineMigrations\\Version20240127123009', '2024-01-27 13:30:13', 86),
('DoctrineMigrations\\Version20240127123310', '2024-01-27 13:33:14', 78),
('DoctrineMigrations\\Version20240127125601', '2024-01-27 13:56:05', 103),
('DoctrineMigrations\\Version20240212111339', '2024-02-12 12:14:12', 13),
('DoctrineMigrations\\Version20240212112037', '2024-02-12 12:20:42', 84),
('DoctrineMigrations\\Version20240413114940', '2024-04-13 13:49:54', 41),
('DoctrineMigrations\\Version20240413140939', '2024-04-13 16:09:45', 7),
('DoctrineMigrations\\Version20240418231820', '2024-04-19 01:18:42', 26);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `envios`
--

CREATE TABLE `envios` (
  `id` int(11) NOT NULL,
  `pedido_id` int(11) DEFAULT NULL,
  `direccion_entrega` varchar(255) DEFAULT NULL,
  `metodo_envio` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen`
--

CREATE TABLE `imagen` (
  `id` int(11) NOT NULL,
  `producto_id` int(11) DEFAULT NULL,
  `ruta` varchar(255) DEFAULT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  `image_size` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `imagen`
--

INSERT INTO `imagen` (`id`, `producto_id`, `ruta`, `image_name`, `image_size`, `updated_at`) VALUES
(7, 3, NULL, 'accesorios-gato-rascador-scratch-skate-csh88607-661ac1e051a32625663046.jpg', 29937, '2024-04-13 19:33:20'),
(8, 5, NULL, 'higiene-gatos-nova-clean-bandeja-omega-amarillo-ncl70689-m-661ac2288129a712700127.webp', 9458, '2024-04-13 19:34:32'),
(9, 7, NULL, 'accesorio-perro-tk-pet-austin-cuna-tkp40943-m-661ac28936822844573216.webp', 20904, '2024-04-13 19:36:09'),
(10, 8, NULL, 'cama-perros-outech-elevada-plegable-out40876-7-661ac2b9b186d119959281.webp', 9660, '2024-04-13 19:36:57'),
(12, 9, NULL, '61irnho395l-ac-ul320-661d629f7c1ac936980907.jpg', 15762, '2024-04-15 19:23:43'),
(13, 1, NULL, 'descarga-661d64ef4ab87720679607.webp', 7594, '2024-04-15 19:33:35'),
(14, 10, NULL, '10046341-0-1-2750b79a54e878e9d6732aff1857e6cc-6624467bc4687354941291.jpg', 39269, '2024-04-21 00:49:31'),
(15, 11, NULL, 'bcdcc5-b79d845e5b3f4ddf99617126a072a32b-mv2-662532e690d1e111316349.webp', 41542, '2024-04-21 17:38:14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lista_de_deseos`
--

CREATE TABLE `lista_de_deseos` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `producto_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--

CREATE TABLE `marcas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `marcas`
--

INSERT INTO `marcas` (`id`, `nombre`) VALUES
(1, 'advanced'),
(2, 'purina'),
(3, 'catzilla'),
(7, 'affinity');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotas`
--

CREATE TABLE `mascotas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `mascotas`
--

INSERT INTO `mascotas` (`id`, `nombre`) VALUES
(1, 'gato'),
(2, 'perro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint(20) NOT NULL,
  `body` longtext NOT NULL,
  `headers` longtext NOT NULL,
  `queue_name` varchar(190) NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metodos_de_pago`
--

CREATE TABLE `metodos_de_pago` (
  `id` int(11) NOT NULL,
  `nombre_metodo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `metodos_de_pago`
--

INSERT INTO `metodos_de_pago` (`id`, `nombre_metodo`) VALUES
(1, 'Tarjeta de Crédito');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertas`
--

CREATE TABLE `ofertas` (
  `id` int(11) NOT NULL,
  `producto_id` int(11) DEFAULT NULL,
  `descuento` double DEFAULT NULL,
  `fecha_inicio` datetime DEFAULT NULL,
  `fecha_fin` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `id` int(11) NOT NULL,
  `pedido_id` int(11) DEFAULT NULL,
  `metodo_de_pago_id` int(11) DEFAULT NULL,
  `cantidad` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `fecha_pedido` datetime DEFAULT NULL,
  `estado_pedido` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `usuario_id`, `fecha_pedido`, `estado_pedido`) VALUES
(1, 1, '2024-02-11 16:24:33', 'pendiente'),
(2, 1, '2024-02-11 17:04:52', 'pendiente'),
(3, 1, '2024-03-13 15:15:44', 'pendiente'),
(4, 1, '2024-03-13 15:19:17', 'pendiente'),
(5, 1, '2024-03-13 15:24:26', 'pendiente'),
(6, 1, '2024-03-13 15:24:54', 'pendiente'),
(7, 1, '2024-03-13 15:25:29', 'pendiente'),
(8, 1, '2024-03-13 15:29:14', 'pendiente'),
(9, 1, '2024-03-13 15:30:00', 'pendiente'),
(10, 1, '2024-03-13 15:31:33', 'pendiente'),
(11, 1, '2024-03-13 15:38:17', 'pendiente'),
(12, 1, '2024-03-13 15:39:05', 'pendiente'),
(13, 1, '2024-03-16 11:49:24', 'pendiente'),
(14, 1, '2024-03-16 14:57:44', 'pendiente'),
(15, 1, '2024-03-16 18:11:56', 'pendiente'),
(16, 1, '2024-03-16 18:14:33', 'pendiente'),
(17, 1, '2024-03-17 11:25:35', 'pendiente'),
(18, 1, '2024-03-17 17:01:25', 'pendiente'),
(19, 1, '2024-04-06 18:07:21', 'pendiente'),
(20, 1, '2024-04-06 18:17:02', 'pendiente'),
(21, 1, '2024-04-06 18:18:06', 'pendiente'),
(22, 1, '2024-04-06 18:23:51', 'pendiente'),
(23, 1, '2024-04-06 18:24:01', 'pendiente'),
(24, 1, '2024-04-06 18:24:16', 'pendiente'),
(25, 1, '2024-04-06 18:24:52', 'pendiente'),
(26, 1, '2024-04-06 18:26:52', 'pendiente'),
(27, 1, '2024-04-06 18:27:42', 'pendiente'),
(28, 1, '2024-04-06 18:29:09', 'pendiente'),
(29, 1, '2024-04-06 18:30:17', 'pendiente'),
(30, 1, '2024-04-06 18:34:02', 'pendiente'),
(31, 1, '2024-04-06 18:36:11', 'pendiente'),
(32, 1, '2024-04-06 18:41:48', 'pendiente'),
(33, 1, '2024-04-06 18:58:56', 'pendiente'),
(34, 1, '2024-04-07 18:53:52', 'pendiente'),
(35, 1, '2024-04-07 18:59:17', 'pendiente'),
(36, 1, '2024-04-13 13:55:44', 'pendiente'),
(37, 1, '2024-04-13 22:22:33', 'pendiente'),
(38, 1, '2024-04-14 18:58:50', 'pendiente'),
(39, 1, '2024-04-19 01:36:41', 'pendiente'),
(40, 1, '2024-04-20 18:05:43', 'pendiente'),
(41, 3, '2024-04-21 00:20:53', 'pendiente'),
(42, 3, '2024-04-21 00:22:31', 'pendiente'),
(43, 3, '2024-04-21 00:25:00', 'pendiente'),
(44, 3, '2024-04-21 00:51:42', 'pendiente'),
(45, 1, '2024-04-21 17:36:25', 'pendiente'),
(46, 1, '2024-04-23 18:08:18', 'pendiente'),
(47, 3, '2024-04-27 18:08:30', 'pendiente'),
(48, 1, '2024-04-28 00:35:34', 'pendiente'),
(49, 3, '2024-04-28 17:58:55', 'pendiente'),
(50, 3, '2024-04-28 18:05:31', 'pendiente'),
(53, 3, '2024-04-28 18:25:06', 'pendiente'),
(54, 3, '2024-04-28 18:39:35', 'pendiente'),
(55, 3, '2024-04-28 18:41:42', 'pendiente'),
(56, 3, '2024-04-28 18:53:10', 'pendiente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `categoria_id` int(11) DEFAULT NULL,
  `marca_id` int(11) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `categoria_id`, `marca_id`, `nombre`, `descripcion`, `precio`, `stock`) VALUES
(1, 1, 3, 'pienso para gatos advanced 10 kg', 'pienso', 60, 993),
(3, 3, 3, 'rascador para gatos 100 cm gris', 'rascador para gatos', 100, 767),
(5, 2, 2, 'arenero', 'arenero', 40, 99),
(7, 2, 1, 'cama para perros', 'cama para perros grande', 99, 105),
(8, 2, 1, 'cama para perros', 'cama para perros grande', 99, 68),
(9, 4, 3, 'comedero de gatos', 'comedero de gatos', 17, 99),
(10, 4, 1, 'comedero de gatos relaxdays', 'comedero de gatos', 22, 77),
(11, 4, 1, 'comedero de gatos advanced', 'comedero', 11, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_mascotas`
--

CREATE TABLE `productos_mascotas` (
  `producto_id` int(11) NOT NULL,
  `mascota_id` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `productos_mascotas`
--

INSERT INTO `productos_mascotas` (`producto_id`, `mascota_id`, `id`) VALUES
(1, 1, 1),
(3, 1, 2),
(5, 1, 3),
(8, 2, 4),
(9, 1, 5),
(10, 1, 6),
(11, 1, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `producto_id` int(11) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `texoto_comentario` varchar(255) DEFAULT NULL,
  `calificacion` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) NOT NULL,
  `roles` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '(DC2Type:json)' CHECK (json_valid(`roles`)),
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`) VALUES
(1, 'paredesvelezjavierr@gmail.com', '[\"ROLE_USER\",\"ROLE_ADMIN\"]', '$2y$13$Tb6JS8b0gORF59ZDFBAkH.w1znZyV.12NZFShyyKAro57u9nXVaRi'),
(2, 'usuario1@gmail.coom', '[]', '$2y$13$fGMRYuCU9n7ZQRUQch4Iy.qEIZU5w42hW0mzIGsj3OoTcCVFSktFe'),
(3, 'usuario2@gmail.com', '[]', '$2y$13$XTe9xoOgrfSJ.DuWE1Q2mOC8rsAQjA1M6QQUunr9Sk3x9SCAXcZ0K'),
(4, 'usuario3@gmail.com', '[]', '$2y$13$eeJUGVcjAlkUE8DD81coAO6t2CfOpCJHnd6Stjp/9S8deH.1ZQmsC'),
(5, 'usuario4@gmail.com', '[]', '$2y$13$puBhHTLtFqRE8Oiv25def.aRfHk6I9X4ohnX1B4nqQqC7jGfGfqbG'),
(6, 'usuario6@gmail.com', '[]', '$2y$13$PIGKrbH.wlqMpU1gCRPc.uwyYUMUm1i3djDqSpBtEhdF2PexBaPqa'),
(7, 'usuario7@gmail.com', '[]', '$2y$13$7eP5h6fBhHt2w7XFg150ZOpuCB2QnMty21jfillplNLzzUqaAvEo.'),
(8, 'usuario11@gmail.com', '[]', '$2y$13$BjJraDC8dV7/OVxedjnLKOW/A8PLdcSdM3Wc7BkHSrpjKPHeXD8R2'),
(9, 'usuario13@gmail.com', '[]', '$2y$13$I8LQVQngQaJsh42KktE5dOqjhaFgflkRie10T1tfZgR1FpsWNKmXW'),
(10, 'usuario21@gmail.com', '[]', '$2y$13$fOC4bCjfr4p0PInSKPHOR.rwGSWrsh1AHlVLPncJ6kjetKoCBA7PG'),
(11, 'usuario22@gmail.com', '[]', '$2y$13$.lkROrd8mG7QPUaa4VXJv.ban4VGlSajfsIGXUpBOZQ0L79B6pJ.W'),
(12, 'usuario27@gmail.com', '[]', '$2y$13$wjFWEnnZP1wtDf4Twy7.xuZxOL2A4rhqTfdb7XbJu5vp6HS9RpxAG'),
(13, 'usuario31@gmail.com', '[]', '$2y$13$7iSOxtcSZUr5rGQbVyiKz.SGwqHp/nj/HWD8TYt2bNfUiAresy196'),
(14, 'usuario37@gmail.com', '[]', '$2y$13$bCuW4FGPZqafj0pZn5BYOeo55qje/DvRVKPln7GIM.pyhpSZVi6rG'),
(15, 'usuario39@gmail.com', '[]', '$2y$13$Q3mhGRpTkeYtHl0ZAhCTfesHDpeSf0Tx5hk5/9oGztDn1em0r27xq'),
(16, 'usuario40@gmail.com', '[]', '$2y$13$m5dNTtM6g04IWEyhi8T6NuxHiBnzR2vf25omn1o76C9H1lELTZvKi'),
(17, 'usuario111@gmail.com', '[]', '$2y$13$XVuh6kDwjmoUtRN2y.0I4O8rXNOhuXMKR.vw061GPxY/lT3G8i5sm'),
(18, 'usuario99@gmail.com', '[]', '$2y$13$P2HMdQQxRFGvobUDNA6eZOPDEnSRmKlGFMj/u65W88izP2dU5oWsa'),
(19, 'usuario999@gmail.com', '[]', '$2y$13$wCTK.obtHyZ4S0KyvAQeNeihxdTZK4bRXIhcAJQ89TGy8hBkvtoZ.'),
(20, 'usuario02@gmail.com', '[]', '$2y$13$8i0BV3BbnEzIh1hvEypX4OYTZUIYtVmtQ57WDpslHYIcEH00L9/NK'),
(21, 'usuario03@gmail.com', '[]', '$2y$13$6ST/AK08D99toumxFESMiuuGd2iTMWsCaPJzfMLWbsVKp4E8bRBVy'),
(22, 'usuario04@gmail.com', '[]', '$2y$13$e3u1dGCPhEq6f7eiwJPqp.gm9oRBZxDTz.HvYSZrY06lzk23NV8Ny');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_F54B3FC07645698E` (`producto_id`),
  ADD KEY `IDX_F54B3FC0DB38439E` (`usuario_id`);

--
-- Indices de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_A834F5694854653A` (`pedido_id`),
  ADD KEY `IDX_A834F5697645698E` (`producto_id`);

--
-- Indices de la tabla `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indices de la tabla `envios`
--
ALTER TABLE `envios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_EDC2AE674854653A` (`pedido_id`);

--
-- Indices de la tabla `imagen`
--
ALTER TABLE `imagen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_8319D2B37645698E` (`producto_id`);

--
-- Indices de la tabla `lista_de_deseos`
--
ALTER TABLE `lista_de_deseos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_99F5A27ADB38439E` (`usuario_id`),
  ADD KEY `IDX_99F5A27A7645698E` (`producto_id`);

--
-- Indices de la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `messenger_messages`
--
ALTER TABLE `messenger_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  ADD KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  ADD KEY `IDX_75EA56E016BA31DB` (`delivered_at`);

--
-- Indices de la tabla `metodos_de_pago`
--
ALTER TABLE `metodos_de_pago`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ofertas`
--
ALTER TABLE `ofertas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_48C925F37645698E` (`producto_id`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_DA9B0DFF4854653A` (`pedido_id`),
  ADD KEY `IDX_DA9B0DFF7E666606` (`metodo_de_pago_id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_6716CCAADB38439E` (`usuario_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_767490E63397707A` (`categoria_id`),
  ADD KEY `IDX_767490E681EF0041` (`marca_id`);

--
-- Indices de la tabla `productos_mascotas`
--
ALTER TABLE `productos_mascotas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_584E110D7645698E` (`producto_id`),
  ADD KEY `IDX_584E110DFB60C59E` (`mascota_id`);

--
-- Indices de la tabla `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_6970EB0F7645698E` (`producto_id`),
  ADD KEY `IDX_6970EB0FDB38439E` (`usuario_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT de la tabla `envios`
--
ALTER TABLE `envios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `imagen`
--
ALTER TABLE `imagen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `lista_de_deseos`
--
ALTER TABLE `lista_de_deseos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `metodos_de_pago`
--
ALTER TABLE `metodos_de_pago`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `ofertas`
--
ALTER TABLE `ofertas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `productos_mascotas`
--
ALTER TABLE `productos_mascotas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `FK_F54B3FC07645698E` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `FK_F54B3FC0DB38439E` FOREIGN KEY (`usuario_id`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  ADD CONSTRAINT `FK_A834F5694854653A` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`),
  ADD CONSTRAINT `FK_A834F5697645698E` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `envios`
--
ALTER TABLE `envios`
  ADD CONSTRAINT `FK_EDC2AE674854653A` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`);

--
-- Filtros para la tabla `imagen`
--
ALTER TABLE `imagen`
  ADD CONSTRAINT `FK_8319D2B37645698E` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `lista_de_deseos`
--
ALTER TABLE `lista_de_deseos`
  ADD CONSTRAINT `FK_99F5A27A7645698E` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `FK_99F5A27ADB38439E` FOREIGN KEY (`usuario_id`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `ofertas`
--
ALTER TABLE `ofertas`
  ADD CONSTRAINT `FK_48C925F37645698E` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `FK_DA9B0DFF4854653A` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`),
  ADD CONSTRAINT `FK_DA9B0DFF7E666606` FOREIGN KEY (`metodo_de_pago_id`) REFERENCES `metodos_de_pago` (`id`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `FK_6716CCAADB38439E` FOREIGN KEY (`usuario_id`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `FK_767490E63397707A` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`),
  ADD CONSTRAINT `FK_767490E681EF0041` FOREIGN KEY (`marca_id`) REFERENCES `marcas` (`id`);

--
-- Filtros para la tabla `productos_mascotas`
--
ALTER TABLE `productos_mascotas`
  ADD CONSTRAINT `FK_584E110D7645698E` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `FK_584E110DFB60C59E` FOREIGN KEY (`mascota_id`) REFERENCES `mascotas` (`id`);

--
-- Filtros para la tabla `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `FK_6970EB0F7645698E` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `FK_6970EB0FDB38439E` FOREIGN KEY (`usuario_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
