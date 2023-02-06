import { UserGeo } from "../../types";

interface MapProps {
  userGeoInfo: UserGeo;
}
export const UserMap = ({ userGeoInfo: { lat, lng } }: MapProps) => {
  return (
    <div>
      <h3>Map:</h3>
      <p>{lat}</p>
      <p>{lng}</p>
    </div>
  );
};
