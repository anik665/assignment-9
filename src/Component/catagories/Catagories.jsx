import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import CatagorisCarad from "./CatagorisCarad";

const Catagories = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const datas = useLoaderData();
  useEffect(() => {
    if (id === "all") {
      setData(datas);
      return;
    } else {
      const filterData = datas.filter((el) => el.skillId == id);
      setData(filterData);
      return;
    }
  }, [datas, id]);

  // console.log(filterData);
  return (
    <div className="mt-10">
      {/* <h1>This is catagory section {id}</h1> */}
      <div className="grid grid-cols-3 gap-4">
        {" "}
        {data.map((data) => {
          return <CatagorisCarad data={data} />;
        })}
      </div>
      {/* <CatagorisCarad></CatagorisCarad> */}
    </div>
  );
};

export default Catagories;
