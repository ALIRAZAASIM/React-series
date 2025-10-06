import React, { useContext } from "react";
import UserContext from "../usercontext";
function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div>please login</div>;
  return <div>welcome {user.uservalue}</div>;
}

export default Profile;
