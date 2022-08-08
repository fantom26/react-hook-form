import { User } from "../user/user";

import "./users.scss";

export const Users = ({ users }) => (
  <ul className="users">
    {users.map((user) => (
      <User key={user.id} info={user} />
    ))}
  </ul>
);
