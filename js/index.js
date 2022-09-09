

function creat_inp(){
    

    const input = document.createElement("INPUT");
    const br = document.createElement("BR");
    
    // const attribute_name = document.createAttribute("placeholder");
    // attribute_name.value = "enter your name";

    input.setAttribute("placeholder", "hahaha");
    input.setAttribute("class", "my_class");

    // const class_name = document.createAttribute("class");
    // class_name.value = "my_class";

    const inp_name = document.createAttribute("name");
    inp_name.value = "input";

    // input.setAttributeNode(attribute_name)
    // input.setAttributeNode(inp_name)
    // input.setAttributeNode(class_name)
    

    document.body.appendChild(input);
    document.body.appendChild(br);
    document.body.appendChild(br);
}


function myPrank(){
    var demo = document.getElementById('demo').value

    var rashid = document.getElementById('rashid')

    rashid.setAttribute("class", demo);





}



// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }

    var left = 0
    var topik = 0
    
    onkeydown = function(e){
        
        var a = document.getElementById('Ups')

        if(e.key == "ArrowRight"){
            a.style.left = left + "px"
            left += 20
          
        }

        if(e.key == "ArrowLeft"){
            a.style.left = left + "px"
            left -= 20
           
        }

        if(e.key == "ArrowDown"){
            
            a.style.top = topik + "px"
            topik += 20
            
        }

        if(e.key == "ArrowUp"){
            a.style.top = topik + "px"
            topik -= 20
           
        }

    }