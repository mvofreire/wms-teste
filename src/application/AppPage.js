import React, { useState } from "react";
import { IconBubble, AlterarFabricaSelect } from "components";
import {
  Layout,
  Header,
  Content,
  Sider,
  Row,
  Col,
  SiderToggle,
  Font,
  Blue
} from "@hbsis.uikit/react";
import { Fabrica } from "icons";

const styles = {
  profile: {
    fontFamily: Font.normal,
    fontSize: 14,
    fontWeight: 600,
    color: Blue.semiDark
  }
};
const AlterarFabrica = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", width: 200 }}>
      <IconBubble>
        <Fabrica color={Blue.semiDark} />
      </IconBubble>
      <AlterarFabricaSelect />
    </div>
  );
};

const UserProfile = () => {
  const username = "Patricia Pereira Lima Machado";
  const nameParts = username.split(" ");

  const firstName = nameParts[0];
  const lastName = nameParts[nameParts.length - 1];
  const iniciais = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconBubble>
        <span style={styles.profile}>{iniciais}</span>
      </IconBubble>
      <span style={{ ...styles.profile, paddingLeft: 5 }}>{username}</span>
    </div>
  );
};

const AppPage = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Layout>
      <Sider visible={visible} minWidth="300px">
        SideBar
      </Sider>
      <Layout>
        <Header>
          <Row middle="xs" style={{ width: "100%" }} between="xs">
            <Col xs={2}>
              <div style={{ padding: 5 }}>
                <SiderToggle
                  active={visible}
                  onToggle={_ => setVisible(!visible)}
                />
              </div>
            </Col>
            <Col xs={6}>
              <div style={{ display: "flex" }}>
                <AlterarFabrica />
                <UserProfile />
              </div>
            </Col>
          </Row>
        </Header>

        <Content style={{ backgroundColor: "#f5f9ff" }}>Content</Content>
      </Layout>
    </Layout>
  );
};

export default AppPage;
