import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {Link, useParams } from "react-router-dom"
import DeleteIcon from "@mui/icons-material/Delete";
import { checkAuth } from "../Router";
import cookie  from "cookie";


// const ifCheckAuth = () =>{
//   return checkAuth() === true ? <Component /> : <Navigate to="/login" />
// }

const Listings = (props) => {
    console.log("props being called here",props)

    let id = useParams();
	console.log("id being pulled",id);

  return (
    <Container maxWidth="lg" className="car-container">
      <h4>Logged in as {props.user.username}</h4>
      <div className="flex-container">
        {/* <AddCar carTotal={props.cars.length} /> */}
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell>Rank</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((store, idx) => (
            <TableRow key={store.id}>
              {/* <TableCell component="th" scope="row">
                {store.id}
              </TableCell> */}
              <TableCell > <Link to={`/Listings/${store.id}`}>{store.Player}</Link></TableCell>
              <TableCell>{store["Rank"]}</TableCell>
              {checkAuth() ? (
              <TableCell>
                <DeleteIcon
                  // add onClick method here
                  onClick={() => props.removeListing(idx)}
                  className="icon text-red"
                />
              </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listings;
