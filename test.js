<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<title>15_Apply2_javascript_fun</title>
<script type="text/javascript">
cc=0;

function changeimage()
{
if (cc==0) 
  {
  cc=1;
  document.getElementById('after.JPG').src="after.JPG";
  }
else
  {
  cc=0;
  document.getElementById('before.JPG').src="before.JPG";
  }
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('Before.JPG');
    if(mySrc === 'before.JPG') {
      myImage.setAttribute('before.JPG','after.JPG');
    } else {
      myImage.setAttribute('before.JPG','after.JPG');
    }
}

</script>

<style type="text/css">
.auto-style1 {
	text-align: center;
}
</style>

</head>

<body>

<p>&nbsp;</p>
&nbsp;<p class="auto-style1">
<img alt="baby pics" height="266" src="before.JPG" width="400" /></p>
<h1 class="auto-style1">Baby Moment</h1>

</body>

</html>