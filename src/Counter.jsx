import { useState } from 'react';
import { Button } from './components/Button/Button';

// export const Counter = () => {
//     let count = 1;

//     return (
//         <button
//             className="counter"
//             onClick={() => count++}>
//             Count is {count}
//         </button>
//     );
// };


export const Counter = () => {
    const [count, setCount] = useState(0);

    console.log("Рендер компонента");

    const setCounterHandler = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }
    
    return (
        <Button className="counter" onClick={setCounterHandler}>
            Count is {count}
        </Button>
    );
};
