import React, { useContext } from "react";
import MarqueeSection from "../../Component/Marque/Marue";
import { AuthContex } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router";
import CatagorisCarad from "../../Component/catagories/CatagorisCarad";
import HowitsWord from "../../Component/HowItsWork/HowItsWord";
import TopRatedProviders from "../../Component/TopRatedProvider/TopRatedProvider";

const Home = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContex);
  return (
    <div>
      {/* <p>{user}</p> */}
      <MarqueeSection />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mb-40 ">
        {" "}
        {data.map((data) => {
          return <CatagorisCarad key={data.skillId} data={data} />;
        })}
      </div>
      <HowitsWord></HowitsWord>
      <TopRatedProviders></TopRatedProviders>
    </div>
  );
};

export default Home;
