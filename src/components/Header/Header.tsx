interface HeaderProps {
  name: string;
  userName: string;
  userEmail: string;
}
export const Header = ({ name, userName, userEmail }: HeaderProps) => {
  return (
    <div>
      <h3>Header:</h3>
      <p>Name: {name}</p>
      <p>UserName: {userName}</p>
      <p>UserEmail: {userEmail}</p>
    </div>
  );
};
