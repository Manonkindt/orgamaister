<?php

require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DAO.php';

class ProjectDAO extends DAO {
    
  public function selectAll() {
    $sql = "SELECT * FROM `projects`";
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }    

	public function selectById($id) {
		$sql = "SELECT * FROM `projects` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		$stmt->execute();
		$result = $stmt->fetch(PDO::FETCH_ASSOC);
		if($result){
			return $result;
		}
		return [];
	}

	public function selectByboxId($box_id) {
		$sql = "SELECT * 
						FROM `projects` 
						WHERE `box_id` = :box_id ORDER BY `id` DESC";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':box_id', $box_id);
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		if($result){
			return $result;
		}
		return [];
	}


	public function selectByName($name) {
		$sql = "SELECT * FROM `projects` WHERE `name` = :name";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':name', $name);
		$stmt->execute();
		$result = $stmt->fetch(PDO::FETCH_ASSOC);
		if($result){
			return $result;
		}
		return [];
	}


	public function delete($id) {
		$sql = "DELETE FROM `projects` WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		return $stmt->execute();
	}

	public function update($id, $data) {
		$errors = $this->getValidationErrors($data);
		if(empty($errors)) {
			$sql = "UPDATE `projects` 
							SET `tags_list` = :tags_list
							WHERE `id` = :id";
			$stmt = $this->pdo->prepare($sql);
			$stmt->bindValue(':tags_list', $data['tags_list']);
			$stmt->bindValue(':id', $id);
			if($stmt->execute()) {
				return $this->selectById($id);
			}
		}
		return false;
	}

	public function insert($data) {
		$errors = $this->getValidationErrors($data);
		if(empty($errors)) {
			$sql = "INSERT INTO `projects` 
							(`name`, `box_id`, `box_name`, `tags_list`) 
							VALUES (:name, :box_id, :box_name, :tags_list)";
			$stmt = $this->pdo->prepare($sql);
			$stmt->bindValue(':name', $data['name']);
			$stmt->bindValue(':box_id', $data['box_id']);
			$stmt->bindValue(':box_name', $data['box_name']);
			$stmt->bindValue(':tags_list', $data['tags_list']);
			if($stmt->execute()) {
				$insertedId = $this->pdo->lastInsertId();
				return $this->selectById($insertedId);
			}
		}
		return false;
	}

	public function getValidationErrors($data) {
		$errors = array();
		if(empty($data['name'])) {
			$errors['name'] = 'field name has no value';
		}
		if(empty($data['tags_list'])) {
			$errors['tags_list'] = 'field tags_list has no value';
		}
		if(!isset($data['box_id'])) {
			$errors['box_id'] = 'field box_id has no value';
		}
		if(empty($data['box_name'])) {
			$errors['box_name'] = 'field box_name has no value';
		}
		return $errors;
	}

}