import { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  AppShell,
  Sidebar,
  SidebarToggleButton,
  SidebarSection,
  NavItem,
  NavGroup,
} from "@saas-ui/react";
import { FiHome, FiUsers, FiSettings, FiGithub } from "react-icons/fi";
import {
  Avatar,
  AvatarBadge,
  Button,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import rantirBlackMini from "../../assets/logos/rantirBlackMini.svg";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import { FiInbox } from "react-icons/fi";
import unknown from "../../assets/unknown.jpg";
import config from "../../config";
import { TiTick } from "react-icons/ti";

import logo from "../../assets/images/logo-icon.png";
import avatarImg from "../../assets/images/avatar.png";
import pinnedTab1Icon from "../../assets/svgs/dashboard-pinned-tab1.svg";
import pinnedTab2Icon from "../../assets/svgs/dashboard-pinned-tab2.svg";
import youtubeIcon from "../../assets/svgs/youtube.svg";
import googleIcon from "../../assets/svgs/Google.svg";
import twitterIcon from "../../assets/svgs/Twitter.svg";
import spotifyIcon from "../../assets/svgs/Spotify.svg";
import gridIcon from "../../assets/svgs/Grid.svg";
import { SearchIcon } from "@chakra-ui/icons";

const DashboardLayout = () => {
  const [orgList, setOrgList] = useState([]);

  const {
    logOut,
    user,
    userDB,
    activeOrgId,
    setActiveOrgId,
    activeOrg,
    refetchList,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogOut = async () => {
    const response = await logOut();
    navigate("/login");
  };

  useEffect(() => {
    fetch(
      `${config?.base_url}/organizations/list?userId=${userDB?._id}&email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrgList(data?.data);
        setActiveOrgId(data?.data[0]?.orgId?._id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userDB?._id, setActiveOrgId, user?.email, refetchList]);

  const handleOrNavigation = (orgId) => {
    setActiveOrgId(orgId);
  };

  console.log(orgList);

  return (
    <div className="min-h-screen">
      <div>
        <AppShell
          sidebar={
            <Sidebar width="274px" toggleBreakpoint="md">
              <SidebarToggleButton />
              <Stack>
                {/* top */}
                <Flex
                  p={"5px 20px"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Flex alignItems={"center"}>
                    <img src={logo} alt="logo" />
                    <Stack gap={0}>
                      <h5 className="text-[#0E1012] leading-[20px] text-[13px]">
                        Computir
                      </h5>
                      <span className="text-[#7D7F83] text-[12px] leading-[16px]">
                        Team
                      </span>
                    </Stack>
                  </Flex>
                  {/* <Avatar size={"sm"} src={avatarImg}>
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar> */}
                  <Menu>
                    <MenuButton as={IconButton} variant="ghost">
                      <Avatar
                        size={"sm"}
                        src={
                          userDB?.photo
                            ? userDB?.photo
                            : user?.photoURL
                            ? user?.photoURL
                            : unknown
                        }
                      >
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                      </Avatar>
                    </MenuButton>
                    <MenuList className="text-sm">
                      <MenuItem>
                        <Link
                          className="w-full"
                          to={`/${activeOrgId}/settings/profile`}
                        >
                          Profile
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          className="w-full"
                          to={`/${activeOrgId}/settings`}
                        >
                          Settings
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <button onClick={handleLogOut}>Sign out</button>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>

                {/* nav */}
                <Stack pt={"10px"}>
                  {/* search */}
                  <div className="px-[20px]">
                    <InputGroup>
                      <InputLeftElement
                        className="InputLeft"
                        pointerEvents="none"
                        // eslint-disable-next-line react/no-children-prop
                        children={
                          <SearchIcon className="SearchIcon" color="gray.300" />
                        }
                        size="xs"
                      />
                      <InputRightElement
                        // eslint-disable-next-line react/no-children-prop
                        children={
                          <Button
                            size={"xs"}
                            className="border border-[2px] border-[#D3D4D5]"
                          >
                            /
                          </Button>
                        }
                      />
                      <Input
                        className="Input"
                        variant="outline"
                        placeholder={`Search...`}
                      />
                    </InputGroup>
                  </div>

                  {/* pinned tabs */}
                  <div className="px-[20px]">
                    <Flex mt={"13px"} gap={"6px"}>
                      <div className="w-[34px] h-[34px] flex items-center justify-center rounded-[6px] bg-[#F1F1F1] cursor-pointer border border-1 border-transparent hover:border-[#747474]">
                        <img src={pinnedTab1Icon} alt="icon" />
                      </div>
                      <div className="w-[34px] h-[34px] flex items-center justify-center rounded-[6px] bg-[#F1F1F1] cursor-pointer border border-1 border-transparent hover:border-[#747474]">
                        <img src={pinnedTab2Icon} alt="icon" />
                      </div>
                      <div className="w-[34px] h-[34px] flex items-center justify-center rounded-[6px] bg-[#F1F1F1] cursor-pointer border border-1 border-transparent hover:border-[#747474]">
                        <img src={youtubeIcon} alt="icon" />
                      </div>
                      <div className="w-[34px] h-[34px] flex items-center justify-center rounded-[6px] bg-[#F1F1F1] cursor-pointer border border-1 border-transparent hover:border-[#747474]">
                        <img src={googleIcon} alt="icon" />
                      </div>
                      <div className="w-[34px] h-[34px] flex items-center justify-center rounded-[6px] bg-[#F1F1F1] cursor-pointer border border-1 border-transparent hover:border-[#747474]">
                        <img src={twitterIcon} alt="icon" />
                      </div>
                      <div className="w-[34px] h-[34px] flex items-center justify-center rounded-[6px] bg-[#F1F1F1] cursor-pointer border border-1 border-transparent hover:border-[#747474]">
                        <img src={spotifyIcon} alt="icon" />
                      </div>
                    </Flex>
                  </div>

                  {/* menu */}
                  <Stack mb={"12px"}>
                    <div className="px-[20px]">
                      <Flex gap={"6px"} my={"11px"} alignItems={"center"}>
                        <img src={gridIcon} alt="icon" />
                        <h5 className="text-[11px] font-semibold leading-[16.5px] text-[#33373D]">
                          Explore
                        </h5>
                      </Flex>
                    </div>

                    {/* menu items */}
                    <Flex
                      alignItems={"center"}
                      gap={"14px"}
                      py={"3px"}
                      px={"17px"}
                      className="border-l-[3px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M2.9165 13.4163C2.45567 13.4163 2.00651 13.2297 1.67984 12.903C1.35317 12.5763 1.1665 12.1272 1.1665 11.6663V5.24966C1.1665 5.06883 1.24816 4.89967 1.39399 4.78884L6.64399 0.705508C6.85399 0.542174 7.1515 0.542174 7.3615 0.705508L12.6115 4.78884C12.7515 4.89967 12.839 5.06883 12.839 5.24966V11.6663C12.839 12.1272 12.6523 12.5763 12.3257 12.903C11.999 13.2297 11.5498 13.4163 11.089 13.4163H2.9165ZM2.33317 5.53549V11.6663C2.33317 11.818 2.39732 11.9697 2.50232 12.0805C2.61316 12.1913 2.759 12.2497 2.9165 12.2497H11.0832C11.2348 12.2497 11.3865 12.1855 11.4973 12.0805C11.6082 11.9697 11.6665 11.8238 11.6665 11.6663V5.53549L6.99984 1.90717L2.33317 5.53549Z"
                          fill="#7D7F83"
                        />
                        <path
                          d="M8.74984 13.4163C8.429 13.4163 8.1665 13.1538 8.1665 12.833V7.58301H5.83317V12.833C5.83317 13.1538 5.57067 13.4163 5.24984 13.4163C4.929 13.4163 4.6665 13.1538 4.6665 12.833V6.99967C4.6665 6.67884 4.929 6.41634 5.24984 6.41634H8.74984C9.07067 6.41634 9.33317 6.67884 9.33317 6.99967V12.833C9.33317 13.1538 9.07067 13.4163 8.74984 13.4163Z"
                          fill="#7D7F83"
                        />
                      </svg>
                      <h4 className="text-[13px] leading-[19.5px] text-[#7D7F83]">
                        Dashboard
                      </h4>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      gap={"14px"}
                      py={"3px"}
                      px={"17px"}
                      className="border-l-[3px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M5.8335 9.33333C5.641 9.33333 5.45432 9.23416 5.34932 9.07083L4.35765 7.58333H1.17267C0.851835 7.58333 0.589335 7.32083 0.589335 7C0.589335 6.67917 0.851835 6.41667 1.17267 6.41667H4.67267C4.86517 6.41667 5.05181 6.51584 5.15681 6.67917L6.14848 8.16667H7.85765L8.84932 6.67917C8.96015 6.51584 9.141 6.41667 9.3335 6.41667H12.8335C13.1543 6.41667 13.4168 6.67917 13.4168 7C13.4168 7.32083 13.1543 7.58333 12.8335 7.58333H9.64848L8.65681 9.07083C8.54598 9.23416 8.36517 9.33333 8.17267 9.33333H5.8335Z"
                          fill="#7D7F83"
                        />
                        <path
                          d="M2.3335 12.25C1.86683 12.25 1.42933 12.0692 1.09683 11.7367C0.770166 11.41 0.583496 10.9608 0.583496 10.5V7C0.583496 6.90667 0.606821 6.81916 0.647654 6.73749L2.66016 2.71832C2.80599 2.42665 3.02765 2.18167 3.30765 2.01251C3.58765 1.84334 3.90266 1.75 4.22933 1.75H9.78267C10.1093 1.75 10.4301 1.84334 10.7043 2.01251C10.9785 2.18167 11.206 2.42665 11.346 2.71832L13.3585 6.73749C13.3993 6.81916 13.4227 6.90667 13.4227 7V10.5C13.4227 10.9608 13.236 11.41 12.9093 11.7367C12.5768 12.0692 12.1393 12.25 11.6727 12.25H2.3335ZM1.75016 7.13999V10.5C1.75016 10.6517 1.81432 10.8033 1.91932 10.9142C2.03015 11.025 2.176 11.0833 2.3335 11.0833H11.6668C11.8185 11.0833 11.9701 11.0192 12.081 10.9142C12.1918 10.8033 12.2502 10.6575 12.2502 10.5V7.13999L10.3018 3.24333C10.2551 3.14417 10.1793 3.06251 10.086 3.00418C9.99265 2.94585 9.88767 2.91667 9.77683 2.91667H4.22349C4.11266 2.91667 4.00764 2.94585 3.91431 3.00418C3.82097 3.06251 3.74514 3.14417 3.69848 3.24333L1.75016 7.13999Z"
                          fill="#7D7F83"
                        />
                      </svg>
                      <h4 className="text-[13px] leading-[19.5px] text-[#7D7F83]">
                        All Files
                      </h4>
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      gap={"14px"}
                      py={"3px"}
                      className="border-l-[#8952E0] border-l-[3px]"
                      px={"17px"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.66475 1.57918C8.8759 1.47361 9.12443 1.47361 9.33557 1.57918L15.3211 4.57192C15.3463 4.58391 15.3709 4.59728 15.3945 4.61192C15.4428 4.64173 15.488 4.67718 15.529 4.7179C15.5711 4.75977 15.6077 4.80613 15.6383 4.8558C15.6802 4.92341 15.7116 4.99817 15.7303 5.07782C15.7438 5.13492 15.7504 5.19268 15.7503 5.25C15.7503 5.25541 15.7503 5.26082 15.7502 5.26624V12.75C15.7502 13.0341 15.5897 13.2938 15.3356 13.4208L9.3491 16.4141C9.33436 16.4216 9.31345 16.4317 9.29827 16.4382C9.25696 16.4562 9.21481 16.4701 9.1723 16.4802C9.11521 16.4937 9.05747 16.5002 9.00016 16.5002C8.94285 16.5002 8.8851 16.4937 8.828 16.4801C8.76573 16.4655 8.70645 16.4431 8.65124 16.4141L2.66475 13.4208C2.41067 13.2938 2.25016 13.0341 2.25016 12.75V5.26625C2.25005 5.26083 2.25 5.25541 2.25 5.25C2.24996 5.19262 2.25652 5.1348 2.27006 5.07765C2.29086 4.98922 2.3273 4.90682 2.37632 4.83355C2.404 4.79196 2.43534 4.75388 2.46969 4.71953C2.50405 4.68518 2.54214 4.65383 2.58373 4.62614C2.61409 4.60583 2.64601 4.58769 2.67928 4.57191L8.66475 1.57918ZM3.75016 6.46353V12.2865L8.25016 14.5365V8.71353L3.75016 6.46353ZM9.75016 8.71353V14.5365L14.2502 12.2865V6.46353L9.75016 8.71353ZM13.3231 5.25L9.00016 7.41147L4.67722 5.25L9.00016 3.08853L13.3231 5.25ZM2.67153 4.57579C2.59752 4.6118 2.52911 4.66009 2.46969 4.71953C2.40243 4.78677 2.34945 4.86551 2.31238 4.95086"
                          fill="#7434DB"
                        />
                      </svg>
                      <h4 className="text-[13px] leading-[19.5px] text-[#7D7F83]">
                        API Keys
                      </h4>
                    </Flex>
                  </Stack>
                </Stack>
              </Stack>
            </Sidebar>
          }
        >
          <div className="overflow-y-scroll relative">
            {/* <div className="p-3 shadow-sm fixed w-full bg-white md:relative flex justify-end md:justify-between items-center text-sm gap-5 ">
              <div className="font-semibold">
                {activeOrg?.orgName ? activeOrg?.orgName : "Dashboard"}
              </div>
              <button className="p-2 bg-violet-600 text-white font-semibold rounded-lg">
                Go Enterprise
              </button>
            </div> */}
            <div className="min-h-[90vh] max-w-[1300px] mx-auto pt-16 md:pt-0">
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
