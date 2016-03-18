<?php

$boxDAO = new BoxDAO();

$app->get('/boxes/?',function() use ($boxDAO){
    header("Content-Type: application/json");
    echo json_encode($boxDAO->selectAll(), JSON_NUMERIC_CHECK);
    exit();
});

$app->get('/boxes/:id/?', function($id) use ($boxDAO){
    header("Content-Type: application/json");
    echo json_encode($boxDAO->selectById($id), JSON_NUMERIC_CHECK);
    exit();
});

// $app->get('/boxes/:name/?', function($name) use ($boxDAO){
//     header("Content-Type: application/json");
//     echo json_encode($boxDAO->selectByName($name), JSON_NUMERIC_CHECK);
//     exit();
// });

$app->post('/boxes/?', function() use ($app, $boxDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($boxDAO->insert($post), JSON_NUMERIC_CHECK);
    exit();
});

$app->delete('/boxes/:id/?', function($id) use ($boxDAO){
    header("Content-Type: application/json");
    echo json_encode($boxDAO->delete($id));
    exit();
});

$app->put('/boxes/:id/?', function($id) use ($app, $boxDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($boxDAO->update($id, $post), JSON_NUMERIC_CHECK);
    exit();
});