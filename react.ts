
function Button(props) {
    return (
        <button onClick= { () => props.onClickFunction(props.increment)
}>
    +{ props.increment }
    < /button>
  )
}


function Display(props) {
    return (
}

function App() {
    const [counter, setCounter] = useState(0);
    return (
  )
}

ReactDOM.render(
);