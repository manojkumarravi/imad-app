var button=document.getElementById("counter");
button.onclick=function()
  {
      var req=new XMLHttpRequest();
      req.onreadystatechange=function(){
          if(req.DONE)
          {
              if(req.status==200)
              {
                  var count=request.responseText;
                  var span=document.getElementById("count");
                   span.innerHTML=(count+1).toString();
              }
          }
      };
     req.open('GET','https://imad.hasura.io/counter',true);
     req.send(null);
  };