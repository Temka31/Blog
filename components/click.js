import { useState } from "react";

export default function Click() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Кликнули {count} раз</p>
            <button onClick={() => setCount(count + 1)}>Нажми меня!</button>
        </div>
    );
}
