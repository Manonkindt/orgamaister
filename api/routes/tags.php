<?php

$tagDAO = new TagDAO();

$app->get('/tags/?',function() use ($tagDAO){
    header("Content-Type: application/json");
    echo json_encode($tagDAO->selectAll(), JSON_NUMERIC_CHECK);
    exit();
});

$app->get('/tags/:id/?', function($id) use ($tagDAO){
    header("Content-Type: application/json");
    echo json_encode($tagDAO->selectById($id), JSON_NUMERIC_CHECK);
    exit();
});

$app->get('/tags/users/:id/?', function($id) use ($tagDAO){
    header("Content-Type: application/json");
    echo json_encode($tagDAO->counttagss($id), JSON_NUMERIC_CHECK);
    exit();
});

// $app->get('/tags/boxes/:box_name/?', function($box_name) use ($tagDAO){
//     header("Content-Type: application/json");
//     echo json_encode($tagDAO->selectByboxName($box_name), JSON_NUMERIC_CHECK);
//     exit();
// });

$app->get('/tags/boxes/:box_id/?', function($box_id) use ($tagDAO){
    header("Content-Type: application/json");
    echo json_encode($tagDAO->selectByboxId($box_id), JSON_NUMERIC_CHECK);
    exit();
});

$app->get('/tags/projects/:project_id/?', function($project_id) use ($tagDAO){
    header("Content-Type: application/json");
    echo json_encode($tagDAO->selectByProjectId($project_id), JSON_NUMERIC_CHECK);
    exit();
});

$app->post('/tags/?', function() use ($app, $tagDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($tagDAO->insert($post), JSON_NUMERIC_CHECK);
    exit();
});

$app->delete('/tags/:id/?', function($id) use ($tagDAO){
    header("Content-Type: application/json");
    echo json_encode($tagDAO->delete($id));
    exit();
});

$app->put('/tags/:id/?', function($id) use ($app, $tagDAO){
    header("Content-Type: application/json");
    $post = $app->request->post();
    if(empty($post)){
        $post = (array) json_decode($app->request()->getBody());
    }
    echo json_encode($tagDAO->update($id, $post), JSON_NUMERIC_CHECK);
    exit();
});