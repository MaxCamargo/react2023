import { useLocalTestCustomHook } from "../../hooks";


export const TestCustomHook = () => {
    const { storeValue, storedValue } = useLocalTestCustomHook();
    const handleClick = () => {
        storeValue('name', 'Jorge');
    };
    return (
        <div>
            {JSON.stringify(storedValue)}
            <button onClick={handleClick}>Haz click</button>
        </div>
    );
};