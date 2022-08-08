import { Text } from "components/ui";

import { getImage } from "utils/helpers";

import "./user.scss";

export const User = ({ info }) => (
  <div className="user">
    <div className="user__img">
      <img
        src={info.photo || getImage("userPlaceholder")}
        alt="User's photo"
        loading="lazy"
      />
    </div>
    <div className="user__name" data-title={info.name}>
      <Text align="center">{info.name}</Text>
    </div>
    <div className="user__position" data-title={info.position}>
      <Text align="center">{info.position}</Text>
    </div>
    <div className="user__email" data-title={info.email}>
      <Text align="center">{info.email}</Text>
    </div>
    <Text align="center">{info.phone}</Text>
  </div>
);
