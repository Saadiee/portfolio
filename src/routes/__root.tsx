import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="relative w-screen min-h-screen overflow-x-hidden">
        <Navbar />
        <Outlet />
      </div>
    </React.Fragment>
  );
}
// 31:01
