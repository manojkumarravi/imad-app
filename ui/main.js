var button=document.getElementById("counter");
var count=0;
button.onclick=function()
  {
      var req=new XMLHttpRequest();
      req.onreadystatechange=function(){
          if(req.DONE)
          {
              if(req.status==200)
              {
                  var counter=request.responseText;
                  var span=document.getElementById("count");
                   span.innerHTML=count.toString();
              }
          }
      };
     req.open('GET','https://imad.hasura.io/counter',true);
  };