"use strict";function pushDNAtoDB(n,a){for(var p="a0="+n[0],t=0;t<n.length-1;t++)p+="&a"+(t+1)+"="+n[1+t];for(t=0;t<n.length;t++)p+="&b"+t+"="+a[t];return $.ajax({type:"POST",url:"php/pushDNA.php",data:p,cache:!1,success:function(n){}}),!1}function pushGenSpToDB(){return $.ajax({type:"POST",url:"php/pushGenSp.php",data:"",cache:!1,success:function(n){}}),!1}function pushRatingToDB(n,a,p,t){var u="generalCount="+n+"&gen="+a+"&sp="+(p+idPadding)+"&rating="+t;return $.ajax({type:"POST",url:"php/pushRating.php",data:u,cache:!1,success:function(n){}}),console.log(u),!1}