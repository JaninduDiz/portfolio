import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import LINKS from "./constants";
import { About, Me, Skills, Education, Experience } from "./sections";
import "./App.css";

const { Header, Content, Footer } = Layout;

function App() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = [
    { key: "me", label: "Me", component: <Me /> },
    { key: "about", label: "About", component: <About /> },
    { key: "education", label: "Education", component: <Education /> },
    { key: "experience", label: "Experience", component: <Experience /> },
    { key: "skills", label: "Skills", component: <Skills /> },
    {
      key: "resume",
      label: "Resume",
      external: true,
      url: LINKS.resume,
    },
  ];

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
        <div style={{ color: "#fff", fontWeight: "bold", fontSize: "18px" }}>
          My Portfolio
        </div>

        <div className="desktop-menu">
          <Menu
            theme="dark"
            mode="horizontal"
            items={menuItems.map(({ key, label }) => ({ key, label }))}
            onClick={handleMenuClick}
          />
        </div>

        <div className="mobile-menu-icon">
          <Button
            icon={<MenuOutlined />}
            type="text"
            style={{ color: "#fff" }}
            onClick={() => setDrawerVisible(true)}
          />
        </div>

        <Drawer
          title="Menu"
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

      <Content style={{ paddingTop: 64 }}>
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
        © 2025 Your Name. All Rights Reserved.
      </Footer>
    </Layout>
  );
}

export default App;
