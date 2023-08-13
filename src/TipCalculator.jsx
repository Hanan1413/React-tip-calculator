import React, { useState } from 'react'
// import useState from 'react'
import BillInput from './BillInput'
import SelectPercentage from './SelectPercentage'
import OutPut from './OutPut'
import Reset from './Reset'

function TipCalculator() {
    const[bill, setBill] = useState("");
    const[percentage1 , setPercentage1] =useState(0)
    const[percentage2, setPercentage2] =useState(0)

    const tip = (bill * (percentage1 + percentage2) / 2 /100)

    function handleReset(){
        setBill("")
        setPercentage1(0)
        setPercentage2(0)

    }

  return (
    <div>
    <BillInput bill={bill} onSetBill={setBill}/>
     <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        <label>How did you like the service</label>
    </SelectPercentage>

     <SelectPercentage percentage={percentage2} onSelect={setPercentage2} >
                <label>How did your  friend like service</label>
     </SelectPercentage>
      
      {bill > 0 && <OutPut bill={bill} tip={tip} />
}
      <Reset onReset={handleReset} />
    </div>
  )
}

export default TipCalculator
