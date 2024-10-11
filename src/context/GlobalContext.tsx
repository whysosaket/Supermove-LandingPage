/* eslint-disable @typescript-eslint/no-explicit-any */
import {createContext, useEffect, useState} from "react";
const GlobalContext = createContext<any>({});


const GlobalState = (props: any) => {

    const [multiplier, setMultiplier] = useState<number|undefined>(1);
    const [ispc, setispc] = useState<boolean>(false);
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const value = dimensions.width>768?dimensions.width/1440:1.6969;
        setispc(dimensions.width>768);
        setMultiplier(value);
    }, [dimensions]);
    

    return (
        <GlobalContext.Provider value={{multiplier, dimensions,ispc, setDimensions}}>
        {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;
export {GlobalState};