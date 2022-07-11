import React from "react";
import { Burger, Tooltip, ActionIcon } from "@mantine/core";
import { IconUserPlus } from "@tabler/icons";
import { useStateContext } from "../ContextApi/ContextApi";
import UserMenu from "./UserMenu";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const {
    allStates: { burger, setBurger },
  } = useStateContext();
  const navigate = useNavigate();

  return (
    <>
      <nav className="w-full h-20 border border-black flex justify-between items-center px-8 mb-8">
        <div className="left">
          <Burger
            opened={burger}
            onClick={() => {
              setBurger((o) => !o);
            }}
          />
        </div>

        <h1
          onClick={() => navigate("/home")}
          className="text-2xl cursor-pointer"
        >
          LRNR
        </h1>

        <div className="right flex items-center gap-8">
          <div className="item1">
            <Tooltip label="Invite Team Members">
              <ActionIcon>
                <IconUserPlus />
              </ActionIcon>
            </Tooltip>
          </div>
          <div className="item2">
            <UserMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
