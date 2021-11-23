import { useUsers, Interest } from "../hooks/getUsers";

function toObject(interests: Interest[]): Record<number, Interest> {
  const entries = interests.map(interest => [interest.id, interest]);
  return Object.fromEntries(entries);
}

export const Users = () => {
  const users = useUsers();

  if (users.loading) return <div>loading...</div>;

  const userFollowers: Record<number, number> = {};
  for (const user of users.data) {
    userFollowers[user.id] = 0;
  }
  for (const user of users.data) {
    for (const follow of user.following) {
      userFollowers[follow]++;
    }
  }

  const interestsObject = toObject(users.interests);

  return (
    <div>
      <h1>User List</h1>
      {users.data.map((u) => {
        const interestNames = u.interests?.map(id => interestsObject[id].name);
        return <div key={u.id} className="user-card">
          <p>Name: {u.name}</p>
          <p>Followers: {userFollowers[u.id]}</p>
          <p>Interests: {interestNames?.join(', ') ?? 'None'}</p>
        </div>;
      })}
    </div>
  );
};
