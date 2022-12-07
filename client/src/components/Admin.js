import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";

export default function Admin() {
  const { currentUser } = useAuth();
  const [isAdmin, setIsAdmin] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/playlist/Admin", {
      method: "GET",
      headers: new Headers({ "Content-Type": "application/json" }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
        console.log(JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let adminStatus;

  for (let i = 0; i < isAdmin.length; i++) {
    if (currentUser.email == isAdmin[i].email) {
      adminStatus = true;
    } else {
      adminStatus = false;
    }
  }

  console.log(adminStatus);

  //red

  // useEffect(() => {
  //     if(user){
  //       if((user?.isAdmin && !user.isAdmin)|| !user?.isAdmin)
  //     {
  //       navigate('/')
  //     }
  //     }
  //   }, [user]);
  return <div>Admin</div>;
}
