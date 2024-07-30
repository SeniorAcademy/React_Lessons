import { useState, useEffect } from "react";
import { GetUsers } from "../api/Request";

const useGetUser = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await GetUsers();
    setUsers(response);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, fetchUsers };
};

export default useGetUser;
