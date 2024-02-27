import Left from "./components/Left"
import { useState,useRef,useEffect } from "react"
import YourInfo from "./components/YourInfo"
import Select from "./components/Select"
import Add from "./components/Add"
import Summary from "./components/Summary"
import Thankyou from "./components/Thankyou"

export default function App() {
  const [page, setpage] = useState(0)
  const [arcadePrix, setarcadePrix] = useState(9)
  const [advencedPrix, setadvencedPrix] = useState(12)
  const [proPrix, setproPrix] = useState(15)
  const [select, setselect] = useState(0)
  const [cont, setcont] = useState(0)
  const [add1, setadd1] = useState(1)
  const [add2, setadd2] = useState(2)
  const [add3, setadd3] = useState(2)
  const [sum, setsum] = useState([])
  const [sum1, setsum1] = useState([])
  let div1 = useRef()
  let div2 = useRef()
  let div3 = useRef()
const [cpage, setcpage] = useState(0)
let array = []

useEffect(() => {
 
    if (select == 1) {
      setsum(['arcade',arcadePrix])
    }
    if (select == 2) {
      setsum(['advenced',advencedPrix])
    }
    if (select == 3) {
      setsum(['pro',proPrix])
    }
  


  

  
}, [select])

 let change1 =()=>{
  if (div1.current.checked) {
    array.push({"nom":"Online service","prix":add1})
  }}
let change2=()=>{
  if (div2.current.checked) {
  array.push({"nom":"Larger storage","prix":add2})
}}
let change3=()=>{
  if (div3.current.checked) {
   array.push({"nom":"Customizable Profile","prix":add3})
  }
}




  let returnc =()=>{
    setpage(1)
  
  }
  { page < 0 ? setpage(0) : '' }
  { page > 4 ? setpage(4) : '' }
  return (
    <section className="w-[100%] bg-slate-100 h-[100vh] flex items-center justify-center">
      <div className='h-[650px] w-[70%] rounded-lg bg-white flex justify-start items-center p-5'>
        <Left page={page} />
        <div className="flex flex-col w-[80%] h-[100%] justify-center items-center">
          {page == 0 && <YourInfo page={page} setpage={setpage}  setcpage={setcpage}/>}

          {page == 1 && <Select page={page} setpage={setpage} arcadePrix={arcadePrix} setarcadePrix={setarcadePrix} advencedPrix={advencedPrix} setadvencedPrix={setadvencedPrix} proPrix={proPrix} setproPrix={setproPrix} select={select} setselect={setselect} cont={cont} setcont={setcont} setadd1={setadd1} setadd2={setadd2} setadd3={setadd3}    />}

          {page == 2 && <Add cont={cont} setcont={setcont} div1={div1} div2={div2} div3={div3} add1={add1} add2={add2} add3={add3} sum1={sum1} setsum1={setsum1}/>}

          {page == 3 && <Summary page={page} cont={cont} setcont={setcont} sum={sum} sum1={sum1} />}

          {page == 4 && <Thankyou page={page} setpage={setpage} cont={cont}  sum1={sum1}/>}
          <div className="flex w-[80%] h-[20%] justify-center  p-10 gap-40">

            {page == 4 ? '' : page > 0 ? <button type="button" onClick={() => { setpage(page - 1) }}>back</button> : ''}
            {page == 4 ? '' : page < 3 ? 
            page == 1 && select == 0 ?
            <button className="bg-slate-600 h-[50px] w-[120px] rounded-lg"   disabled  type="button">next</button>:
            <button className="bg-slate-600 h-[50px] w-[120px] rounded-lg"   onClick={() => { setpage(page + 1);change1();change2();change3();setsum1(array)}} type="button">next</button> :
             <button className="bg-slate-600 h-[50px] w-[120px] rounded-lg" onClick={() => { setpage(page + 1)}} type="button" >confirm</button>}
          </div>
        </div>
      </div>
    </section>
  )
}