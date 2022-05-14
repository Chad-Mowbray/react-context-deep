import ProtectedPage from "./ProtectedPage";
import { Component } from "react";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Gatekeeper = () => {

  const isLoggedInFromContext = useContext(UserContext)

  return ( 
    <div className="int3">
      <h3>Gatekeeper</h3>
        {isLoggedInFromContext && <ProtectedPage/>}
    </div>
   );
}


export default Gatekeeper;