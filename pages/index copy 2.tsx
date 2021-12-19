import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import Image from "next/image";
import ParkItem, { ParkInfo } from "../components/park-item";

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
  // const [value, setValue] = React.useState(2);

  const onListItemClick = () => {
    console.log("listitemclick");
  };

  const onClick = () => {
    alert("Hello!");
  };

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="大木公園"
          onClick={onListItemClick}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                読谷村大木289
              </Typography>
              {/* {" — I'll be in your neighborhood doing errands this…"} */}
              {/* <Box component="fieldset" mb={1} borderColor="transparent"> */}
              {/* <Typography component="legend">Read only</Typography> */}

              {/* </Box> */}
              {" - ちょっと微妙な公園ああああいいいい"}
              <br />
              <div>
                <Rating
                  name="read-only"
                  size="small"
                  value={2}
                  readOnly
                  // value={value}
                />
                <Button
                  size="small"
                  color="primary"
                  className={classes.leftmargin}
                >
                  基本情報
                </Button>
                <Button
                  size="small"
                  color="primary"
                  className={classes.leftmargin}
                >
                  口コミ
                </Button>
              </div>
            </>
          }
        />
        {/* <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar> */}
        {/* <img src="ooki.jpg" alt="test" /> */}
        <Image src="/ooki.jpg" width={300} height={150} alt="test" />;
      </ListItem>
      {/* <Divider variant="inset" component="li" /> */}
      <Divider component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
      </ListItem>
    </List>
  );
};

export default Home;
