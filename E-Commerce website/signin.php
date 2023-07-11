<?php
    session_start();
    header('Location:index.html');
    echo "Successfully Logged in";
    $con= mysqli_connect('localhost','root');
    if($con){
        echo "Connection Successfully";
    }   
    else{
        echo "No Connection";
    }
    mysqli_select_db($con,'ecommerce');
    $name= $_POST['email'];
    $pass= $_POST['password'];
    $quer ="select * from userdata where username ='$name' && password = '$pass'";
    $result = mysqli_query($con,$quer);
    $num = mysqli_num_rows($result);
    if($num==1)
    {
        $_SESSION['username'] = $name;
        header('Location:index.html');
        //echo "Duplicate Data";
    }
    else{
       //echo "Invalid Username Or Password";
        header('Location:error.html');
    }
?>