import { userInfo } from "os";
import { User } from "../../types";

interface HeaderProps {
  userInfo: Pick<User, "name" | "username" | "email">;
}
export const Header = ({ userInfo: { name, username, email } }: HeaderProps) => {
  return (
    <div>
      <h3>Header:</h3>
      <p>Name: {name}</p>
      <p>UserName: {username}</p>
      <p>UserEmail: {email}</p>
    </div>
  );
};
