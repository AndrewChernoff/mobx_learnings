import React from 'react'
import counter from '../stores/counter-store'
import { observer } from 'mobx-react-lite'
import CounterStore from '../stores/counter-store'
import First from './otherCounters/First'
import Second from './otherCounters/Second'

const counter1 =  new CounterStore()
const counter2 =  new CounterStore()


const Counter = observer(() =>  {
    return (
        <div> 
            <First {...counter1} total={counter1.total}/>
            <Second {...counter2} total={counter2.total}/>
        </div>
     )
})

export default Counter
