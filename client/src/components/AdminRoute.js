// import React, { useState, useEffect } from 'react'
// import { Route, Redirect } from 'react-router-dom'
// import { useAuth } from '../contexts/AuthContext'

// export default function AdminRoute({ component: Component, ...rest }) {
//     const { currentUser } = useAuth();

//     const [admin, setAdmin] = useState(false);
//     const [loading, setLoading] = useState("Loading");
//     //useEffect(() => {
//     const admin2 = async () => {
//         let h;

//         fetch("http://localhost:9000/playlist/AdminCheck?email=" + currentUser.email, {
//             method: "GET",
//             headers: new Headers({ "Content-Type": "application/json" }),
//         })
//             .then((res) => res.json())
//             .then((data) => {




//                 // setAdmin(data[0].is_Admin == 1 ? true : false);
//                 //onsole.log(data[0].is_Admin)

//                 if (data[0].is_Admin == 1) {
//                     console.log("gets here")
//                     return true
//                     setAdmin(true)
//                     console.log(admin)
//                 }
//                 else {
//                     return false
//                     console.log(data[0].is_Admin)
//                     setAdmin(false)
//                 }

//                 h = admin;
//                 console.log(admin)
//                 setLoading("Complete");


//             })
//             .catch((err) => {
//                 console.log(err);
//             });
      

//     }

//     // }, []);
//      console.log(admin2())

//     return (
//         <Route
//             {...rest}
//             render={props => {
//                 return (admin2() == 1 && currentUser ? <Component {...props} /> : <Redirect to="/" />)
//                 //: null
//             }
//             }
//         >

//         </Route>

//     )
// }

// //<Component {...props} />
// //loading !== "Loading" ?