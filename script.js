(function(){
        const pictures=["1","2","3","4","5","6"];
        
        var buttons=document.querySelectorAll(".btn");
        var img=document.querySelector(".box");

        let counter=1;

        buttons.forEach(function(button){

                button.addEventListener("click",function(){
                        if(button.classList.contains("btn-left")){
                                counter--;
                                if(counter<1){
                                        counter=pictures.length;
                                }
                                img.style.backgroundSize="cover";
                                img.style.backgroundImage=`url("images/${counter}.jpg")`;
                                
                                
                                
                        }
                        if(button.classList.contains("btn-right")){
                                counter++;
                                if(counter>pictures.length){
                                        counter=1;
                                }
                                img.style.backgroundSize="cover";
                                img.style.backgroundImage=`url("images/${counter}.jpg")`;
                                
                                
                        }
                })
        })
})();