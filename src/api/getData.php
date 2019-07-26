<?php
require_once('ClassConexao.php');

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if ($_POST){
	http_response_code(200);

	$cnpjEntidade = $_POST['cnpjEntidade'];
	$nomeEntidade = $_POST['nomeEntidade'];
	$nomeFantasia = $_POST['nomeFantasia'];
    $complemento = $_POST['complemento'];
    $logradouro = $_POST['logradouro'];
	$bairroEntidade = $_POST['bairroEntidade'];
	$cepEntidade = $_POST['cepEntidade'];
	$cidadeEntidade = $_POST['cidadeEntidade'];
	$numEntidade = $_POST['numEntidade'];
	$nomeRespEntidade = $_POST['nomeRespEntidade'];
	$telEntidade = $_POST['telEntidade'];
	$leiEntidade = $_POST['leiEntidade'];
	$dataFundEntidade = $_POST['dataFundEntidade'];
	$cargoRespEntidade = $_POST['cargoRespEntidade'];
	$objetivoEntidade = $_POST['objetivoEntidade'];
	$atividadesEntidade = $_POST['atividadesEntidade'];
	$justificativaEntidade = $_POST['justificativaEntidade'];
	$dataReuniaoEntidade = $_POST['dataReuniaoEntidade'];
	$areaEntidade = $_POST['areaEntidade'];
	$publicoEntidade = $_POST['publicoEntidade'];
	$qtdPessoasAssistidas = $_POST['qtdPessoasAssistidas'];
	$qtdFamiliasAssistidas = $_POST['qtdFamiliasAssistidas'];
	$cestaBasicaRB = $_POST['cestaBasicaRB'];
	$frequenciaCestaRB = $_POST['frequenciaCestaRB'];
	$qtdCestaBasica = $_POST['qtdCestaBasica'];
	$nomePriRepresentante = $_POST['nomePriRepresentante'];
	$telPriRepresentante = $_POST['telPriRepresentante'];
	$endPriRepresentante = $_POST['endPriRepresentante'];
	$nomeSegRepresentante = $_POST['nomeSegRepresentante'];
	$telSegRepresentante = $_POST['telSegRepresentante'];
	$endSegRepresentante = $_POST['endSegRepresentante'];
	$telRespEntidade = $_POST['telRespEntidade'];
	$endRespEntidade = $_POST['endRespEntidade'];

	$objDB = new conexaoBD();
	
	$link = $objDB->conecta_mysql();


	
	$id = $nomeEntidade;
	$sqlGet = "SELECT nome AS name FROM entidades WHERE id=id && nome like '%".$id."%' limit 1" ;
	$result = mysqli_query($link, $sqlGet);
	
	if($result){
	if ($result->num_rows > 0 ) {
	 while($row = $result->fetch_array()) {
	 echo $row["name"];
	 //echo $row["fantasiaNome"];
	 //echo $row["cnpjEntidade"];
	 }
	 if($id == ''){
		 echo "Digite aqui o nome da Entidade!";
	 }
	} else {
	 echo "Empresa não cadastrada!";
		}
	}

	else{
		echo "Conexão Malsucedida";
		}
	}
?>