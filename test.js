
const ul = document.querySelector('.data')
const day = document.querySelector('.d')
const svday = document.querySelector('.sd')

const btn = document.querySelector('#btc')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const btn6 = document.querySelector('.btn6')
const btn7 = document.querySelector('.btn7')
const btn8 = document.querySelector('.btn8')
const btnsrc = document.querySelector('.contract')
const dltBtn = document.querySelector('.dellet')

const contenteOne = document.querySelector('.sectionOne')
const sec = document.querySelector('.secOne')

const contenteTwo = document.querySelector('.sectionTwo')
const sec2 = document.querySelector('.secTwo')

const contenteTree = document.querySelector('.sectionTree')
const sec3 = document.querySelector('.secTree')

const contenteFor = document.querySelector('.sectionFor')
const sec4 = document.querySelector('.secFor')


const contenteFive = document.querySelector('.sectionFive')
const sec5 = document.querySelector('.secFive')

const contenteSix = document.querySelector('.sectionSix')
const sec6 = document.querySelector('.secSix')

const contenteSev = document.querySelector('.sectionSev')
const sec7 = document.querySelector('.secSev')

const contenteEyt = document.querySelector('.sectionEyt')
const sec8 = document.querySelector('.secEyt')




const eventInput = document.querySelector('.AddInput')
const cInput = document.querySelector('.contractInput')
const Creator = document.querySelector('.contractMaker')
const walletadd = document.querySelector('.wallet')
const sCode = document.querySelector('.srcCode')

const divSrc = document.querySelector('.code')









const EthScanKei = 'DITRE32XMPXSYJQKIHT6PAYSNF1HTVNK6X'

const EthPlorerKei = 'EK-dMDZV-cJz55yh-ujQhq'



const newT = async () =>{
   


   const res = await fetch(`https://api.ethplorer.io/getTokensNew?apiKey=${EthPlorerKei}`)

   const data = await res.json()


   
     
   
       data.forEach(function(token){
   
   
         let names = token.name
   
         let TokenMintCount = token.issuancesCount
   
         let twitterAcc = token.twitter
   
         let website = token.website
   
         let symbol1 = token.symbol
   
         let dateMinted = token.added
   
         let address = token.address
   
         let holders = token .holdersCount
   
         let supply = token.totalSupply
   
         let price = token.price
   
         let TDrate = price.rate
   
         let dayDiff = price.diff
   
         let sevenDayDiff = price.diff7d
   
         let marketCap = price.marketCapUsd
   
         let volumeDay = price.volume24h
   
         let priceLastUpdate = price.ts
   
   
         const isssueDateUNIX = dateMinted*1000
         const lastPriceUpdateUNIX = priceLastUpdate*1000
   
         const issuedataObject = new Date(isssueDateUNIX)
         const lastUpdateObject = new Date(lastPriceUpdateUNIX)
   
   
         const ReadIssueDate = issuedataObject.toLocaleString()
         const ReadLastUpdate = lastUpdateObject.toLocaleString()
   
   
   
         
   
   
         let list = `
         
         <section class="hhr">
         
         

         <li style="font-size:3rem;color:#adb5bd;" >${names} </li>
   
         <li  style="background-color:darkred;color:#caf0f8;">Date Launched: ${ReadIssueDate} </li>
   
         <li style="font-size:1.5rem" >$${symbol1} </li>
   
         <li class="addr" >Contract: ${address} </li>
   
         <li>Holders: ${holders} </li>
   
         <li>Market Cap: ${marketCap} </li>
   
         <li class="price" >Price: ${TDrate} &nbsp$ </li>
   
         <li>Lat time Price Update: ${ReadLastUpdate} </li>
   
         <li>Times Token Minted: ${TokenMintCount} </li>
   
   
         <li>Tottal Supply: ${supply} </li>
   
   
         <li class="d" > 1Day %: 	&#11021; ${dayDiff}  </li>
         <li class="sd" >  7Day %: 	&#11021; ${sevenDayDiff}  </li>
       
   
         <li>Volume Today: ${volumeDay} </li>
   
         <li>Twitter Account: ${twitterAcc} &#10146; Link: <a href="https://twitter.com/${twitterAcc}" > Click </a> </li>
   
         <li>Website: ${website} &#10146; Link:  <a href="${website}" >  Website Link </a> </li>
   
   
   
         </section>
   
   
   
         
         
   `
         
         ul.style.height="3500px"
         ul.style.overflow="scroll"
         ul.innerHTML += list 


         return list
   
   
       })
   
      }
   
   



  const init = async ()=>{

  
  newT()
 
  
  
  }




  init()












  btn1.addEventListener('click', async () => {
   let input1 = eventInput.value;
 
   try {
     const response = await fetch(`https://api.etherscan.io/api?module=account&action=tokentx&address=${input1}&page=1&offset=100&startblock=0&endblock=27025780&sort=desc&apikey=${EthScanKei}`);
     const data = await response.json();
     console.log(data);
 
     let dataArray1 = data.result;
 
     dataArray1.forEach(function(y){
       let sender = y.from;
       let contractAdd = y.contractAddress;
       let reciever = y.to;
       let token = y.tokenName;
       let value = y.value;
 
       let laiha = `
         <ul>
           <h2> History Log==> </h2>
           <li>Sender : ${sender} </li>
           <li> Contract : ${contractAdd}  </li>
           <li> Receiver : ${reciever} </li>
           <li> Token : ${token} </li>
           <li> Amount : ${value}  </li>
         </ul>
         <div>
           <hr><hr>
         </div>
       `;
 
       contenteOne.style.visibility="hidden";
       contenteOne.style.height='0px';
       sec.style.height= "500px";
       sec.innerHTML+=laiha;
     });
   } catch (error) {
     console.error(error);
   }
 });
 








btn2.addEventListener('click', async ()=>{
  

   let contractInput = cInput.value

   const response = await fetch(`https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=${contractInput}&page=1&offset=100&startblock=0&endblock=27025780&sort=desc&apikey=${EthScanKei}`)

   const data = await response.json();

   console.log(data);  
   
   let dataArray2 = data.result

      dataArray2.forEach(function(y){


         let sender = y.from
         let contractAdd = y.contractAddress
         let reciever = y.to
         let token = y.tokenName
         let symbol= y.tokenSymbol
         let value = y.value







   let laiha2 = `

   
<ul>


        

   <li>Sender : ${sender} </li>
   <li> Contract : ${contractAdd}  </li>
   <li> Receiver : ${reciever} </li>
   <li> Token : ${token} </li>
   <li> Symbol : ${symbol}  </li>
   <li> Amount : ${value}  </li>




</ul>    
<div>
<hr><hr>
</div>
   
   `
contenteTwo.style.visibility="hidden"
contenteTwo.style.height='0px'
sec2.style.height= "500px"
sec2.innerHTML+=laiha2



        



      })
      






   }



   )



   









btn3.addEventListener('click',async ()=>{

   let maker = Creator.value
  

   const response = await fetch(`https://api.etherscan.io/api?module=contract&action=getcontractcreation&contractaddresses=${maker}&apikey=${EthScanKei}`)


   const data = await response.json();

   console.log(data);

   let dataArray3 = data.result


      dataArray3.forEach(function(y){


        
         let molchi = y.contractCreator
         let reci = y.txHash
       






   let laiha3 = `

   
<ul>


        

   <li>Creator : ${molchi} </li>
   <li  >TxHash : ${reci}  </li>

 



</ul>    
<div>
<hr><hr>
</div>
   
   `
   contenteTree.style.visibility="hidden"
   contenteTree.style.height='0px'

sec3.innerHTML+=laiha3

     

    })

   











   })



   









btn4.addEventListener('click', async()=>{
  

   const response = await fetch(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${EthScanKei}`)


   const data = await response.json();

   console.log(data);

      let dataArray4 = data.result


    

      let fastGas = dataArray4.FastGasPrice
      let Gas = dataArray4.ProposeGasPrice
      let minGas = dataArray4.SafeGasPrice
      let block = dataArray4.LastBlock

      fetch(`https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=${Gas}&apikey=${EthScanKei}`).then(res=>{return res.json()}).then(data=>{

         console.log(data);

      let confirmation = data.result










      let laiha4 = `

   
      <ul>
      
      
      <li>Last Block Mined <br><hr> ${block} </li>
      
         <li>Fast<br><hr> ${fastGas} </li>
      
         <li>Average<br><hr> ${Gas}  </li>
      
         <li>Slow<br><hr> ${minGas}  </li>

         
      
       
      
      
      
      </ul>    
      <div>
      <hr><hr>
      </div>
         
         `
         contenteFor.style.visibility="hidden"
         contenteFor.style.height='0px'
      
      sec4.innerHTML+=laiha4


























      })






   })








   










btn5.addEventListener('click',async()=>{
  


   const response = await fetch(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${EthScanKei}`)


   const data = await response.json();

   console.log(data);

      let array = data.result

      let ethPrice = array.ethusd

      let time = array.ethusd_timestamp


      const timeUnix = time*1000

      const update = new Date(timeUnix)
    


      const EthUpdate = update.toLocaleString()
    





      contenteFive.style.visibility="hidden"
         contenteFive.style.height='0px'
      
      sec5.innerHTML= `<h1>Eth Price: ${ethPrice} $ </h1>
      
                           <h2> Updated ${EthUpdate}</h2>
      
      `



      










   })


   









btn6.addEventListener('click',async ()=>{
  

   let wallet = walletadd.value

   const response = await fetch(`https://api.ethplorer.io/getAddressInfo/${wallet}?apiKey=${EthPlorerKei}`)


   const data = await response.json();

   console.log(data);


         let eth = data.ETH

         let ethBalance = eth.balance

         let tokens = data.tokens

         
         contenteSix.style.visibility="hidden"
         contenteSix.style.height='0px'


         sec6.innerHTML+=`<h1 >${ethBalance.toFixed(3)} Eth </h1>`


         tokens.forEach(x=>{


            let y = x.tokenInfo

            let name= y.name
            let address = y.address
            let symbol = y.symbol
            let site = y.website
      


            


         
            let laiha6 = `



            
   
            <ul>
            
            
                    
            
               
              <div><br><hr><hr><br></div>
               <li > Token: ${name} </li>
               <li > Adress: ${address} </li>
               <li > Symbol: ${symbol} </li>
               <li >Click: &#8618; <a href="${site}"> ${site} </a>   </li>

            
             
            
            
            
            </ul>    
            <div>
            <hr><hr>
            </div>
               
               `
               
            sec6.style.height= "500px"
            sec6.innerHTML+=laiha6 














           

         })


      










   })


   







btn7.addEventListener('click', ()=>{
  
         contenteSev.style.visibility="hidden"
         contenteSev.style.height='0px'


         sec7.innerHTML+=`<h1> Dextools Charts <a href=""> click </a> </h1>`




   
})






btn8.addEventListener('click', async ()=>{
  

   let sourceCode = sCode.value


   const response = await  fetch(`https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${sourceCode}&apikey=${EthScanKei}`)


            const data = await response.json();

               console.log(data);

               let dataR = data.result[0].SourceCode



               let p = `<p>
               
               
               ${dataR}
               
               
               </p>`

               contenteEyt.style.visibility="hidden"
         contenteEyt.style.height='0px'
         sec8.style.height= "500px"
         sec8.style.width= "30vw"
         sec8.innerHTML+=p



        


         





            })
 
          


         









dltBtn.addEventListener('click',()=>{

   p=''

         
   
})




