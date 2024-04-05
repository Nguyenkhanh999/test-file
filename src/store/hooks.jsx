import { useContext } from "react";
import Context from "./Context";
export const useStore = () => {
    const [state, ditpatch] = useContext(Context)
    
    return [state, ditpatch]
}


