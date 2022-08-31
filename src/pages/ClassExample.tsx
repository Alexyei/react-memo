import React, {Component, CSSProperties, useCallback, useMemo} from "react";
import Clock from "../components/Clock";
import ClassSwatch, {
    ClassMemorizedSwatch,
    ClassMemorizedSwatchWithArrERROR,
    ClassMemorizedSwatchWithArrOK,
    ClassMemorizedSwatchWithCBERROR,
    ClassMemorizedSwatchWithCBOK,
    ClassMemorizedSwatchWithObjERROR,
    ClassMemorizedSwatchWithObjOK,
    ClassSwatchWithArr__ShouldComponentUpdateOK,
    ClassSwatchWithCB__ShouldComponentUpdateOK,
    ClassSwatchWithObj__ShouldComponentUpdateOK,
    PureClassSwatch,
    PureClassSwatchWithArr__ShouldComponentUpdateOK,
    PureClassSwatchWithArrERROR, PureClassSwatchWithCB__ShouldComponentUpdateOK,
    PureClassSwatchWithCBERROR,
    PureClassSwatchWithObj__ShouldComponentUpdateOK,
    PureClassSwatchWithObjERROR,
} from "../class-components/Swatch";

interface IClassExampleProps{

}

interface IClassExampleState{
    number: number,
    color: CSSProperties["backgroundColor"]
}

class ClassExample extends Component<IClassExampleProps, IClassExampleState>{
    memorizedObj:{color: CSSProperties["backgroundColor"]};
    memorizedArr: CSSProperties["backgroundColor"][];
    memorizedCB: ()=>CSSProperties["backgroundColor"];

    constructor(props:IClassExampleProps) {
        super(props);
        this.state = {number:0, color:"red"}
        this.memorizedObj = {color: this.state.color}
        this.memorizedArr = [this.state.color]
        this.memorizedCB = ()=>this.state.color;
    }

    shouldComponentUpdate(nextProps: Readonly<IClassExampleProps>, nextState: Readonly<IClassExampleState>, nextContext: any): boolean {
        if (this.state.color !== nextState.color){
                this.memorizedObj = {color: this.state.color}
            this.memorizedArr = [this.state.color]
        }
        return true;
    }

    // shouldComponentUpdate(nextProps:IClassExampleProps,netState:IClassExampleState) {
    //     if (this.state.color !== prevState.color)
    //     this.memorizedObj = {color: this.state.color}
    // }

    render(){
        const {color, number} = this.state;
        // const memorizedObj = useMemo(()=>{return {color}},[color])
        // const memorizedArr = useMemo(()=>{return [color]},[color])
        // const memorizedCB = useMemo(()=>{return ()=>color},[color])
        // const memorizedCBUseCallback = useCallback(()=>color,[color])

        console.log("App rendered " + number)

        return (
            <div className="App">
                <div>
                    <Clock/>
                </div>
                <div>
                    <button onClick={()=>this.setState((state,props)=>({number: state.number +1}))}>Re-render App</button>
                </div>
                <div>
                    <button onClick={ ()=>this.setState((state,props)=>({color: state.color === 'red'?'blue':'red'}))}>Change color</button>
                </div>
                <div>
                    <ClassSwatch color={color}/>
                </div>
                <div>
                    <ClassMemorizedSwatch color={color} logText={'MemorizedSwatch rendered '}/>
                </div>
                <div>
                    <ClassMemorizedSwatchWithObjERROR color={color} logText={'MemorizedSwatchWithObjERROR rendered '} obj={{color}}/>
                </div>
                <div>
                    <ClassMemorizedSwatchWithObjOK color={color} logText={'MemorizedSwatchWithObjOK rendered '} obj={{color}}/>
                </div>
                <div>
                    <ClassMemorizedSwatchWithArrERROR color={color} logText={'MemorizedSwatchWithArrERROR rendered '} arr={[color]}/>
                </div>
                <div>
                    <ClassMemorizedSwatchWithArrOK color={color} logText={'MemorizedSwatchWithArrOK rendered '} arr={[color]}/>
                </div>
                <div>
                    <ClassMemorizedSwatchWithCBERROR color={color} logText={'MemorizedSwatchWithCBERROR rendered '} cb={()=>color}/>
                </div>
                <div>
                    <ClassMemorizedSwatchWithCBOK color={color} logText={'MemorizedSwatchWithCBOK rendered '} cb={()=>color}/>
                </div>
                <div>
                    <ClassMemorizedSwatchWithObjERROR color={color} logText={'MemorizedSwatchWithObjUseMemoOK rendered '} obj={this.memorizedObj}/>
                </div>
                <div>
                    <ClassMemorizedSwatchWithArrERROR color={color} logText={'MemorizedSwatchWithArrUseMemoOK rendered '} arr={this.memorizedArr}/>
                </div>
                <div>
                    <ClassMemorizedSwatchWithCBERROR color={color} logText={'MemorizedSwatchWithCBUseMemoOK rendered '} cb={this.memorizedCB}/>
                </div>
                {/*<div>*/}
                {/*    <ClassMemorizedSwatchWithCBERROR color={color} logText={'MemorizedSwatchWithCBUseCallbackOK rendered '} cb={memorizedCBUseCallback}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <ClassSwatchWithObjUseMemo color={color} logText={'SwatchWithObjUseMemoOK rendered '}  obj={{color}}/>*/}
                {/*</div>*/}
                <div>
                    <ClassSwatchWithObj__ShouldComponentUpdateOK logText={'SwatchWithObj__ShouldComponentUpdateOK rendered '} color={color}   obj={{color}}/>
                </div>
                <div>
                    <ClassSwatchWithArr__ShouldComponentUpdateOK logText={'SwatchWithArr__ShouldComponentUpdateOK rendered '} color={color} arr={[color]}/>
                </div>
                <div>
                    <ClassSwatchWithCB__ShouldComponentUpdateOK logText={'SwatchWithCB__ShouldComponentUpdateOK rendered '} color={color} cb={()=>color}/>
                </div>
                <div>
                    <PureClassSwatch logText={'PureSwatch rendered '} color={color}/>
                </div>
                <div>
                    <PureClassSwatchWithObjERROR logText={'PureSwatchWithObjERROR rendered '} color={color} obj={{color}}/>
                </div>
                <div>
                    <PureClassSwatchWithObj__ShouldComponentUpdateOK logText={'PureSwatchWithObj__ShouldComponentUpdateOK rendered '} color={color} obj={{color}}/>
                </div>
                <div>
                    <PureClassSwatchWithArrERROR logText={'PureSwatchWithArrERROR rendered '} color={color} arr={[color]}/>
                </div>
                <div>
                    <PureClassSwatchWithArr__ShouldComponentUpdateOK logText={'PureSwatchWithArr__ShouldComponentUpdateOK rendered '} color={color} arr={[color]}/>
                </div>
                <div>
                    <PureClassSwatchWithCBERROR logText={'PureSwatchWithCBERROR rendered '} color={color} cb={()=>color}/>
                </div>
                <div>
                    <PureClassSwatchWithCB__ShouldComponentUpdateOK logText={'PureSwatchWithCB__ShouldComponentUpdateOK rendered '} color={color} cb={()=>color}/>
                </div>
            </div>
        );
    }
}

export default ClassExample;
