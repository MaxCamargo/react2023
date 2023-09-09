import { useState } from "react";

export function useLocalTestCustomHook<T>() {
    const [storedValue, setStoredValue] = useState<T>({});

    const storeValue =(key: string, value: T) => {
        const formattedValue = {...storeValue, [key]: value};
        setStoredValue(formattedValue);
        localStorage.set('storeValue', JSON.stringify(formattedValue));
    };

    const retrieveValue = (key: string) => {
        const storeValue = localStorage.getItem('storeValue');
        if(storeValue){
            const parsedValue = JSON.parse(storeValue);
            const parsedValueToGet = parsedValue[key];
            if(parsedValueToGet){
                return parsedValueToGet;
            }
            throw new Error('Key Value not found');
        }
        throw new Error('Store Value not Initialised');
    }

    return {storeValue, retrieveValue, storedValue, setStoredValue}
}