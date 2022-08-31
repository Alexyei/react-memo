import React, {CSSProperties, FC, useCallback, useMemo, useState} from "react";
import Clock from "../components/Clock";
import Swatch, {
    MemorizedSwatch,
    MemorizedSwatchWithArrERROR, MemorizedSwatchWithArrOK, MemorizedSwatchWithCBERROR, MemorizedSwatchWithCBOK,
    MemorizedSwatchWithObjERROR,
    MemorizedSwatchWithObjOK, SwatchWithObjUseMemo
} from "../components/Swatch";

const FunctionalExample:FC = ()=>{
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState<CSSProperties["backgroundColor"]>('red');

    const memorizedObj = useMemo(()=>{return {color}},[color])
    const memorizedArr = useMemo(()=>{return [color]},[color])
    const memorizedCB = useMemo(()=>{return ()=>color},[color])
    const memorizedCBUseCallback = useCallback(()=>color,[color])

    console.log("App rendered " + number)

    return (
        <div className="App">
            <div>
                <Clock/>
            </div>
            <div>
                <button onClick={() => setNumber(prev => prev + 1)}>Re-render App</button>
            </div>
            <div>
                <button onClick={() => setColor(color => color === 'red'?'blue':'red')}>Change color</button>
            </div>
            <div>
                <Swatch color={color}/>
            </div>
            <div>
                <MemorizedSwatch color={color} logText={'MemorizedSwatch rendered '}/>
            </div>
            <div>
                <MemorizedSwatchWithObjERROR color={color} logText={'MemorizedSwatchWithObjERROR rendered '} obj={{color}}/>
            </div>
            <div>
                <MemorizedSwatchWithObjOK color={color} logText={'MemorizedSwatchWithObjOK rendered '} obj={{color}}/>
            </div>
            <div>
                <MemorizedSwatchWithArrERROR color={color} logText={'MemorizedSwatchWithArrERROR rendered '} arr={[color]}/>
            </div>
            <div>
                <MemorizedSwatchWithArrOK color={color} logText={'MemorizedSwatchWithArrOK rendered '} arr={[color]}/>
            </div>
            <div>
                <MemorizedSwatchWithCBERROR color={color} logText={'MemorizedSwatchWithCBERROR rendered '} cb={()=>color}/>
            </div>
            <div>
                <MemorizedSwatchWithCBOK color={color} logText={'MemorizedSwatchWithCBOK rendered '} cb={()=>color}/>
            </div>
            <div>
                <MemorizedSwatchWithObjERROR color={color} logText={'MemorizedSwatchWithObjUseMemoOK rendered '} obj={memorizedObj}/>
            </div>
            <div>
                <MemorizedSwatchWithArrERROR color={color} logText={'MemorizedSwatchWithArrUseMemoOK rendered '} arr={memorizedArr}/>
            </div>
            <div>
                <MemorizedSwatchWithCBERROR color={color} logText={'MemorizedSwatchWithCBUseMemoOK rendered '} cb={memorizedCB}/>
            </div>
            <div>
                <MemorizedSwatchWithCBERROR color={color} logText={'MemorizedSwatchWithCBUseCallbackOK rendered '} cb={memorizedCBUseCallback}/>
            </div>
            <div>
                <SwatchWithObjUseMemo color={color} logText={'SwatchWithObjUseMemoOK rendered '}  obj={{color}}/>
            </div>
        </div>
    );
}

export default FunctionalExample;
