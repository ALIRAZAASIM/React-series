import React from "react";
import UserContext from "userContext";

const userContextProvider = ({ children }) => {
  const [user, setuser] = React.useState(null);
  return (
    <UserContext.provider value={{ user, setuser }}>
      {children}
    </UserContext.provider>
  );
};

export default userContextProvider;
