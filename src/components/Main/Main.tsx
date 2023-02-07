import { UserAddress, UserGeo } from "../../types";
import { UserMap } from "../UserMap/UserMap";
interface MainProps {
  userLocation: UserGeo;
}
export const Main = ({ userLocation }: MainProps) => {
  return (
    <div>
      <h3>Main:</h3>
      <UserMap userGeoInfo={userLocation} />
    </div>
  );
};
