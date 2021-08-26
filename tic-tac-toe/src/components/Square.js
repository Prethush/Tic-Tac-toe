

function Square(props) {
        return (
            <button className="border-2 border-blue-900 h-32 w-32 text-3xl" onClick={() => props.onClick()}>{props.value}</button>
        )
    
}

export default Square;