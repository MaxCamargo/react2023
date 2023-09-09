import { useFetch, useLocalTestCustomHook } from "../../../hooks";
import { Routes } from "../../models";



export const TestCustomHook = () => {
    const { storeValue } = useLocalTestCustomHook();
    //using the custom hook useFetch
    //const { data, error } = useFetch(Routes.GET_USERS);
    //create an alias
    const { data: users, error: errorUsers } = useFetch(Routes.GET_USERS);
    
    const handleClick = () => {
        storeValue('name', 'Jorge');
    };
    return (
        <div>
            {/* {JSON.stringify(storedValue)} */}
            { errorUsers ? JSON.stringify(errorUsers) : JSON.stringify(users)}
            <button onClick={handleClick}>Haz click</button>
        </div>
    );
};