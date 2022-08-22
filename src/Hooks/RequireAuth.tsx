import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { loginPage } from "../utils/path/path";

function RequireAuth({ children }: { children: JSX.Element }) {
    let auth: string | any= useSelector<string | any>(state=>state.user);
    let location = useLocation();
  
    if (!auth.email) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to={loginPage} state={{ from: location }} replace />;
    }
  
    return children;
  }

  export default RequireAuth;