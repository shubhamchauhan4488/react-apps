import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount(count + 1)
    }

    const decrementHandler = () => {
        if (count === 0) return
        setCount(count - 1)
    }

    return (
        <>
            <button
                onClick={decrementHandler}
            >
                -
            </button>
            {count}
            <button
                onClick={incrementHandler}>
                +
            </button>
        </>

    )
}