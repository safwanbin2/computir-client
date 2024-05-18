import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  AppShell,
  Sidebar,
  SidebarToggleButton,
  SidebarSection,
  NavItem,
  NavGroup,
  PersonaAvatar,
} from "@saas-ui/react";
import { FiHome, FiUsers, FiSettings, FiGithub } from "react-icons/fi";
import {
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import rantirBlack from "../../assets/logos/rantirBlack.svg";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import { FiInbox } from "react-icons/fi";
import unknown from "../../assets/unknown.jpg";

const DashboardLayout = () => {
  const { logOut, user, userDB } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    const response = await logOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen">
      <div>
        <AppShell
          sidebar={
            <Sidebar toggleBreakpoint="md">
              <SidebarToggleButton />
              <SidebarSection direction="row" className="items-center">
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<Image src={rantirBlack} className="h-[20px]" />}
                    variant="ghost"
                  />
                  <MenuList className="text-sm">
                    <p className="font-semibold ps-3 pb-4">Organizations</p>
                    <MenuItem>
                      <Link className="w-full" to={"/settings/organization"}>
                        Organization settings
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link className="w-full" to={"/create-organization-s1"}>
                        Create organization
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>

                <Spacer />
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={
                      <img
                        src={
                          userDB?.photo
                            ? userDB?.photo
                            : user?.photoURL
                            ? user?.photoURL
                            : unknown
                        }
                        alt=""
                        className="size-8 rounded-full"
                      />
                    }
                    variant="ghost"
                  />
                  <MenuList className="text-sm">
                    <MenuItem>
                      <Link className="w-full" to={"/settings/profile"}>
                        Profile
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link className="w-full" to={"/settings"}>
                        Settings
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <button onClick={handleLogOut}>Sign out</button>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </SidebarSection>
              <SidebarSection aria-label="Main">
                <NavGroup>
                  <NavItem icon={<FiHome />} isActive>
                    <Link to={"/dashboard"} className="w-full">
                      Dashboard
                    </Link>
                  </NavItem>
                  <NavItem icon={<FiInbox />}>Support Tickets</NavItem>
                  {/* <NavItem icon={<FiSettings />}>Settings</NavItem> */}
                </NavGroup>

                <NavGroup title="Recent Projects" isCollapsible>
                  <NavItem>
                    <Link
                      to="/dashboard"
                      className="w-full ps-3 flex items-center gap-2"
                    >
                      <div className="size-3 rounded-full bg-violet-500"></div>
                      Project 1
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to="/dashboard"
                      className="w-full ps-3 flex items-center gap-2"
                    >
                      <div className="size-3 rounded-full bg-violet-500"></div>
                      Project 2
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      to="/dashboard"
                      className="w-full ps-3 flex items-center gap-2"
                    >
                      <div className="size-3 rounded-full bg-violet-500"></div>
                      Project 3
                    </Link>
                  </NavItem>
                </NavGroup>
              </SidebarSection>
            </Sidebar>
          }
        >
          <div className="overflow-y-scroll relative">
            <div className="p-3 shadow-sm fixed w-full bg-white md:relative flex justify-end md:justify-between items-center text-sm gap-5 ">
              <Link className="font-semibold">Dashboard</Link>
              <button className="p-2 bg-violet-600 text-white font-semibold rounded-lg">
                Go Enterprise
              </button>
            </div>
            <div className="min-h-[90vh] w-full pt-16 md:pt-0">
              <Outlet />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center text-xs gap-1 md:gap-8 text-gray-500 pt-16 md:pt-10 pb-2">
              <p>Copyright ©2024 Rantir, Inc. All rights reserved.</p>
              <div>
                <Link className="flex items-center gap-2">
                  <span>Rantir Cloud Github</span>{" "}
                  <FiGithub className="text-lg" />
                </Link>
              </div>
              <div>
                <Link>Data Policy</Link> | <Link>Terms and Conditions</Link>
              </div>
            </div>
          </div>
        </AppShell>
      </div>
    </div>
  );
};

export default DashboardLayout;
