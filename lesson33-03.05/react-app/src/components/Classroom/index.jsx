
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import {
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  CalendarOutlined,
  ScheduleOutlined,
  BoldOutlined,
  SettingOutlined
} from '@ant-design/icons';

import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
import React, { useState } from 'react'
import Home from './home';
import Tasks from './tasks';


const Classroom = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("1");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu onClick={(e) => {
          setSelectedMenu(e.key);
        }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <ListAltOutlinedIcon />,
              label: 'Tasks',
            },
            {
              key: '3',
              icon: <CalendarOutlined />,
              label: 'Calendar',
            },
            {
              key: 'sub1',
              label: 'Enrolled',
              icon: <MailOutlined />,
              children: [
                {
                  key: '4',
                  icon: <ScheduleOutlined />,
                  label: 'To-do',
                },
                {
                  key: '5',
                  icon: <BoldOutlined />,
                  label: 'Bf204',
                },
              ],
            },
            {
              key: '6',
              icon: <ArchiveOutlinedIcon />,
              label: 'Archived Classes',
            },
            {
              key: '7',
              icon: <SettingOutlined />,
              label: 'Settings',
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         {selectedMenu === "1" ? <Home/> : <Tasks/>}

        </Content>
      </Layout>
    </Layout>
  )
}

export default Classroom