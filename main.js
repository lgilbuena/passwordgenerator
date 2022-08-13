function generateRandom(limit){
    return Math.floor(Math.random()*limit)
}
function makePassword(){
    let password = "";
    const lletters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const uletters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const numbers = ['1','2','3','4','5','6','7','8','9','0']
    const special = [' ','!','\"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','~','{','|','}','`']
    const types = ['let','num','spec']
    var select = document.getElementById('num')
    var value = select.options[select.selectedIndex].value //number of chars
    

    var llet = false
    var ulet = false
    var num = false
    var spec = false
    var boxes = 0
    if(document.getElementById('lletters').checked){
        boxes += 1
        llet = true
    }
    if(document.getElementById('uletters').checked){
        boxes += 1
        ulet = true
    }
    if(document.getElementById('numbers').checked){
        boxes += 1
        num = true
    }
    if(document.getElementById('specials').checked){
        boxes += 1
        spec = true
    }

    while(value != 0){
        if (boxes == 1){
            if (llet == true){
                password += lletters[Math.floor(Math.random()*lletters.length)]
            }
            else if (ulet == true){
                password += uletters[Math.floor(Math.random()*lletters.length)]
            }
            else if (num == true){
                password += numbers[Math.floor(Math.random()*numbers.length)]
            }
            else if (spec == true){
                password += special[Math.floor(Math.random()*special.length)]
            }
        }

        else if(boxes == 2){
            if (llet == true && ulet == true){
                if (generateRandom(2)==0){
                    password += lletters[Math.floor(Math.random()*lletters.length)]

                }
                else{
                    password += uletters[Math.floor(Math.random()*lletters.length)]
                }
            }

            else if (llet == true && num == true){
                if (generateRandom(2)==0){
                    password += lletters[Math.floor(Math.random()*lletters.length)]

                }
                else{
                    password += numbers[Math.floor(Math.random()*numbers.length)]
                }
            }

            else if (llet == true && spec == true){
                if (generateRandom(2)==0){
                    password += lletters[Math.floor(Math.random()*lletters.length)]

                }
                else{
                    password += special[Math.floor(Math.random()*special.length)]
                }                
            }

            else if (ulet == true && num == true){
                if (generateRandom(2)==0){
                    password += uletters[Math.floor(Math.random()*lletters.length)]

                }
                else{
                    password += numbers[Math.floor(Math.random()*numbers.length)]
                }                
            }

            else if (ulet == true && spec == true){
                if (generateRandom(2)==0){
                    password += uletters[Math.floor(Math.random()*lletters.length)]

                }
                else{
                    password += special[Math.floor(Math.random()*special.length)]
                }                
            }

            else if (spec == true && num == true){
                if (generateRandom(2)==0){
                    password += special[Math.floor(Math.random()*special.length)]

                }
                else{
                    password += numbers[Math.floor(Math.random()*numbers.length)]
                }                
            }
        }

        else if(boxes == 3){
            var rando = generateRandom(3)
            if (llet == true && ulet == true && num == true){
                if (rando == 0){
                    password += lletters[Math.floor(Math.random()*lletters.length)]
                }
                else if (rando == 1){
                    password += uletters[Math.floor(Math.random()*uletters.length)]
                }
                else{
                    password += numbers[Math.floor(Math.random()*numbers.length)]
                }
            }

            else if (spec == true && ulet == true && num == true){
                if (rando == 0){
                    password += special[Math.floor(Math.random()*special.length)]
                }
                else if (rando == 1){
                    password += uletters[Math.floor(Math.random()*uletters.length)]
                }
                else{
                    password += numbers[Math.floor(Math.random()*numbers.length)]
                }
            }

            else if (spec == true && llet == true && num == true){
                if (rando == 0){
                    password += special[Math.floor(Math.random()*special.length)]
                }
                else if (rando == 1){
                    password += lletters[Math.floor(Math.random()*lletters.length)]
                }
                else{
                    password += numbers[Math.floor(Math.random()*numbers.length)]
                }
            } 

            else if (spec == true && llet == true && ulet == true){
                if (rando == 0){
                    password += special[Math.floor(Math.random()*special.length)]
                }
                else if (rando == 1){
                    password += lletters[Math.floor(Math.random()*lletters.length)]
                }
                else{
                    password += uletters[Math.floor(Math.random()*uletters.length)]
                }
            } 

        }

        else{
            var rando = generateRandom(4)
            if (rando == 0){
                password += lletters[Math.floor(Math.random()*lletters.length)]
            }
            else if (rando == 1){
                password += uletters[Math.floor(Math.random()*uletters.length)]
            }
            else if (rando == 2){
                password += numbers[Math.floor(Math.random()*numbers.length)]
            }
            else if(rando == 3){
                password += special[Math.floor(Math.random()*special.length)]
            }
        }

        value = value - 1
    }


    
    document.getElementById("genmerated").value = password
}
function help(){
    alert('Hello World!')
}
function onClickCopy(){
    var copyText = document.getElementById("genmerated");
    if(copyText.value==""){
        alert("You must generate a password first!")
    }
    else{
       
        copyToClipboard(copyText.value)
    }
    
    
}
function copyToClipboard(text){
    
    navigator.clipboard.writeText(String(text)).then(()=>{
        alert("Copied!");
    }
    )
  
    
}
