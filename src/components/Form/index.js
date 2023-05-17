import { useDispatch, useSelector } from "react-redux";
import { changeName, changeRole, submitData } from "../../store";

const Form = () => {
  const { name, role, form } = useSelector((state) => {
    return {
      name: state.form.name,
      role: state.form.role,
      form: state.form
    };
  });
  const dispatch = useDispatch();
  const handleName = (event) => {
    const name = event.target.value;
    dispatch(changeName(name));
  };
  const handleRole = (event) => {
    const role = event.target.value;
    dispatch(changeRole(role));
  };

  const handleSubmit = () => {
    dispatch(
      submitData({
        name,
        role
      })
    );
  };
  console.log(form);
  return (
    <div>
      <input value={name} onChange={handleName} placeholder="Enter Name" />
      <input value={role} onChange={handleRole} placeholder="Enter Role" />
      <button onClick={handleSubmit}>Submit </button>
    </div>
  );
};

export default Form;
