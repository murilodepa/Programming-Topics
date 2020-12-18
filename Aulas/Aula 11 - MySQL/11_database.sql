-- --------------------------------------------------------
-- substituir pelo nome do seu bd
USE `aula08`;

CREATE TABLE IF NOT EXISTS `cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(200) NOT NULL,
  `endereco` text NOT NULL,
  `email` varchar(200) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

INSERT INTO `cliente` (`id`, `nome`, `endereco`, `email`, `telefone`) VALUES
(1, 'Joana Cristina', 'Avenida Moraes Sales, 375', 'joana@yahoo.com', '086454743743'),
(2, 'Flávia Almeida', 'Rua Jasmin, 452', 'flavia@test.com', '03937263623'),
(3, 'Carlos Eduardo ', 'Rua José de Alencar, 314', 'cadu@gmail.com', '082271626121'),
(4, 'Elizabete Silva', 'Rua dos Alecrins, 465', 'liz@gmail.com', '07846352532'),
(5, 'Sérgio dos Santos', 'Avenida Benjamin Constant, 4521', 'sergio@gmail.com', '038372636232'),
(6, 'Luis Lauro', 'Rua Montreal, 456', 'luislauro@yahoo.com', '038373273262'),
(7, 'Antonio Moreira', 'Rua Marcos Teodoro, 53', 'antonio@yahoo.com', '039223232323');

-- --------------------------------------------------------
