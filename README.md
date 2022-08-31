Когда изменяется состояние родителя (App), метод render вызывается у всех его детей, даже если состояние детей осталось неизменным (Clock и Swatch).
Когда изменяется состояние ребёнка, метод render не вызывается у его родителя.
Чтобы предотваратить ререндер детей, чьё состояние не изменилось можно воспользоваться мемоизацией.

Сейчас при нажатии на кнопку перерисовывается Swatch, мемоизируем его, что это исправить.

В документации написанно: 
> Этот метод существует только как оптимизация производительности . Не полагайтесь на него, чтобы **«предотвратить»** рендеринг, так как это может привести к ошибкам.

Теперь покликав по кнопкам можно заметить резницу между Swatch и MemorizedSwatch

Однако при re-render родителя заново создаются объекты( а следовательно и массивы, и callback), которые передаются в качестве props, и это "отменяет" мемоизацию.
Чтобы исправить это нужно передать второй аргумент в мемо 
Второй аргумент это колбек принимающий два аргумента предыдущие свойства и следующие, если колбек вернёт true ре-рендер не состоится, иначе рендер состоится.
```typescript jsx
    const memorizedComponent = memo(Component,(prevProps,nextProps)=>{
        return prevProps.obj.color === nextProps.obj.color
    })
```

Альтернативой является мемоизациия не объекта, а параметров с помощью хука useMemo.
```typescript jsx
const memorizedObj = useMemo(()=>{return {color}},[color])
```

Параметры нельзя мемоизировать с помощью memo, memo принимает своим аргументом только компонент.
```typescript jsx
//ERROR 
//const m = memo(color)
```

Компонент также можно мемоизировать с помощью useMemo, в этом случае его рендер сотсоится, но он вернёт уже закешированное значение, если свойства-зависимости useMemo не изменились.
```typescript jsx
export const SwatchWithObjUseMemo:FC<{color:CSSProperties["backgroundColor"], logText?: string, obj: {color:CSSProperties["backgroundColor"]}}> = ({color, logText='Swatch rendered '})=>{
console.log(logText+color)
return useMemo(()=>(<div style={{margin : 2, width: 75, height: 75, backgroundColor: color}}></div>),[color])
}
```

useCallback это сокращённая запись для useMemo когда нужнов вернуть фнукцию в качестве значения
```typescript jsx
useCallback(()=>color,[color]) '===' useMemo(()=>{return ()=>color},[color])
```
Когда использовать memo а когда useMemo?
В случаях когда не удаётся написать функцию (из-за сложности или вариативности передаваемых параметров), для второго параметра memo, слудует использовать useMemo.
memo в приоритете.


## Компоненты-классы
В компонентах классах нельзя использовать хук useMemo => ошибка при компиляции.
Однако React.memo, прекрасно работает с классами, что делает его универсальным инструментом.
Альтернативой второго аргумента React.memo в классах может служить реализация метода shouldComponentUpdate, который возращает true если нужно делать re-render (В React.memo наоборот возрат false запускает re-render).
Также классовые компонент может быть создан на основе PureComponent.
PureComponent это аналог React.memo без второго аргумента (то есть если передать объект в качестве props будет ошибочный re-render, но с простыми свойствами всё отлично).
PureComponent отличается от Component тем, что там уже реализован метод shouldComponentUpdate, выполняющий поверхностное сравнения.
Переопределить данный метод возможно, но будет получено предупреждение в консоли.

В итоге,PureComponent очень специализированный (лучше не использовать), React.memo попрежнему в приоритете.

