<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");




include 'Db.php';
$objDb=new DbConnect;
$conn=$objDb->connect();
$method=$_SERVER['REQUEST_METHOD'];
switch($method){
    case "GET":
        $sql="SELECT * FROM operations ";
        
       $path= explode('/', $_SERVER['REQUEST_URI']); 


    //    print_r($path);
       if(isset($path[4]) && is_numeric($path[4])) {
        $sql.="WHERE id=:id;";
        $stmt=$conn->prepare($sql);
        $stmt->bindParam(':id', $path[4]);
       $stmt->execute();
        $users=$stmt->fetch(PDO::FETCH_ASSOC);
     } else{
        $stmt=$conn->prepare($sql);
        $stmt->execute();
        $users=$stmt->fetchAll(PDO::FETCH_ASSOC);
     }
       
        echo json_encode($users);
        break;

    case "POST":
$user=json_decode(file_get_contents('php://input'));
$sql="INSERT INTO operations(id,name,email,mobile)VALUES(null,:name,:email,:mobile)";
$stmt=$conn->prepare($sql);
$stmt->bindParam(':name', $user->name);
$stmt->bindParam(':email', $user->email);
$stmt->bindParam(':mobile', $user->mobile);
if($stmt->execute()) {
    $response = ['status' => 1, 'message' => 'Record created successfully.'];
} else {
    $response = ['status' => 0, 'message' => 'Failed to create record.'];
}
echo json_encode($response);
break;
case "PUT":
    $user=json_decode(file_get_contents('php://input'));
    $sql="UPDATE operations SET name=:name,email=:email,mobile=:mobile WHERE id=:id";
    $stmt=$conn->prepare($sql);
    $stmt->bindParam(':id', $user->id);
    $stmt->bindParam(':name', $user->name);

    $stmt->bindParam(':email', $user->email);
    $stmt->bindParam(':mobile', $user->mobile);
    if($stmt->execute()) {
        $response = ['status' => 1, 'message' => 'Record updated successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to update record.'];
    }
    echo json_encode($response);
    break;
case "DELETE" :
    $sql="DELETE  FROM `operations` WHERE id=:id";
        
       $path= explode('/', $_SERVER['REQUEST_URI']); 


 
      
      
        $stmt=$conn->prepare($sql);
        $stmt->bindParam(':id', $path[4]);
   
       if($stmt->execute()) {
        $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to deleted record.'];
    }
    echo json_encode($response);
    break;
     

}
?>