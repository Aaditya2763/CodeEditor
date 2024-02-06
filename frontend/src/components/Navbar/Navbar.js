import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
function NavbarBox() {
  const storeData = useSelector((store) => store.auth);
  const { loading, appErr, serverErr, registered, user } = storeData;

  return (
    <Navbar className="bg-light justify-content-between px-5 border mb-2">
      <Link to="/">
        {" "}
        <Navbar.Brand className="text-dark fs-2 fw-semibold  ">
          <img
            alt=""
            src="/logo.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          Code Editor
        </Navbar.Brand>
      </Link>
      {user ? (
        <div>Hello,{user.username}</div>
      ) : (
        <div>
          <Link to="/login">
            {" "}
            <button className="mx-2 btn btn-ouline-primary border border-primary">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="mx-2 mx-2 btn btn-ouline-primary border border-primary">
              Signup
            </button>
          </Link>
        </div>
      )}
    </Navbar>
  );
}

export default NavbarBox;
