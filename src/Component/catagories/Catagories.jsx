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
    } else {
      setData(datas.filter((el) => el.skillId == id));
    }
  }, [datas, id]);

  return (
    <div className="mt-10 px-2">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {data.map((item) => (
          <CatagorisCarad key={item.skillId} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Catagories;
