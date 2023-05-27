const CurrFrom = document.querySelector('.curr')
const CurrTo = document.querySelector('.curr2')

let result = document.querySelector('.result')

let input1 = document.querySelector('.amount1')
let input2 = document.querySelector('.amount2')






// get API add from to using next functions

let API =(from , to)=>{


    const APIurl = `https://api.exchangerate.host/convert?from=${from}&to=${to}`

    return APIurl

    
}


// function to get list of currencies



const currencies = async ()=>{

    const res = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')

    const data = await res.json()

    return data
}




// gives back exchange rate of gived currencies



const  exchange  = async (from , to)=>{

    const res = await fetch(API(from , to))

    const data = await res.json()

    let u = data.info.rate

    return   u
}




// render exchange rate to header





let render = async (from , to )=>{

    

let x = await exchange( from , to )

let z = await currencies()







result.innerHTML =`<h4> 1 USD = ${x.toFixed(2)} ${z['mad']}</h4>`


}





// render list in selection from 


const addOptionFrom = async ()=>{

let list = await currencies()




for (const items in list){


    let Kitems = items.toUpperCase()


    CurrFrom.innerHTML += `<Option value="${Kitems}" > ${list[items]} </Option>`
    
}

}


// render list in selection to


const addOptionTo = async ()=>{

    let list = await currencies()
    
  
   
    
    for (const items in list){

    let Bitems = items.toUpperCase()

        CurrTo.innerHTML += `<Option value="${Bitems}" > ${list[items]}  </Option> }`
        
    }
    
}




let  init = async ()=>{

    let money = await currencies()


render('USD', 'MAD')

 addOptionFrom()

  addOptionTo()




}





init()










input1.addEventListener( 'input' ,async ()=>{

let u = await exchange (CurrFrom.value, CurrTo.value)

input2.value = (input1.value * u).toFixed(2)



})





input2.addEventListener('input' ,async ()=>{

    let u = await exchange (CurrFrom.value, CurrTo.value)

input1.value = ( input2.value / u ) .toFixed(2)




})











CurrFrom.addEventListener('change' , async ()=>{

   
    await render(CurrFrom.value, CurrTo.value)

   
    let t = await exchange (CurrFrom.value, CurrTo.value)

    if(t === null){
        alert('no data')
    }

 

    input2.value = (input1.value * t).toFixed(2)

    result.innerHTML =`<h4> 1 ${CurrFrom.value} = ${t.toFixed(2)} ${CurrTo.value}</h4>`

 

   


   
    



})


CurrTo.addEventListener('change' , async ()=>{


    await render(CurrFrom.value, CurrTo.value)


    let p = await exchange (CurrFrom.value, CurrTo.value)

    if(p === null){
        alert('no data')
    }

console.log(p);

    input1.value = ( input2.value / p ) .toFixed(2)

  
    result.innerHTML =`<h4> 1 ${CurrFrom.value} = ${p.toFixed(2)} ${CurrTo.value}</h4>`
    



})