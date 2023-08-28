<?php

class UserEntity
{
  public static $users = [];
  public function getAll()
  {
    return $this->users;
  }
  public function get($id)
  {
    return array_filter(
      $this->users,
      function ($user) use ($id) {
        return $user['id'] == $id;
      }
    );
  }

  public static function add($user)
  {
    //get last id
    $lastId = end(UserEntity::$users)['id'] ?? 1;
    $user::$id = $lastId + 1;
    UserEntity::$users[] = $user;
    return $user;
  }
}