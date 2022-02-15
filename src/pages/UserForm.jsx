import React,{useEffect} from "react";
import { useForm } from "../hooks/useForm";
import { apiClient } from "../api/axiosApi";
import { useNavigate ,NavLink} from "react-router-dom";
import { useDispatch } from "react-redux";
import { startGetUsers } from "../redux/actions/saveUsersAction";


function UserForm() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    email: "",
  });
  const {name, email} = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await apiClient("/",{name,email},"POST");
    reset();
    navigate("/users",{replace:true});
  }
  
  useEffect(() => {
    return () => {
      dispatch(startGetUsers());
    }
  },[dispatch])

  return (
    <div className="col-sm-6 col-sm-offset-3 mt-5">
      <h1>Formulario de Registro</h1>
      <form onSubmit={handleSubmit}  className="px-5">
        <div className="form-group">
          <label className="control-label" htmlFor="user-github">
            Usuario Github:
          </label>
          <input
            type="text"
            className="form-control input-lg"
            id="user-github"
            placeholder="Ingresa un usuario"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
          <p className="help-block"></p>
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="email">
            Correo:
          </label>
          <input
            type="email"
            className="form-control input-lg"
            id="passcode"
            placeholder="Ingresa un correo"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <p className="help-block"></p>
        </div>
        <div className="checkbox terms-checkbox">
          <label>
            <input type="checkbox" id="terms" /> Acepto los términos y
            condiciones
          </label>
        </div>
        <div className="action text-right">
            <button type="submit"  className="btn btn-primary btn-block btn-lg">
              Registrarse
            </button>
        </div>
      </form>
      <section className="mt-5">
        <h2>¿Deseas ver los usuarios registrados?</h2>
        <NavLink to={"/users"}>
          <button className="btn btn-success">
            Ver usuarios registrados
          </button>
        </NavLink>
      </section>
    </div>
  );
}

export default UserForm;
