import { useState, useEffect } from "react";
import { Menu, Input, Drawer, Grid } from "antd";
import { useNavigate } from "react-router-dom";
import "./AppHeader.css";
import logo from "../Assets/logo.png";
import {
  SearchOutlined,
  CaretDownOutlined,
  HomeFilled,
  UserOutlined,
  ShoppingCartOutlined,
  ReadOutlined,
  NotificationOutlined,
  ExportOutlined,
  ImportOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import ContactInfo from "./ContactInfo";

function AppHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false); // Changed from drawerVisible to drawerOpen
  const navigate = useNavigate();
  const { useBreakpoint } = Grid; // Import the Grid hook

  const screens = useBreakpoint(); // Get the screen breakpoints

  const onMenuClick = (item) => navigate(`./${item.key}`);
  const handleLogoClick = () => navigate("/");
  const showDrawer = () => setDrawerOpen(true); // Changed to setDrawerOpen
  const closeDrawer = () => setDrawerOpen(false); // Changed to setDrawerOpen

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      label: (
        <>
          <HomeFilled /> Home
        </>
      ),
      key: "",
    },
    {
      label: (
        <>
          <CaretDownOutlined /> About Us
        </>
      ),
      key: "about",
      children: [
        {
          label: (
            <>
              <ReadOutlined /> Company Profile
            </>
          ),
          key: "CompanyProfile",
        },
        {
          label: (
            <>
              <NotificationOutlined /> Sister Company
            </>
          ),
          key: "SisterCompany",
        },
      ],
    },
    {
      label: (
        <>
          <ShoppingCartOutlined /> Products
        </>
      ),
      key: "products",
    },
    {
      label: (
        <>
          <CaretDownOutlined /> Services
        </>
      ),
      key: "services",
      children: [
        {
          label: (
            <>
              <ImportOutlined /> Import
            </>
          ),
          key: "import",
        },
        {
          label: (
            <>
              <ExportOutlined /> Export
            </>
          ),
          key: "export",
        },
      ],
    },
    {
      label: (
        <>
          <UserOutlined /> Contact Us
        </>
      ),
      key: "contact",
    },
    {
      label: (
        <>
          <ReadOutlined /> News
        </>
      ),
      key: "news",
    },
  ];

  return (
    <div>
      <div className="contact-info-container">
        <ContactInfo />
      </div>
      <div className={`appheader-container ${scrolled ? "scrolled" : ""}`}>
        <div className="logo-container">
          <img
            src={logo}
            alt="Logo"
            className="logo"
            onClick={handleLogoClick}
          />
          <p className="company-name">
            BTY IMPORT
            <br /> AND EXPORT PLC
          </p>
        </div>
        <div className="menu-center">
          <Input
            prefix={<SearchOutlined />}
            style={{ width: 200 }}
            placeholder="Search"
            className="search-bar"
          />
        </div>
        {screens.md ? (
          // For medium and larger screens
          <Menu
            onClick={onMenuClick}
            className="menuItems"
            mode="horizontal"
            items={menuItems}
          />
        ) : (
          // For smaller screens (mobile)
          <>
            <MenuOutlined
              className="menu-icon"
              onClick={showDrawer}
              style={{
                fontSize: "24px",
                marginLeft: "auto",
                cursor: "pointer",
              }}
            />
            <Drawer
              title="Menu"
              placement="left"
              onClose={closeDrawer}
              open={drawerOpen} // Changed from visible to open
              className="drawer-menu"
              width="250px"
            >
              <Menu onClick={onMenuClick} mode="vertical" items={menuItems} />
            </Drawer>
          </>
        )}
      </div>
    </div>
  );
}

export default AppHeader;
