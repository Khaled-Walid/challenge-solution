import { useUsers } from "../hooks/getUsers";

export const Users = () => {
  const users = useUsers();

  if (users.loading) return <div>loading...</div>;

  return (
    <div>
      <h1>User List</h1>
      {users.data.map((u) => (
        <div key={u.id} className="user-card">
          <p>Name: {u.name}</p>
          <p>Followers: [todo]</p>
          <p>Interests: [todo]</p>
        </div>
      ))}
    </div>
  );
};
