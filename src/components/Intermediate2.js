import Gatekeeper from "./Gatekeeper";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Intermediate2 = () => {

  const isLoggedInFromContext = useContext(UserContext)
  const str = isLoggedInFromContext ? "you are logged in" : "not logged in"

  return ( 
    <div className="int2">
      <h3>Intermediate 2 {str}</h3>
      <Gatekeeper/>

    </div>
   );
}
 
export default Intermediate2;