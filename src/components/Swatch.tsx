import {CSSProperties, FC, memo, useMemo} from "react";

const Swatch:FC<{color:CSSProperties["backgroundColor"], logText?: string}> = ({color, logText='Swatch rendered '})=>{
    console.log(logText+color)
    return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
}

const SwatchWithObj:FC<{color:CSSProperties["backgroundColor"], logText?: string, obj: {color:CSSProperties["backgroundColor"]}}> = ({color, logText='Swatch rendered '})=>{
    console.log(logText+color)
    return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
}

const SwatchWithArr:FC<{color:CSSProperties["backgroundColor"], logText?: string, arr: CSSProperties["backgroundColor"][]}> = ({color, logText='Swatch rendered '})=>{
    console.log(logText+color)
    return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
}

const SwatchWithCB:FC<{color:CSSProperties["backgroundColor"], logText?: string, cb: ()=>CSSProperties["backgroundColor"]}> = ({color, logText='Swatch rendered '})=>{
    console.log(logText+color)
    return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
}

export const SwatchWithObjUseMemo:FC<{color:CSSProperties["backgroundColor"], logText?: string, obj: {color:CSSProperties["backgroundColor"]}}> = ({color, logText='Swatch rendered '})=>{
    console.log(logText+color)
    return useMemo(()=>(<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>),[color])
}

export default Swatch;
export const MemorizedSwatch = memo(Swatch)
export const MemorizedSwatchWithObjERROR = memo(SwatchWithObj)
export const MemorizedSwatchWithObjOK = memo(SwatchWithObj,(prevProps, nextProps) => {
    //return true отменяет re-render
    return prevProps.obj.color === nextProps.obj.color
})
export const MemorizedSwatchWithArrERROR = memo(SwatchWithArr)
export const MemorizedSwatchWithArrOK = memo(SwatchWithArr,(prevProps,nextProps) => {
    if (prevProps.arr.length !== nextProps.arr.length) return false;
    for(let i=0;i<prevProps.arr.length;++i){
        if (prevProps.arr[i] !== nextProps.arr[i]) return false;
    }
    return true;
})
export const MemorizedSwatchWithCBERROR = memo(SwatchWithCB)
export const MemorizedSwatchWithCBOK = memo(SwatchWithCB,(prevProps,nextProps)=>{
    //сравниваем контент (текст) двух функций
    // return prevProps.cb.toString() !== nextProps.cb.toString()
    // console.log()
    return prevProps.cb() === nextProps.cb()
})
