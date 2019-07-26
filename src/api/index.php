<?php
require_once('ClassConexao.php');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if ($_POST){
	http_response_code(200);

	$cnpjEntidade = $_POST['cnpjEntidade'];
	$nomeEntidade = $_POST['nomeEntidade'];
	$nomeFantasia = $_POST['nomeFantasia'];
	$complemento = $_POST['complemento'];
	$bairroEntidade = $_POST['bairroEntidade'];
	$logradouro = $_POST['logradouro'];
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
	
	$sql = "insert into entidades(
	cnpj, 
	nome, 
	nomeFantasia, 
	logradouro,
	numero, 
	complemento, 
	bairro,
	cidade,
	telEntidade,
	cep, 
	numeroLeiUtilidade,
	nomeResponsavel,
	endResponsavel, 
	telResponsavel, 
	cargoRespEntidade,
	dataFundacao, 
	objetivoPrincipal,
	atividades, 
	justificativaObjetivos, 
	dadosReuniaoAdministrativa, 
	areaDeAbrangencia, 
	publicoAlvo,
	quantidadePessoasAssistidas,
	quantidadeFamiliasAssistidas,
	distribuiCesta, 
	periodicidade, 
	nomeRepresentante1, 
	endRepresentante1, 
	telRepresentante1,
	nomeRepresentante2, 
	endRepresentante2, 
	telRepresentante2
	)
	values(
	'$cnpjEntidade', 
	'$nomeEntidade', 
	'$nomeFantasia', 
	'$logradouro', 
	'$numEntidade', 
	'$complemento', 
	'$bairroEntidade', 
	'$cidadeEntidade', 
	'$telEntidade', 
	'$cepEntidade', 
	'$leiEntidade', 
	'$nomeRespEntidade',
	'$endRespEntidade', 
	'$telRespEntidade',
	'$cargoRespEntidade',
	'$dataFundEntidade', 
	'$objetivoEntidade', 
	'$atividadesEntidade', 
	'$justificativaEntidade', 
	'$dataReuniaoEntidade',
	'$areaEntidade', 
	'$publicoEntidade', 
	'$qtdPessoasAssistidas',
	'$qtdFamiliasAssistidas', 
	'$cestaBasicaRB', 
	'$frequenciaCestaRB',
	'$nomePriRepresentante', 
	'$endPriRepresentante', 
	'$telPriRepresentante', 
	'$nomeSegRepresentante',
	'$endSegRepresentante',
	'$telSegRepresentante'
	)";

		if(mysqli_query($link, $sql)){
			echo "Conexão bem sucedida!";
		}
		else{
			echo "Conexão Malsucedida";
		}
	//echo json_encode( $_POST );

	/*echo json_encode(array(
		"sent" => true
	));*/

	//$conn->close();
	}
  else
	{
	// tell the user about error
	echo json_encode(["sent" => true, "message" => "Something went wrong"]);
	}
?>


