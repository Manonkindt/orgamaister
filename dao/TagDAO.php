<?php

require_once WWW_ROOT . 'dao' . DIRECTORY_SEPARATOR . 'DAO.php';

class TagDAO extends DAO {
	  
	public function selectAll() {
	  $sql = "SELECT * 
	  				FROM `tags`";
	  $stmt = $this->pdo->prepare($sql);
	  $stmt->execute();
	  return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}  

  	public function counttags($box_name) {
  		$sql = "SELECT COUNT(`box_name`) 
  	 		AS `feebackfromstudent` 
  	 		FROM `tags`
			WHERE `box_name`= :box_name";

		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':box_name', $box_name);
		$stmt->execute();
		$result = $stmt->fetch(PDO::FETCH_ASSOC);
		if($result){
			return $result;
		}
		return []; 
  	}

  	public function deleteByProject($project_id) {
		$sql = "DELETE FROM `tags` WHERE `project_id` = :project_id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':project_id', $project_id);
		return $stmt->execute();
	}

	public function deleteByBox($box_id) {
		$sql = "DELETE FROM `tags` WHERE `box_id` = :box_id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':box_id', $box_id);
		return $stmt->execute();
	}

	public function selectById($id) {
		$sql = "SELECT * 
						FROM `tags` 
						WHERE `id` = :id";
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
						FROM `tags` 
						WHERE `box_id` = :box_id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':box_id', $box_id);
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		if($result){
			return $result;
		}
		return [];
	}

	public function selectByProjectId($project_id) {
		$sql = "SELECT * 
						FROM `tags` 
						WHERE `project_id` = :project_id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':project_id', $project_id);
		$stmt->execute();
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		if($result){
			return $result;
		}
		return [];
	}

	public function delete($id) {
		$sql = "DELETE 
						FROM `tags` 
						WHERE `id` = :id";
		$stmt = $this->pdo->prepare($sql);
		$stmt->bindValue(':id', $id);
		return $stmt->execute();
	}

	public function update($id, $data) {
		$errors = $this->getValidationErrors($data);
		if(empty($errors)) {
			$sql = "UPDATE `tags` 
							SET `box_name` = :box_name, 
									`tag` = :tag,
									`box_id` = :box_id,
									`project_id` = :project_id,
									`project_name` =:project_name
							WHERE `id` = :id";
			$stmt = $this->pdo->prepare($sql);
			$stmt->bindValue(':box_name', $data['box_name']);
			$stmt->bindValue(':box_id', $data['box_id']);
			$stmt->bindValue(':project_name', $data['project_name']);
			$stmt->bindValue(':project_id', $data['project_id']);
			$stmt->bindValue(':tag', $data['tag']);
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
			$sql = "INSERT INTO `tags` (`box_name`, `tag`, `box_id`, `project_name`, `project_id`) 
							VALUES (:box_name, :tag, :box_id, :project_name, :project_id)";
			$stmt = $this->pdo->prepare($sql);
			$stmt->bindValue(':box_name', $data['box_name']);
			$stmt->bindValue(':box_id', $data['box_id']);
			$stmt->bindValue(':project_name', $data['project_name']);
			$stmt->bindValue(':project_id', $data['project_id']);
			$stmt->bindValue(':tag', $data['tag']);
			if($stmt->execute()) {
				$insertedId = $this->pdo->lastInsertId();
				return $this->selectById($insertedId);
			}
		}
		return false;
	}

	public function getValidationErrors($data) {
		$errors = array();
		if(!isset($data['box_name'])) {
			$errors['box_name'] = 'field box_name has no value';
		}
		if(!isset($data['box_id'])) {
			$errors['box_id'] = 'field box_id has no value';
		}
		if(!isset($data['project_id'])) {
			$errors['project_id'] = 'field project_id has no value';
		}
		if(empty($data['project_name'])) {
			$errors['project_name'] = 'field project_name has no value';
		}
		if(empty($data['tag'])) {
			$errors['tag'] = 'field tag has no value';
		}
		return $errors;
	}

}