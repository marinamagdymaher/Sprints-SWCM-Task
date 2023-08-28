<?php

require_once MODELS . 'User.php';
require_once ENTITIES . 'UserEntity.php';
class HomeController
{
  public function index()
  {
    $me = new User([
      'name' => 'Marina Magdy',
      'email' => 'marina@gmail.com',
      'city' => 'Assuit',
    ]);
    header('Content-Type: application/json');
    echo json_encode($me);
  }

  public function profile()
  {
    $me = new User([
      'name' => 'Mina Fouad',
      'email' => 'mina@gmail.com',
      'city' => 'Assuit',
      'bio_en' => 'I am a web developer',
      'bio_ar' => 'أنا مطور ويب',
    ]);
    extract(["profile" => $me]);
    require_once VIEWS . 'profile.php';
  }

  public function add($request)
  {
    $user = new User([
      'name' => $request['name'],
      'email' => $request['email'],
      'city' => $request['city'],
    ]);

    $newUser = UserEntity::add($user);

    header('Content-Type: application/json');
    print json_encode($newUser);
  }

  // public function myFriends()
  // {
  //   $fileName = STORAGE . 'my_friends.csv';
  //   $file = fopen($fileName, 'r');
  //   $contents = fread($file, filesize($fileName));
  //   // $friends = json_decode($rFile, true);
  //   $dataArr = explode("\n", $contents);
  //   $friends = [];
  //   foreach ($dataArr as $friend) {
  //     $friendData = explode(',', $friend);
  //     $friends[] = [
  //       'name' => $friendData[0],
  //       'email' => $friendData[1],
  //       'city' => $friendData[2],
  //       'bio_en' => $friendData[3],
  //       'bio_ar' => $friendData[4],
  //     ];
  //   }
  //   var_dump($dataArr);
  //   $newFriend = [
  //     'name' => 'Mahmoud Kassem',
  //     'email' => 'mahmoud@example.com',
  //     'city' => 'Alexandria',
  //     'bio_en' => 'I am a web developer',
  //     'bio_ar' => 'أنا مطور ويب',
  //   ];
  //   array_push($friends, $newFriend);
  //   fwrite($file, $friends);
  //   fclose($file);
  //   header('Content-type: application-json');
  //   echo json_encode($friends);
  // }

  public function myFriends()
  {
    $fileName = STORAGE . 'my_friends.csv';
    $file = fopen($fileName, 'r+'); // open the file
    if (filesize($fileName)) {
      $contents = fread($file, filesize($fileName));
    } else {
      $contents = null;
    }

    // remove the last new line
    $contents = rtrim($contents, "\n");
    $dataArr = $contents == '' ? [] : explode("\n", $contents);

    $friends = [];
    foreach ($dataArr as $friend) {
      $friendData = explode(',', $friend);
      $friends[] = [
        'name' => $friendData[0],
        'email' => $friendData[1],
        'city' => $friendData[2],
        'bio_en' => $friendData[3],
        'bio_ar' => $friendData[4],
      ];
    }

    $newFriend = [
      'name' => 'Mahmoud Kassem',
      'email' => 'mahmoud@example.com',
      'city' => 'Alexandria',
      'bio_en' => 'I am a web developer',
      'bio_ar' => 'أنا مطور ويب',
    ];

    $data = implode(',', $newFriend) . "\n";
    fwrite($file, $data); // write the data
    fclose($file); // close the file

    header('Content-Type: application/json');
    echo json_encode($friends);
  }
}
?>