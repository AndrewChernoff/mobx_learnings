interface Props {
    count: number
    total: number
    increment: (value: number) => void
    decrement: (value: number) => void
}
function Second({count, total, increment, decrement}: Props) {

    return (
        <div> 
        <button onClick={() => increment(1)}>+</button>
        <span>{count}</span> and  {total}
      <button onClick={() => decrement(1)}>-</button>
        </div>
    )
}

export default Second
