import { UserCompany } from "../../types";

interface FooterProps {
  userCompanyInfo: UserCompany;
}
export const Footer = ({ userCompanyInfo: { catchPhrase, bs, name } }: FooterProps) => {
  return (
    <div>
      <h3>Footer:</h3>
      <p>{name}</p>
      <p>{catchPhrase}</p>
      <p>{bs}</p>
    </div>
  );
};
