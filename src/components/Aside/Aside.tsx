import { UserAddress } from "../../types";

interface AsideProps {
  userAddressInfo: Omit<UserAddress, "geo">;
}
export const Aside = ({
  userAddressInfo: { street, suite, city, zipcode },
}: AsideProps) => {
  return (
    <div>
      <h3>Aside:</h3>
      <p>{street}</p>
      <p>{suite}</p>
      <p>{city}</p>
      <p>{zipcode}</p>
    </div>
  );
};
