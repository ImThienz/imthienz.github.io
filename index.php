<?php
    session_start();
    ob_start();

    include "view/header.php";
   
    if(isset($_GET['act'])){
        switch ($_GET['act']) {
            case 'about':
                include "view/about.php";
                break;
                
            case 'home':
                include "view/home.php";
                break;

            default:
                include "view/home.php";
                break;
        }
    } else{
        include "view/home.php";
    }  
    include "view/footer.php";
?>