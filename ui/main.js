var button=document.getElementById('counter');
button.onclick=function()
  {
      var req=new XMLHttpRequest();
      req.onreadystatechange=function(){
          if(req.readyState==XMLHttpRequest.DONE)
          {
              if(req.status==200)
              {
                  var counter=request.responseText;
                  var span=document.getElementById('count');
                   span.innerHTML=counter.toString();
              }
          }
      };
     req.open('GET','http://thekingmanoj123.imad.hasura-app.io',true);
     req.send(null);
  };