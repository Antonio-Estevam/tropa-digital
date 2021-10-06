import {BrowserRouter, Route} from "react-router-dom";

import {Login} from "./pages/Login";
import {Home} from "./pages/Home";

function Routes (){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard"  component={Home} />
        </BrowserRouter>

    );
}
export default Routes; 