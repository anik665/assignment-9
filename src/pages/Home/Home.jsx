import React, { useContext } from "react";
import MarqueeSection from "../../Component/Marque/Marue";
import { AuthContex } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router";
import CatagorisCarad from "../../Component/catagories/CatagorisCarad";

const Home = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContex);
  return (
    <div>
      {/* <p>{user}</p> */}
      <MarqueeSection />

      <div className="grid grid-cols-3 gap-4">
        {" "}
        {data.map((data) => {
          return <CatagorisCarad key={data.skillId} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Home;
