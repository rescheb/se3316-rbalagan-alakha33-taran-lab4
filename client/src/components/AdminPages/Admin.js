import React from 'react'
import {useAuth} from '../contexts/AuthContext' 

export default function Admin() {
    const{currentUser} = useAuth()
    const [isAdmin, setIsAdmin] = useState([]);

const viewAdmin = async () => {
  
      fetch("http://localhost:9000/playlist/Admin="+currentUser.email, {
        method: "GET",
        headers: new Headers({ "Content-Type": "application/json" }),
      })
        .then((res) => res.json())
        .then((data) => {
          setRecentPlaylists(data);
          console.log(JSON.stringify(data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
}
