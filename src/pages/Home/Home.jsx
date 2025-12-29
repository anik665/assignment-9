import React, { useContext } from "react";
import MarqueeSection from "../../Component/Marque/Marue";
import { AuthContex } from "../../Provider/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContex);
  return (
    <div>
      <h2>This is home</h2>
      {/* <p>{user}</p> */}
      <MarqueeSection />
    </div>
  );
};

export default Home;
