function counting()
{
	var today = new Date();

	var day = today.getDate();
	var month = today.getMonth()+1;
	if(month<10){month="0"+month;}
	var year = today.getFullYear();

	var hour = today.getHours();
	if(hour<10){hour="0"+hour;}
	var minute = today.getMinutes();
	if(minute<10){minute="0"+minute;}
	var second = today.getSeconds();
	if(second<10){second="0"+second;}

	document.getElementById("clock").innerHTML = day+"/"+month+"/"+year+"-"+hour+":"+minute+":"+second;
	document.getElementById("clock").style.color="#ffffff";
	document.getElementById("clock").style.fontSize="20px";
	document.getElementById("clock").style.paddingRight="30px";

	setTimeout("counting()",1000);

	// for appropriate working script needs to get the class not id and iterate over all classess using for() loop
	// it works only because clock is updated all the time (i think)

}