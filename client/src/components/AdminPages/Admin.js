import React from 'react'
import {useAuth} from '../contexts/AuthContext' 

export default function Admin() {
    const{currentUser} = useAuth()
    const [isAdmin, setIsAdmin] = useState([]);



    // useEffect(() => {
    //     if(user){
    //       if((user?.isAdmin && !user.isAdmin)|| !user?.isAdmin)
    //     {
    //       navigate('/')
    //     }
    //     }
    //   }, [user]);
  return (
    <div>Admin</div>
 
  )
}
