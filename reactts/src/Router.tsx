import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { InfoProvider } from "./GetUser";

const Router = () => {
    return ( 
        <InfoProvider>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </InfoProvider>
     );
}
 
export default Router;