<?php

$projectDAO = new ProjectDAO();

$app->get('/projects/?',function() use ($projectDAO){
    header("Content-Type: application/json");
    echo json_encode($projectDAO->selectAll(), JSON_NUMERIC_CHECK);
    exit();
});

$app->get('/projects/:id/?', function($id) use ($projectDAO){
    header("Content-Type: application/json");
    echo json_encode($projectDAO->selectById($id), JSON_NUMERIC_CHECK);
    exit();
});

// $app->get('/projects/:name/?', function($name) use ($projectDAO){
//     header("Content-Type: application/json");
//     echo json_encode($projectDAO->selectByName($name), JSON_NUMERIC_CHECK);
//     exit();
// });


$app->get('/projects/boxes/:box_id/?', function($box_id) use ($projectDAO){
    header("Content-Type: application/json");
    echo json_encode($projectDAO->selectByboxId($box_id), JSON_NUMERIC_CHECK);
    exit();
});

$app->post('/projects/?', function() use ($app, $projectDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($projectDAO->insert($post), JSON_NUMERIC_CHECK);
    exit();
});

$app->delete('/projects/:id/?', function($id) use ($projectDAO){
    header("Content-Type: application/json");
    echo json_encode($projectDAO->delete($id));
    exit();
});

$app->delete('/projects/box/:id/?', function($id) use ($projectDAO){
    header("Content-Type: application/json");
    echo json_encode($projectDAO->deleteByBox($id));
    exit();
});

$app->put('/projects/:id/?', function($id) use ($app, $projectDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($projectDAO->update($id, $post), JSON_NUMERIC_CHECK);
    exit();
});