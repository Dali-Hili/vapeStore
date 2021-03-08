import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from '@material-ui/icons/Menu';
import Navbarprod from "../navbar/navbarprod.jsx";
import axios from "axios";

export default function Orders(props) {
  var list = [];
  var email;
  var title;
  var imageUrl;
  var prise;
  var order = JSON.parse(localStorage.getItem("order"));
  order.map((e, i) => {
    list.push(<li key={i}>{e}</li>);
    console.log(order);

    (email = e[3]), (imageUrl = e[2]), (title = e[0]), (prise = e[1]);
  });
  const [state, setState] = useState({
    email: email,
    imageUrl: imageUrl,
    title: title,
    stock: 0,
    prise: prise,
  });
  const handleClick = () => {
    axios
      .post(`/api/vapeStore/order`, state)
      .then((res) => {
        alert("your order is passed");
        localStorage.removeItem("order");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card">
      <h1>helloo world</h1>
      {list}
      <button onClick={handleClick}>confirm</button>
    </div>
  );
}

// {props.data.map((product, i) => {
//     return (
//       <div key = {i}>
//       <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia className={classes.media} image={product.imageUrl} id="prodImage" title="Contemplative Reptile" />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               {product.title}
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//               {product.description}
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary" >
//             more details
//           </Button>
//            <Button size="small" color="primary" onClick={handleClick }>
//            Confirme order
//           </Button>
//         </CardActions>
//       </Card></div>
//     );
//   })}
