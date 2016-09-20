window.onload = function()
{
    

console.log(Math.floor(Math.random() * 1200) + 1);

    
var dodge = document.getElementsByClassName("Dodge");
for (var i = 0; i < dodge.length; i++)
    {
        dodge[i].addEventListener('mouseover', function(dodging)
            {    
                var number1 = Math.floor(Math.random() * 400) + 1;  
                var number2 = Math.floor(Math.random() * 1200) + 100;
                var number3 = Math.floor(Math.random() * 1200) + 100;
                
                this.style.paddingTop=number1;
                this.style.paddingLeft=number2;
                this.style.paddingRight=number3;
                //console.log(dodging);
            }                         
                                 
                                 )
    }
    
}


