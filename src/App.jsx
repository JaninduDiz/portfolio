import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { LINKS } from "./constants";
import { About, Me, Skills, MyJourney } from "./sections";
import "./App.css";
import Logo from "/images/logo.png";

const { Header, Content, Footer } = Layout;

function App() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const menuItems = [
    { key: "me", label: "Me", component: <Me /> },
    { key: "about", label: "About", component: <About /> },
    { key: "journey", label: "My Journey", component: <MyJourney /> },
    { key: "skills", label: "Skills", component: <Skills /> },
    {
      key: "resume",
      label: "Resume",
      external: true,
      url: LINKS.resume,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setDrawerVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = ({ key }) => {
    const item = menuItems.find((i) => i.key === key);
    if (item.external) {
      window.open(item.url, "_blank");
    } else {
      const section = document.getElementById(key);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setDrawerVisible(false);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <div style={{ alignItems: "center", display: "flex" }}>
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <img src={Logo} alt="Logo" style={{ width: "40px" }} />
          </div>
        </div>

        {!isMobile && (
          <div className="desktop-menu">
            <Menu
              theme="dark"
              mode="horizontal"
              items={menuItems.map(({ key, label }) => ({ key, label }))}
              onClick={handleMenuClick}
            />
          </div>
        )}

        {isMobile && (
          <div className="mobile-menu-icon">
            <Button
              icon={<MenuOutlined />}
              type="text"
              style={{ color: "#fff" }}
              onClick={() => setDrawerVisible(true)}
            />
          </div>
        )}

        <Drawer
          title="Sections"
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
        >
          <Menu
            mode="vertical"
            items={menuItems.map(({ key, label }) => ({ key, label }))}
            onClick={handleMenuClick}
          />
        </Drawer>
      </Header>

      <Content>
        {menuItems
          .filter((item) => !item.external)
          .map(({ key, component }) => (
            <div
              id={key}
              key={key}
              style={{
                minHeight: "100vh",
                padding: "20px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {component}
            </div>
          ))}
      </Content>

      <Footer style={{ textAlign: "center" }}>
        © 2025 Janindu Dissanayake. All Rights Reserved.
      </Footer>
    </Layout>
  );
}

export default App;
