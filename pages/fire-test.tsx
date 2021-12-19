import React, { useState, useEffect } from "react";
import { db } from "./firebase";

const FireTest: React.FC = () => {
  const [parks, setParks] = useState([
    {
      addrno: "",
      address: "",
      // latlonno: undefined,
      parkname: "",
      parkingcnt: 0,
      // picMain: undefined,
    },
  ]);

  /** */
  useEffect(() => {
    const unSub = db.collection("parkInfos").onSnapshot((snapshot) => {
      const infos = snapshot.docs.map((info) => ({
        addrno: info.data().addrno,
        address: info.data().address,
        // latlonno: info.data().latlonno,
        parkname: info.data().parkname,
        parkingcnt: info.data().parkingcnt,
        // picMain: info.data().picMain,
      }));
      console.log(infos);
      setParks(infos);
    });
    return () => unSub();
  }, []);

  /** */
  return (
    <div className="App">
      {parks.map((park, index) => (
        <div key={index}>
          <h3>{park.addrno}</h3>
          <h3>{park.address}</h3>
          {/* <h3>{park.latlonno}</h3> */}
          <h3>{park.parkname}</h3>
          <h3>{park.parkingcnt}</h3>
          {/* <h3>{park.picMain}</h3> */}
        </div>
      ))}
    </div>
  );
};

export default FireTest;
