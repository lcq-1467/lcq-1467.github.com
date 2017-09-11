<?php
//设置页面内容是html编码格式是utf-8
//header("Content-Type: text/plain;charset=utf-8"); 
header("Content-Type: application/json;charset=utf-8"); 
//header("Content-Type: text/xml;charset=utf-8"); 
//header("Content-Type: text/html;charset=utf-8"); 
//header("Content-Type: application/javascript;charset=utf-8"); 

//定义一个多维数组，包含员工的信息，每条员工信息为一个数组
$aa = array();

//判断如果是get请求，则进行搜索；如果是POST请求，则进行新建
//$_SERVER是一个超全局变量，在一个脚本的全部作用域中都可用，不用使用global关键字
//$_SERVER["REQUEST_METHOD"]返回访问页面使用的请求方法
if ($_SERVER["REQUEST_METHOD"] == "GET") {
	search();
} elseif ($_SERVER["REQUEST_METHOD"] == "POST"){
	create();
}

function create(){
	//判断信息是否填写完全
	if (!isset($_POST["tel"]) || empty($_POST["tel"])
		|| !isset($_POST["email"]) || empty($_POST["email"])
		|| !isset($_POST["area"]) || empty($_POST["area"])
		) {
		echo '{"success":false,"msg":"参数错误，员工信息填写不全"}';
		return;
	}
	//TODO: 获取POST表单数据并保存到数据库
	global $aa;
	$aa[]="tel:" . $_POST["tel"] ." | email:". $_POST["email"] ." | area:". $_POST["area"];
	//提示保存成功   
	$myfile = fopen("mess.txt", "a") or die("Unable to open file!");
	fwrite($myfile, $aa[0]."\n");
	fclose($myfile);
	echo '{"success":true,"msg":"员工：' . $aa[0]. ' 信息保存成功！"}';
}

?>