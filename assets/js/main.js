let tom1 = document.querySelector('.tom1');
let tom2 = document.querySelector('.tom2');
let caixa = document.querySelector('.caixa');
let surdo = document.querySelector('.surdo');
let bumbo = document.querySelector('.bumbo');
let crash1 = document.querySelector('.crash1');
let crash2 = document.querySelector('.crash2');
let hithatopen = document.querySelector('.hithatopen');
let hithatclosed = document.querySelector('.hithatclosed');


tom1.onmousedown = () => {
    tom1.style.width = '105px'
    tom1.style.height = '105px'
    tom1.style.top = '69px'
    tom1.style.left = '179px'
    tom1.innerHTML = `
    <audio id="soundTom1" src="./assets/sounds/FORRO-TOM1.wav"></audio>
    `
    document.getElementById('soundTom1').play()
}
tom2.onmousedown = () => {
    tom2.style.width = '130px'
    tom2.style.height = '130px'
    tom2.style.top = '59px'
    tom2.style.left = '289px'
    tom2.innerHTML = `
    <audio id="soundTom2" src="./assets/sounds/FORRO-TOM2.wav"></audio>
    `
    document.getElementById('soundTom2').play()
}
caixa.onmousedown = () => {
    caixa.style.width = '140px'
    caixa.style.height = '140px'
    caixa.style.top = '144px'
    caixa.style.left = '169px'
    caixa.innerHTML = `
    <audio id="soundCaixa" src="./assets/sounds/FORRO-CAIXA.wav"></audio>
    `
    document.getElementById('soundCaixa').play()
}
surdo.onmousedown = () => {
    surdo.style.width = '155px'
    surdo.style.height = '155px'
    surdo.style.top = '144px'
    surdo.style.left = '369px'
    surdo.innerHTML = `
    <audio id="soundSurdo" src="./assets/sounds/FORRO-SURDO.wav"></audio>
    `
    document.getElementById('soundSurdo').play()
}
bumbo.onmousedown = () => {
    bumbo.style.width = '184px'
    bumbo.style.height = '184px'
    bumbo.style.top = '139px'
    bumbo.style.left = '234px'
    bumbo.innerHTML = `
    <audio id="soundBumbo" src="./assets/sounds/FORRO-BUMBO.wav"></audio>
    `
    document.getElementById('soundBumbo').play()
}

crash1.onmousedown = () => {
    crash1.style.width = '160px'
    crash1.style.height = '155px'
    crash1.style.top = '-1px'
    crash1.style.left = '399px'
    crash1.innerHTML = `
    <audio id="soundCrash1" src="./assets/sounds/FORRO-PRATO-ATAQUE.wav"></audio>
    `
    document.getElementById('soundCrash1').play()
}

crash2.onmousedown = () => {
    crash2.style.width = '155px'
    crash2.style.height = '155px'
    crash2.style.top = '-57px'
    crash2.style.left = '199px'
    crash2.innerHTML = `
    <audio id="soundCrash2" src="./assets/sounds/FORRO-PRATO-ATAQUE2.wav"></audio>
    `
    document.getElementById('soundCrash2').play()
}

hithatclosed.onmousedown = () => {
    hithatclosed.style.width = '123px'
    hithatclosed.style.height = '121px'
    hithatclosed.style.top = '88px'
    hithatclosed.style.left = '79px'
    hithatclosed.innerHTML = `
    <audio id="soundhithatclosed" src="./assets/sounds/FORRO-CHIMBAL.wav"></audio>
    `
    document.getElementById('soundhithatclosed').play()
}

hithatopen.onmousedown = () => {
    hithatopen.style.width = '132px'
    hithatopen.style.height = '132px'
    hithatopen.style.top = '143px'
    hithatopen.style.left = '42px'
    hithatopen.innerHTML = `
    <audio id="soundhithithatopen" src="./assets/sounds/FORRO-CHIMBAL-ABERTO.wav"></audio>
    `
    document.getElementById('soundhithithatopen').play()
}

tom1.onmouseup = () => {
    tom1.style.width = '100px'
    tom1.style.height = '100px'
    tom1.style.top = '70px'
    tom1.style.left = '180px'
    
}
tom2.onmouseup = () => {
    tom2.style.width = '125px'
    tom2.style.height = '125px'
    tom2.style.top = '60px'
    tom2.style.left = '290px'
   
}
caixa.onmouseup = () => {
    caixa.style.width = '135px'
    caixa.style.height = '135px'
    caixa.style.top = '145px'
    caixa.style.left = '170px'
    
}
surdo.onmouseup = () => {
    surdo.style.width = '150px'
    surdo.style.height = '150px'
    surdo.style.top = '145px'
    surdo.style.left = '370px'
    
}
bumbo.onmouseup = () => {
    bumbo.style.width = '179px'
    bumbo.style.height = '179px'
    bumbo.style.top = '140px'
    bumbo.style.left = '235px'
    
}

crash1.onmouseup = () => {
    crash1.style.width = '155px'
    crash1.style.height = '150px'
    crash1.style.top = '0px'
    crash1.style.left = '400px'
}

crash2.onmouseup = () => {
    crash2.style.width = '150px'
    crash2.style.height = '150px'
    crash2.style.top = '-56px'
    crash2.style.left = '200px'
}

hithatclosed.onmouseup = () => {
    hithatclosed.style.width = '118px'
    hithatclosed.style.height = '116px'
    hithatclosed.style.top = '89px'
    hithatclosed.style.left = '80px'
}

hithatopen.onmouseup = () => {
    hithatopen.style.width = '127px'
    hithatopen.style.height = '127px'
    hithatopen.style.top = '144px'
    hithatopen.style.left = '43px'
}

tom1.ontouchstart = () => {
    tom1.style.width = '105px'
    tom1.style.height = '105px'
    tom1.style.top = '69px'
    tom1.style.left = '179px'
}
tom2.ontouchstart = () => {
    tom2.style.width = '130px'
    tom2.style.height = '130px'
    tom2.style.top = '59px'
    tom2.style.left = '289px'
}
caixa.ontouchstart = () => {
    caixa.style.width = '140px'
    caixa.style.height = '140px'
    caixa.style.top = '144px'
    caixa.style.left = '169px'
}
surdo.ontouchstart = () => {
    surdo.style.width = '155px'
    surdo.style.height = '155px'
    surdo.style.top = '144px'
    surdo.style.left = '369px'
}
bumbo.ontouchstart = () => {
    bumbo.style.width = '184px'
    bumbo.style.height = '184px'
    bumbo.style.top = '139px'
    bumbo.style.left = '234px'
}

crash1.ontouchstart = () => {
    crash1.style.width = '160px'
    crash1.style.height = '155px'
    crash1.style.top = '-1px'
    crash1.style.left = '399px'
}

crash2.ontouchstart = () => {
    crash2.style.width = '155px'
    crash2.style.height = '155px'
    crash2.style.top = '-57px'
    crash2.style.left = '199px'
}

hithatclosed.ontouchstart = () => {
    hithatclosed.style.width = '123px'
    hithatclosed.style.height = '121px'
    hithatclosed.style.top = '88px'
    hithatclosed.style.left = '79px'
}

hithatopen.ontouchstart = () => {
    hithatopen.style.width = '132px'
    hithatopen.style.height = '132px'
    hithatopen.style.top = '143px'
    hithatopen.style.left = '42px'
}

tom1.ontouchend = () => {
    tom1.style.width = '100px'
    tom1.style.height = '100px'
    tom1.style.top = '70px'
    tom1.style.left = '180px'
    
}
tom2.ontouchend = () => {
    tom2.style.width = '125px'
    tom2.style.height = '125px'
    tom2.style.top = '60px'
    tom2.style.left = '290px'
   
}
caixa.ontouchend = () => {
    caixa.style.width = '135px'
    caixa.style.height = '135px'
    caixa.style.top = '145px'
    caixa.style.left = '170px'
    
}
surdo.ontouchend = () => {
    surdo.style.width = '150px'
    surdo.style.height = '150px'
    surdo.style.top = '145px'
    surdo.style.left = '370px'
    
}
bumbo.ontouchend = () => {
    bumbo.style.width = '179px'
    bumbo.style.height = '179px'
    bumbo.style.top = '140px'
    bumbo.style.left = '235px'
    
}

crash1.ontouchend = () => {
    crash1.style.width = '155px'
    crash1.style.height = '150px'
    crash1.style.top = '0px'
    crash1.style.left = '400px'
}

crash2.ontouchend = () => {
    crash2.style.width = '150px'
    crash2.style.height = '150px'
    crash2.style.top = '-56px'
    crash2.style.left = '200px'
}

hithatclosed.ontouchend = () => {
    hithatclosed.style.width = '118px'
    hithatclosed.style.height = '116px'
    hithatclosed.style.top = '89px'
    hithatclosed.style.left = '80px'
}

hithatopen.ontouchend = () => {
    hithatopen.style.width = '127px'
    hithatopen.style.height = '127px'
    hithatopen.style.top = '144px'
    hithatopen.style.left = '43px'
}

window.addEventListener("keydown", (e) =>{
    console.log(e.keyCode)
    switch(e.keyCode){
        case 67:
        case 86:
            bumbo.style.width = '184px'
            bumbo.style.height = '184px'
            bumbo.style.top = '139px'
            bumbo.style.left = '234px'
            bumbo.innerHTML = `
            <audio id="soundBumbo" src="./assets/sounds/FORRO-BUMBO.wav"></audio>
            `
            document.getElementById('soundBumbo').play()
        break;
        case 68:
        case 70:
            caixa.style.width = '140px'
            caixa.style.height = '140px'
            caixa.style.top = '144px'
            caixa.style.left = '169px'
            caixa.innerHTML = `
            <audio id="soundCaixa" src="./assets/sounds/FORRO-CAIXA.wav"></audio>
            `
            document.getElementById('soundCaixa').play()
        break;
        case 69:
        case 82:
            tom1.style.width = '105px'
            tom1.style.height = '105px'
            tom1.style.top = '69px'
            tom1.style.left = '179px'
            tom1.innerHTML = `
            <audio id="soundTom1" src="./assets/sounds/FORRO-TOM1.wav"></audio>
            `
            document.getElementById('soundTom1').play()
        break;   
        case 84:
        case 89:
            tom2.style.width = '130px'
            tom2.style.height = '130px'
            tom2.style.top = '59px'
            tom2.style.left = '289px'
            tom2.innerHTML = `
            <audio id="soundTom2" src="./assets/sounds/FORRO-TOM2.wav"></audio>
            `
            document.getElementById('soundTom2').play()
        break;   
        case 71:
        case 72:
            surdo.style.width = '155px'
            surdo.style.height = '155px'
            surdo.style.top = '144px'
            surdo.style.left = '369px'
            surdo.innerHTML = `
            <audio id="soundSurdo" src="./assets/sounds/FORRO-SURDO.wav"></audio>
            `
            document.getElementById('soundSurdo').play()
        break;   
        case 83:
        case 65:
            hithatclosed.style.width = '123px'
            hithatclosed.style.height = '121px'
            hithatclosed.style.top = '88px'
            hithatclosed.style.left = '79px'
            hithatclosed.innerHTML = `
            <audio id="soundhithatclosed" src="./assets/sounds/FORRO-CHIMBAL.wav"></audio>
            `
            document.getElementById('soundhithatclosed').play()
        break;   
        case 90:
        case 88:
            hithatopen.style.width = '132px'
            hithatopen.style.height = '132px'
            hithatopen.style.top = '143px'
            hithatopen.style.left = '42px'
            hithatopen.innerHTML = `
            <audio id="soundhithithatopen" src="./assets/sounds/FORRO-CHIMBAL-ABERTO.wav"></audio>
            `
            document.getElementById('soundhithithatopen').play()
        break;   
        case 81:
        case 87:
            crash1.style.width = '160px'
            crash1.style.height = '155px'
            crash1.style.top = '-1px'
            crash1.style.left = '399px'
            crash1.innerHTML = `
            <audio id="soundCrash1" src="./assets/sounds/FORRO-PRATO-ATAQUE.wav"></audio>
            `
            document.getElementById('soundCrash1').play()
        break;   
        case 85:
        case 73:
            crash2.style.width = '155px'
            crash2.style.height = '155px'
            crash2.style.top = '-57px'
            crash2.style.left = '199px'
            crash2.innerHTML = `
            <audio id="soundCrash2" src="./assets/sounds/FORRO-PRATO-ATAQUE2.wav"></audio>
            `
            document.getElementById('soundCrash2').play()
        break;   
    }
})
window.addEventListener("keyup", (e)=>{
    switch(e.keyCode){
        case 67:
        case 86:
            bumbo.style.width = '179px'
            bumbo.style.height = '179px'
            bumbo.style.top = '140px'
            bumbo.style.left = '235px'
        break;
        case 68:
        case 70:
            caixa.style.width = '135px'
            caixa.style.height = '135px'
            caixa.style.top = '145px'
            caixa.style.left = '170px'
        break;
        case 69:
        case 82:
            tom1.style.width = '100px'
            tom1.style.height = '100px'
            tom1.style.top = '70px'
            tom1.style.left = '180px'
        break;   
        case 84:
        case 89:
            tom2.style.width = '125px'
            tom2.style.height = '125px'
            tom2.style.top = '60px'
            tom2.style.left = '290px'
        break;   
        case 71:
        case 72:
            surdo.style.width = '150px'
            surdo.style.height = '150px'
            surdo.style.top = '145px'
            surdo.style.left = '370px'
        break;   
        case 81:
        case 87:
            crash1.style.width = '155px'
            crash1.style.height = '150px'
            crash1.style.top = '0px'
            crash1.style.left = '400px'
        break;
        case 85:
        case 73:
            crash2.style.width = '150px'
            crash2.style.height = '150px'
            crash2.style.top = '-56px'
            crash2.style.left = '200px'
        break;   
        case 83:
        case 65:
            hithatclosed.style.width = '118px'
            hithatclosed.style.height = '116px'
            hithatclosed.style.top = '89px'
            hithatclosed.style.left = '80px'
        break;   
        case 90:
        case 88:
            hithatopen.style.width = '127px'
            hithatopen.style.height = '127px'
            hithatopen.style.top = '144px'
            hithatopen.style.left = '43px'
        break;   
    }
})


