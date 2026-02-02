import userContext from "../Context/UserContext";
import React, { useContext } from "react";

const Profile = () => {
  const { user } = useContext(userContext);

  if (!user) return <div className="mt-4 text-gray-500">Please Login</div>;

  return (
    <div className="mt-6 text-2xl font-extrabold text-blue-900">
      Welcome {user.username}
    </div>
  );
};

export default Profile;