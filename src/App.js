import { useDispatch, useSelector } from "react-redux";
import Form from "./components/Form";
import UserList from "./components/UserList";
import { searchUser } from "./store";

const App = () => {
  const dispatch = useDispatch();
  const searchingName = useSelector((state) => state.form.searchingName);
  const usersData = useSelector(({ form: { users, searchingName } }) => {
    return users.filter((each) =>
      each.name.toLowerCase().includes(searchingName.toLowerCase())
    );
  });
  const searchUserName = (event) => {
    dispatch(searchUser(event.target.value));
  };
  return (
    <div>
      <Form />
      <p>Users List </p>
      <input
        value={searchingName}
        onChange={searchUserName}
        placeholder="search user"
      />
      <br />
      <br />
      <UserList usersData={usersData} />
    </div>
  );
};

export default App;
