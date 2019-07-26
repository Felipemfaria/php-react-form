<?php

class conexaoBD {

private $host = 'localhost';

private $usuario = 'root';

private $senha = '';

private $database = 'centralscc';

public function conecta_mysql() {

    $con = mysqli_connect($this->host, $this->usuario, $this->senha, $this->database);

    mysqli_set_charset($con,'utf8');

    if(mysqli_connect_errno()){
        echo 'Erro ao tentar se conectar ao BD MySQL: ' .mysqli_connect_error();
    }
    return $con;
    }    
}
















?>