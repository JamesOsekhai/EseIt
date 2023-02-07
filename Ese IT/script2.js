const u = document.getElementById('u')
let a = document.getElementById('a')
const t = document.getElementById('t')
const ur = document.getElementById('ur')
const ar = document.getElementById('ar')
const tr = document.getElementById('tr')
const vr = document.getElementById('vr')

const btnresult = document.getElementById('vu')

btnresult.addEventListener('click', (e)=>{
    e.preventDefault()
    //a = parseInt(a)
    if(a.value=='' || u.value=='' || t.value==''){
        alert('fill the blank input')
    }else{
        let input1 = parseFloat(u.value)
        let input2 = parseFloat(a.value)
        let input3 = parseFloat(t.value)
        
        // v = u + at
        let v = input1 + (input2*input3)
        
        ur.innerHTML =`U = ${input1}`
        ar.innerHTML =`a = ${input2}`
        tr.innerHTML =`t = ${input3}`
        vr.innerHTML=` v = ${v}m/s`
    }
   
})

const u1 = document.getElementById('u1')
const a1 = document.getElementById('a1')
const t1 = document.getElementById('t1')
const ur1 = document.getElementById('ur1')
const ar1 = document.getElementById('ar1')
const tr1 = document.getElementById('tr1')
const sr = document.getElementById('sr')

const form1 = document.getElementById('sub')
sub.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(a1.value=='' || u1.value=='' || t1.value==''){
        alert('fill the blank input')
    }else{
        let input1 = parseFloat(u1.value)
        let input2 = parseFloat(a1.value)
        let input3 = parseFloat(t1.value)
        //S = Ut + 1/2(at*2)

        let utemp = input1*input3
        let ts = input3*input3

        let s = utemp + (1/2*(input2*ts))
   
        ur1.innerHTML =`U = ${input1}m`
        ar1.innerHTML =`a = ${input1}m/s^2`
        tr1.innerHTML =`t = ${input1}s`

        sr.innerHTML = `S = ${s}m`
    }

    
})


const form2 = document.getElementById('form2')
form2.addEventListener('submit', (e)=>{
    e.preventDefault()
    const u2 = document.getElementById('u2')
    const a2 = document.getElementById('a2')
    const s2 = document.getElementById('s2')
    const ur2 = document.getElementById('ur2')
    const ar2 = document.getElementById('ar2')
    const v2 = document.getElementById('v2')
    const sr2 = document.getElementById('sr2')
    const vr2 = document.getElementById('vr2')

    let input1 = parseFloat(u2.value)
    let input2 = parseFloat(a2.value)
    let input3 = parseFloat(s2.value)

    let utemp = input1*input1
    let temp = 2*(input2*input3)
    let v = utemp + temp

    if(v<0){
        alert('invalid input correct values')
        input1 = ''
        input2 = ''
        input3 = ''
    }else{
        let tired = Math.sqrt(v).toFixed(2)

    ur2.innerHTML = `u = ${input1}m/s`
    ar2.innerHTML = `a = ${input2}m/s^2 `
    sr2.innerHTML = `s = ${input3}m`
    v2.innerHTML = `V^2 = ${v} take the sqaure root`
    
    vr2.innerHTML = `v = ${tired}m/s^2`

    }
    
})

const form3 = document.getElementById('form3')
form3.addEventListener('submit', (e)=>{
    e.preventDefault()
    const m1 = document.getElementById('m1')
    const m2 = document.getElementById('m2')
    const r = document.getElementById('r')
    const m1r = document.getElementById('m1r')
    const m2r = document.getElementById('m2r')
    const rad = document.getElementById('rr')
    const f = document.getElementById('f')

    if(m1.value=='' || m2.value==''  || r.value ==''){
        alert('fill in the blank space')
    }
    else{
        let input1 =parseFloat(m1.value)
    let input2 =parseFloat(m2.value)
    let input3 =parseFloat(r.value)

    let g = 0.00000000006674
    let rr= input3*input3

    let mm = input1*input2
    let mg = g*mm
    let fr = (mg/rr)

    m1r.innerHTML=`m1 = ${input1}kg`
    m2r.innerHTML = `m2 = ${input2}kg`
    rad.innerHTML =`r = ${input3}m,`
    f.innerHTML =`F = ${fr}N`
    }
})