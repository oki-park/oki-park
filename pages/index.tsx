import React, { useState, useEffect } from "react";
// import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import Avatar from "@material-ui/core/Avatar";
// import Rating from "@material-ui/lab/Rating";
// import Image from "next/image";
import ParkItem, { ParkInfo } from "../components/park-item";
import { db } from "./firebase";

/**
 * スタイル
 */
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  margin: {
    margin: theme.spacing(0),
  },
  leftmargin: {
    marginLeft: 10,
  },
}));

/**
 * メインコンポーネント
 * @returns
 */
const Home: React.FC = () => {
  const classes = useStyles();

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

  return (
    <List className={classes.root}>
      {parks.map((park, index) => (
        <ParkItem key={index} index={index} {...park} />
      ))}
    </List>
  );
};

export default Home;
