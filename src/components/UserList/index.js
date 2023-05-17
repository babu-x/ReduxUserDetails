// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../store";

const UserList = (props) => {
  const dispatch = useDispatch();
  // const userList = useSelector((state) => state.form.users);
  const removeUser = (id) => {
    dispatch(deleteUser(id));
  };
  const renderUsers = () => {
    return (
      <div>
        {props.usersData.map((eachUser) => (
          <div key={eachUser.id}>
            <span>{eachUser.name}</span>
            {"   "} <span>{eachUser.role}</span>
            {"   "}
            <button
              onClick={() => {
                removeUser(eachUser.id);
              }}
            >
              Delete User{" "}
            </button>
          </div>
        ))}
      </div>
    );
  };
  return <div>{renderUsers()}</div>;
};

export default UserList;
