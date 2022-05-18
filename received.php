<?php
		
	//condition that checks if form is filled - if so it runs the php code
	if(isset($_POST["formSubmitted"]))
	{
		//accepting variables (username & password)
		$firstname= $_POST["firstname"];
		$surname= $_POST["surname"];
        $email=$_POST["email"];



        echo('<div style="color:#0569ff; margin-left:200px; margin-right:auto; margin-top:100px;
        font-size:40px; "><b>ThankYou for your response  '.$firstname." ".$surname.
        '<br /><br /><a href="index.html" style="color:#0569ff;">CLICK TO COME BACK TO HOMEPAGE</a></b></div>');


	}

//end of script
?>