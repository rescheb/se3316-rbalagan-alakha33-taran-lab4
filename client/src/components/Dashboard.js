import React, { useState, useRef } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import DcmaNotice from "./PublicDmcaNotice";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  // console.log("Entered")
  // fetch("http://" + window.location.hostname + ':9000/playlist/currentuser', {method: "POST", body: JSON.stringify({"username": currentUser.name}), headers: new Headers({'Content-Type': 'application/json'})})
  // .then(res => res.json())
  // .then(data => {

  // })
  // .catch(err => {
  //     console.log(err)
  // })

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <div>
    
        <Card>
            <Card.Body>
            <h2 className = "text-center mb-4">Profile</h2>
            {error && <Alert variant = "danger">{error}</Alert>}
          
            <Link to="/privateplaylist" className = "btn btn-primary w-100 mt-3">Private Playlist</Link>
            <Link to="/dmcanotice" className = "btn btn-primary w-100 mt-3">Public DMCA</Link>
            <Link to="/playlist" className = "btn btn-primary w-100 mt-3">Public Playlist</Link>
            <Link to="/aup" className = "btn btn-primary w-100 mt-3">AUP</Link>
            <Link to="/options" className = "btn btn-primary w-100 mt-3">Admin Options</Link>

            </Card.Body>
        </Card>
        <div className = "w-100 text-center mt-2">
        <Button variant = "danger"  onClick = {handleLogout}>Log out</Button> 
        <br></br>
        <div className="w-100 text-center mt-2">
          <Link to="/dmcanotice">DCMA Notice</Link>
        </div>
      </div>
    </div>
 );
}

