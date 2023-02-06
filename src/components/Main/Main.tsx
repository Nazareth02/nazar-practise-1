import { UserAddress, UserGeo, UserGeoPreview } from "../../types";
import { UserMap } from "../UserMap/UserMap";
interface GeoProps {
  userAddress: Pick<UserAddress, "geo">;
}
export const Main = ({ userAddress: { geo } }: GeoProps) => {
  return (
    <div>
      <h3>Main:</h3>
      <UserMap userGeoInfo={geo} />
    </div>
  );
};
