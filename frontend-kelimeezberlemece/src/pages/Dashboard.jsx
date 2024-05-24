import React, { useState } from "react";
import {
  DesktopOutlined,
  FormOutlined,
  PlusSquareOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import AddWord from "./AddWord";
import Quiz from "./Quiz";
import Report from "./Report";
import Settings from "./Settings";
import { useNavigate } from "react-router-dom";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Sınav", "1", <FormOutlined />),
  getItem("Kelime Ekle", "2", <PlusSquareOutlined />),
  getItem("Rapor", "3", <DesktopOutlined />),
  getItem("Ayarlar", "4", <SettingOutlined />),
  getItem("Çıkış", "5", <LogoutOutlined />),
];
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState(1);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleExit = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        background: "white",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ marginTop: "60px" }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onSelect={(e) => {
            setSelectedItem(e.key);
          }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            color: "darkblue",
            background: colorBgContainer,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Kelime Ezberlemece
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
            items={[
              {
                title: "Kullanıcı",
              },
              {
                title: user.name,
              },
            ]}
          />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {selectedItem == 1 && <Quiz />}
            {selectedItem == 2 && <AddWord />}
            {selectedItem == 3 && <Report />}
            {selectedItem == 4 && <Settings />}
            {selectedItem == 5 && handleExit()}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          MCBU Yazılım Mühendisliği ©2024 Created by Nazmi Yazkan
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
