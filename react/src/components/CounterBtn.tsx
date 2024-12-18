type Props = {
  onIncrement: () => void
}

const CounterBtn = ({ onIncrement }: Props) => {
  return (
    <button onClick={onIncrement}>Increment</button>
  )
}

export default CounterBtn