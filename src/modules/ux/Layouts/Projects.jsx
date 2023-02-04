import { Fragment, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Components/Nav";

export default function Projects() {
  const [where, setWhere] = useState("");
  const path = useLocation;

  // if (
  //   path.pathname.includes(
  //     "senses" || "mould" || "hair" || "birdsong" || "disguise"
  //   )
  // ) {
  //   setWhere("u1");
  // }

  // const location = useLocation();

  return (
    <Fragment>
      <Nav />
      <Outlet />
    </Fragment>
  );
}
