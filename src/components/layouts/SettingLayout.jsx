import { Link, Outlet } from "react-router-dom";
import {
  AppShell,
  Sidebar,
  SidebarToggleButton,
  SidebarSection,
  NavItem,
  NavGroup,
} from "@saas-ui/react";
import { FiHome, FiUsers } from "react-icons/fi";
import { Image } from "@chakra-ui/react";
import rantirBlack from "../../assets/logos/rantirBlack.svg";
import { IoIosArrowBack } from "react-icons/io";
import rantirBlackMini from "../../assets/logos/rantirBlackMini.svg";
import { CiFileOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

const SettingLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="">
        <AppShell
          sidebar={
            <Sidebar toggleBreakpoint="md">
              <SidebarToggleButton />
              <SidebarSection direction="row" className="items-center gap-3">
                <Link to="/dashboard">
                  <IoIosArrowBack />
                </Link>
                <Image src={rantirBlackMini} className="h-[25px]" />
                <h2 className="font-bold">Settings</h2>
              </SidebarSection>
              <SidebarSection aria-label="Main">
                <NavGroup
                  title="Organization"
                  icon={<CiFileOn />}
                  isCollapsible
                >
                  <NavItem>
                    <Link to={"overview"} className="w-full ps-5">
                      Overview
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to={"organization"} className="w-full ps-5">
                      Organization
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to={"members"} className="w-full ps-5">
                      Members
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to={"plans"} className="w-full ps-5">
                      Plans
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to={"billing"} className="w-full ps-5">
                      Billing
                    </Link>
                  </NavItem>
                </NavGroup>
                <NavGroup
                  title="Account"
                  icon={<IoPersonOutline />}
                  isCollapsible
                >
                  <NavItem>
                    <Link to={"profile"} className="w-full ps-5">
                      Profile
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to={"security"} className="w-full ps-5">
                      Security
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to={"notyfications"} className="w-full ps-5">
                      Notyfications
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to={"api"} className="w-full ps-5">
                      Api
                    </Link>
                  </NavItem>
                </NavGroup>
              </SidebarSection>
            </Sidebar>
          }
        >
          <div className="h-full w-full overflow-y-scroll pt-10 md:pt-0 relative">
            <div className="fixed md:hidden w-full h-14 top-0 left-0 bg-white"></div>
            <Outlet />
          </div>
        </AppShell>
      </div>
    </div>
  );
};

export default SettingLayout;
