<?php

session_start();


define("WWW_ROOT",dirname(dirname(__FILE__)).DIRECTORY_SEPARATOR);

require_once WWW_ROOT. "dao" .DIRECTORY_SEPARATOR. 'BoxDAO.php';
require_once WWW_ROOT. "dao" .DIRECTORY_SEPARATOR. 'TagDAO.php';
require_once WWW_ROOT. "dao" .DIRECTORY_SEPARATOR. 'ProjectDAO.php';


require_once WWW_ROOT. "api" .DIRECTORY_SEPARATOR. 'Slim'. DIRECTORY_SEPARATOR .'Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$include_path = WWW_ROOT . "api" . DIRECTORY_SEPARATOR . "routes" . DIRECTORY_SEPARATOR;

require_once $include_path . 'boxes.php';
require_once $include_path . 'tags.php';
require_once $include_path . 'projects.php';


$app->run();

