import React from 'react'

export default function Admin() {
    



    useEffect(() => {
        if(user){
          if((user?.isAdmin && !user.isAdmin)|| !user?.isAdmin)
        {
          navigate('/')
        }
        }
      }, [user]);
  return (
    <div>Admin</div>
 
  )
}
