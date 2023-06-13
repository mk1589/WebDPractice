function printDownStar(n){
    var str ="";
    for(var i = 0;i<n;i++){
      
      for(var j = 0;j<n-i;j++){
        str = str + "*";
       
      }
      str += "\n";
    }
    console.log(str);
  }
  printDownStar(5);
  
  
  function printUpStar(n){
    var str ="";
    for(var i = 1;i<=n;i++){
      for(var j = 1;j<=i;j++){
        str = str + "*";
       
      }
      str += "\n";
      
    }
    
    console.log(str);
  }
  printUpStar(5);
  
  function printRightDown(n){
    var str="";
      for(var i = 0;i<n;i++){
      
      for(var j = 0;j<n;j++){
        if(i>j){
          str = str + " ";
        }
        else{
          str = str + "*";
        }
        
       
      }
      str += "\n";
    }
    console.log(str);
  }
  printRightDown(5)
  
  function printRightStar(n){
    var str="";
    for(var i = 1;i<=n;i++){
      
      for(var j = 0;j<n-i;j++){
        str = str + " ";
       
      }
      for(var k = 0;k<i;k++){
        str = str + "*";
        
      }
      str += "\n";
    }
    console.log(str);
  }
  printRightStar(5)
  
  