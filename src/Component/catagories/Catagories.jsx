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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <CatagorisCarad key={item.skillId} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Catagories;
