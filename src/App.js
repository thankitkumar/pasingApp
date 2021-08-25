import { useEffect, useState } from "react";
import Users from './components/users';
import Pagination from './components/Pagination';
import axios from 'axios';
import { USER_PER_PAGE } from "./utils/constants";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  console.log(users)
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get('https://reqres.in/api/users?page=2');
      setLoading(false);
      setUsers(res.data.data);
      setTotalPages(Math.ceil(res.data.data.length / USER_PER_PAGE));
    };
    fetchUsers();
  }, []);

  const handleClick = num => {
    setPage(num);
  }

  return (
    <div>
      <h1>Question 2. Paging</h1>
      <p>Page {page}</p>
      { loading ? <p>Loading...</p> : <>
        <Users users={users} page={page} />
        <Pagination totalPages={totalPages} handleClick={handleClick} />
      </> }
    </div>
  );
}

export default App;