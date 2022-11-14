const game = ()=>{
    ingresarNumero().then((resp)=>{
        alert(`La pc saco el número: ${resp.pcNumber} tu sacaste: ${resp.playerNumber} por lo tanto tus puntos son: ${resp.puntos}`)
        seguirJugando().then((resp)=>{
            if(resp){
                game()
            }
            else{
                alert('GRACIAS POR JUGAR')
                return 0
            }
        })
    }).catch(err=>{
        alert(err)
        seguirJugando().then((resp)=>{
            if(resp){
                game()
            }
            else{
                alert('GRACIAS POR JUGAR')
                return 0
            }
        })
    })
}
const seguirJugando = ()=>{
    return new Promise((resolve,reject)=>{
        if(confirm("¿Desea seguir jugando?")){
            resolve(true)
        }
        else{
            resolve(false)
        }
    })
}
const ingresarNumero = () =>{
    return new Promise((resolve,reject)=>{
        let playerNumber = parseInt(prompt("Ingrese un número que este dentro del 1 al 6: "));
        let pcNumber = parseInt((Math.random() * 6)+1); 

        if (isNaN(playerNumber) || (playerNumber>6 || playerNumber<=0)){
            reject(new Error("Se debe ingresar un número válido"))
        }
        if(playerNumber===pcNumber){
            resolve({
                puntos:2,
                playerNumber,
                pcNumber
            })
        }
        else if(playerNumber ===  pcNumber-1 || playerNumber == pcNumber+1){
            resolve({
                puntos:1,
                playerNumber,
                pcNumber
            })
        }
        else{
            resolve({
                puntos:0,
                playerNumber,
                pcNumber
            })
        }

    })
}
game()