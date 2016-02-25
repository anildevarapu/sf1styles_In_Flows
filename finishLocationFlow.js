function locationManager(){
	try{
		 var finishLoc = document.getElementById('finishLocation');
		 if(finishLoc){
		 	sobjid = finishLoc.innerHTML;
		 	console.log('sobjid is', sobjid);
		 	window.location.href = '/'+sobjid;
		 }
	}catch(e){
		console.log('Error message is',e);
	}

}

//window.onload = locationManager;
if (window.attachEvent) {window.attachEvent('onload', locationManager);}
else if (window.addEventListener) {window.addEventListener('load', locationManager, false);}
else {document.addEventListener('load', locationManager, false);} 
