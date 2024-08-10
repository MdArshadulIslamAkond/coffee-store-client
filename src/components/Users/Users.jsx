import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
          .then((result) => {
                if (result.isConfirmed) {
                
                    fetch(`http://localhost:5000/user/${id}`, {
                        method: 'DELETE'
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.message);
                        if (data.deletedCount > 0  ){
                            Swal.fire(
                                'Deleted!',
                                data.message,
                                'success'
                            );
                            // Remove the user from the UI
                            const remainingUsers =  users.filter(user => user._id!== id);
                            setUsers(remainingUsers);
                        }
                    })
                }
            })

    }
    return (
        <div>
            <h2>Users: {loadedUsers.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>EMAIL</th>
        <th>CREATED AT</th>
        <th>Last Logged In</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    
     {
         users.map(user => <tr key={user._id}>
            <th>1</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastLoggedAt}</td>
            <td>
                <button onClick={()=>handleDelete(user._id)} className="btn">X</button>
            </td>
          </tr>)
     }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;