import { useEffect, useState } from 'react';
import styled from 'styled-components';

// change the color based on counter value
const Div = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px black solid;
    display: inline-block;
    background-color: ${({ rating, selectedidx }) => selectedidx <= rating ? "yellow" : 'white'}
`

export const Rating = ({ ratingLength = 5 }) => {
    const [rating, setRating] = useState(0);
    const [ratingArray, setRatingArray] = useState([]);

    // calculate the ratings array whenever the length changes
    useEffect(() => {
        const arr = [];
        for (let i = 0; i < ratingLength; i++) {
            arr.push(null); // or any initial value you want
        }
        setRatingArray(arr)
    }, [ratingLength])


    const handleRating = (count) => {
        setRating(count + 1);
    }

    return (
        <div className='container'>
            {ratingArray?.length > 0 && ratingArray.map((_, index) => {
                return (
                    <Div
                        selectedidx={index + 1}
                        rating={rating}
                        onMouseEnter={() => handleRating(index)}
                    />
                )
            })}
        </div>
    )
}