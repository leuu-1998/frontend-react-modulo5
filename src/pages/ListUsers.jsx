import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { startDeleteUser } from "../redux/actions/deleteUserAction";



function ListUsers() {
  const dispatch = useDispatch();
  const dataUsers = useSelector(state=>state.listUsers);

  const [users, setUsers] = useState([]);

  //delete a user
  //@ here is not complete the behavior of the redux thunk 
  const handleDelete = async (_id) => {
    dispatch(startDeleteUser(_id));
  }

  //useRef o useState
  useEffect(() => {
    setUsers(dataUsers);
  }, [dataUsers])


  const arrayUsers = users.map(user => 
    <tr key={user._id} >
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button className="btn btn-danger mr-1" onClick={()=>{
          handleDelete(user._id);
        }}>Borrar</button>
      </td>
    </tr>)

    
  return (
    <div className="position-relative" style={{width:"100%"}}>
      <div className="position-absolute top-0 start-0 pt-3">
        <NavLink to={"/"}>
          <button className="btn btn-info">Quiero agregarme a la lista</button>
        </NavLink>
      </div>
      <div className="container mt-5">
      <div className="col-sm-10 col-sm-offset-1">
        <h1>Lista de Usuarios agregados</h1>

        <table className="table bordered-table table-striped">
          <thead>
            <tr>
              <th className="text-center">Usuario Github</th>
              <th className="text-center">Correo</th>
              <th className="text-center">Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {arrayUsers}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default ListUsers;
