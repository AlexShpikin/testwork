<?php
$good = array(
"success" => true,
"msg" => "Сообщение отправлено, в ближайшее время наш менеджер свяжется с Вами."
);

$errorField =  array(
"success" => false,
"fields" => array(
	"0"=> array("name"=> "email", "error" => "Введенный Вами e-mail не найден"))
);

$errorGlobal = array(
"success" => false,
"msg" => "Ошибка отправки формы"
);


if($_POST){
	$name = htmlspecialchars($_POST['name']);
	$phone = htmlspecialchars($_POST['phone']);
	$email = htmlspecialchars($_POST['mail']);
	$text = htmlspecialchars($_POST['text']);
	if($email !='admin@admin.ru')
	{
		echo json_encode($errorField);
	}else{
		echo json_encode($good);
	}
}
else{
	echo json_encode($errorGlobal);
}

?>