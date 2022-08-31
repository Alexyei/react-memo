import {Component, CSSProperties, FC, memo, PureComponent, useMemo} from "react";

interface ISwatchProps{
    color:CSSProperties["backgroundColor"],
    logText?: string
}

class ClassSwatch extends Component<ISwatchProps>{
    constructor(props:ISwatchProps) {
        super(props);
    }
    render() {
        const {logText = 'Swatch rendered ', color} = this.props
        console.log(logText+color)
        return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
    }
}

export class PureClassSwatch extends PureComponent<ISwatchProps>{
    constructor(props:ISwatchProps) {
        super(props);
    }
    render() {
        const {logText = 'Swatch rendered ', color} = this.props
        console.log(logText+color)
        return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
    }
}



interface ISwatchPropsWithObj{
    color:CSSProperties["backgroundColor"],
    logText?: string,
    obj: {color:CSSProperties["backgroundColor"]}
}

class ClassSwatchWithObj extends Component<ISwatchPropsWithObj>{
    constructor(props:ISwatchPropsWithObj) {
        super(props);
    }
    render() {
        const {logText = 'Swatch rendered ', color} = this.props
        console.log(logText+color)
        return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
    }
}

export class ClassSwatchWithObj__ShouldComponentUpdateOK extends Component<ISwatchPropsWithObj>{
    constructor(props:ISwatchPropsWithObj) {
        super(props);
    }

    shouldComponentUpdate(nextProps: Readonly<ISwatchPropsWithObj>, nextState: Readonly<{}>, nextContext: any): boolean {
        return this.props.obj.color !== nextProps.obj.color
    }

    render() {
        const {logText = 'Swatch rendered ', color} = this.props
        console.log(logText+color)
        return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
    }
}

export class PureClassSwatchWithObjERROR extends PureComponent<ISwatchPropsWithObj>{
    constructor(props:ISwatchPropsWithObj) {
        super(props);
    }

    render() {
        const {logText = 'Swatch rendered ', color} = this.props
        console.log(logText+color)
        return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
    }
}

export class PureClassSwatchWithObj__ShouldComponentUpdateOK extends PureComponent<ISwatchPropsWithObj>{
    constructor(props:ISwatchPropsWithObj) {
        super(props);
    }

    shouldComponentUpdate(nextProps: Readonly<ISwatchPropsWithObj>, nextState: Readonly<{}>, nextContext: any): boolean {
        return this.props.obj.color !== nextProps.obj.color
    }

    render() {
        const {logText = 'Swatch rendered ', color} = this.props
        console.log(logText+color)
        return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
    }
}



interface ISwatchPropsWithArr{
    color:CSSProperties["backgroundColor"],
    logText?: string,
    arr: CSSProperties["backgroundColor"][]
}

class ClassSwatchWithArr extends Component<ISwatchPropsWithArr>{
    constructor(props:ISwatchPropsWithArr) {
        super(props);
    }
    render() {
        const {logText = 'Swatch rendered ', color} = this.props
        console.log(logText+color)
        return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
    }
}

export class ClassSwatchWithArr__ShouldComponentUpdateOK extends Component<ISwatchPropsWithArr>{
    constructor(props:ISwatchPropsWithArr) {
        super(props);
    }

    shouldComponentUpdate(nextProps: Readonly<ISwatchPropsWithArr>, nextState: Readonly<{}>, nextContext: any): boolean {
        if (this.props.arr.length !== nextProps.arr.length) return true;
        for(let i=0;i<this.props.arr.length;++i){
            if (this.props.arr[i] !== nextProps.arr[i]) return true;
        }
        return false;
    }

    render() {
        const {logText = 'Swatch rendered ', color} = this.props
        console.log(logText+color)
        return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
    }
}

export class PureClassSwatchWithArrERROR extends PureComponent<ISwatchPropsWithArr>{
    constructor(props:ISwatchPropsWithArr) {
        super(props);
    }

    render() {
        const {logText = 'Swatch rendered ', color} = this.props
        console.log(logText+color)
        return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
    }
}

export class PureClassSwatchWithArr__ShouldComponentUpdateOK extends PureComponent<ISwatchPropsWithArr>{
    constructor(props:ISwatchPropsWithArr) {
        super(props);
    }

    shouldComponentUpdate(nextProps: Readonly<ISwatchPropsWithArr>, nextState: Readonly<{}>, nextContext: any): boolean {
        if (this.props.arr.length !== nextProps.arr.length) return true;
        for(let i=0;i<this.props.arr.length;++i){
            if (this.props.arr[i] !== nextProps.arr[i]) return true;
        }
        return false;
    }

    render() {
        const {logText = 'Swatch rendered ', color} = this.props
        console.log(logText+color)
        return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
    }
}


interface ISwatchPropsWithCB{
    color:CSSProperties["backgroundColor"],
    logText?: string,
    cb: ()=>CSSProperties["backgroundColor"]
}

class ClassSwatchWithCB extends Component<ISwatchPropsWithCB>{
    constructor(props:ISwatchPropsWithCB) {
        super(props);
    }
    render() {
        const {logText = 'Swatch rendered ', color} = this.props
        console.log(logText+color)
        return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
    }
}

export class ClassSwatchWithCB__ShouldComponentUpdateOK extends Component<ISwatchPropsWithCB>{
    constructor(props:ISwatchPropsWithCB) {
        super(props);
    }

    shouldComponentUpdate(nextProps: Readonly<ISwatchPropsWithCB>, nextState: Readonly<{}>, nextContext: any): boolean {
        return this.props.cb() !== nextProps.cb()
    }

    render() {
        const {logText = 'Swatch rendered ', color} = this.props
        console.log(logText+color)
        return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
    }
}

export class PureClassSwatchWithCBERROR extends PureComponent<ISwatchPropsWithCB>{
    constructor(props:ISwatchPropsWithCB) {
        super(props);
    }

    render() {
        const {logText = 'Swatch rendered ', color} = this.props
        console.log(logText+color)
        return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
    }
}

export class PureClassSwatchWithCB__ShouldComponentUpdateOK extends PureComponent<ISwatchPropsWithCB>{
    constructor(props:ISwatchPropsWithCB) {
        super(props);
    }

    shouldComponentUpdate(nextProps: Readonly<ISwatchPropsWithCB>, nextState: Readonly<{}>, nextContext: any): boolean {
        return this.props.cb() !== nextProps.cb()
    }

    render() {
        const {logText = 'Swatch rendered ', color} = this.props
        console.log(logText+color)
        return (<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>)
    }
}


// export class ClassSwatchWithObjUseMemo extends Component<ISwatchPropsWithObj>{
//     constructor(props:ISwatchPropsWithObj) {
//         super(props);
//     }
//     render() {
//         const {logText = 'Swatch rendered ', color} = this.props
//         console.log(logText+color)
//         return useMemo(()=>(<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>),[color])
//     }
// }



export default ClassSwatch;
export const ClassMemorizedSwatch = memo(ClassSwatch)
export const ClassMemorizedSwatchWithObjERROR = memo(ClassSwatchWithObj)
export const ClassMemorizedSwatchWithObjOK = memo(ClassSwatchWithObj,(prevProps, nextProps) => {
    //return true отменяет re-render
    return prevProps.obj.color === nextProps.obj.color
})
export const ClassMemorizedSwatchWithArrERROR = memo(ClassSwatchWithArr)
export const ClassMemorizedSwatchWithArrOK = memo(ClassSwatchWithArr,(prevProps,nextProps) => {
    if (prevProps.arr.length !== nextProps.arr.length) return false;
    for(let i=0;i<prevProps.arr.length;++i){
        if (prevProps.arr[i] !== nextProps.arr[i]) return false;
    }
    return true;
})
export const ClassMemorizedSwatchWithCBERROR = memo(ClassSwatchWithCB)
export const ClassMemorizedSwatchWithCBOK = memo(ClassSwatchWithCB,(prevProps,nextProps)=>{
    return prevProps.cb() === nextProps.cb()
})
