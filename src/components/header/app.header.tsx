"use client";

import { MenuOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Row, Popover } from "antd";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./app.header.scss";
import InputSearch from "./input.search";
import MenuHeader from "./menu.header";
import Link from "next/link";

interface IProps {
  resGenres: IGenre[];
}

const AppHeader = (props: IProps) => {
  const { resGenres } = props;
  const [openSearch, setOpenSearch] = useState(false);
  const pathname = usePathname();

  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };

  useEffect(() => {
    setOpenSearch(false);
  }, [pathname]);

  return (
    <>
      {openSearch && (
        <Row justify="center">
          <Col
            xs={{ span: 23 }}
            sm={{ span: 23 }}
            md={{ span: 23 }}
            lg={{ span: 22 }}
            xl={{ span: 19 }}
            xxl={{ span: 17 }}
          >
            <InputSearch />
          </Col>
        </Row>
      )}
      <Row justify="center">
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 23 }}
          lg={{ span: 22 }}
          xl={{ span: 19 }}
          xxl={{ span: 17 }}
          style={{
            border: "1px solid black",
            height: "70px",
          }}
        >
          <Row
            style={{
              height: "100%",
            }}
          >
            <Col
              md={5}
              sm={14}
              xs={14}
              style={{
                border: "1px solid black",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link href={"/"}>
                <div style={{ width: "100%" }}>
                  <img
                    src="https://raw.githubusercontent.com/manhndph20068/image-store/main/logo12.png"
                    alt="logo"
                    style={{
                      height: "43px",
                      paddingLeft: "15px",
                    }}
                  />
                </div>
              </Link>
            </Col>
            <Col md={14} sm={0} xs={0}>
              <MenuHeader resGenres={resGenres} />
            </Col>

            <Col md={5} sm={0} xs={0}>
              <div className="right-content">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  <Button
                    type="primary"
                    style={{ background: "#8E5D4F" }}
                    size="large"
                    color="#8E5D4F"
                    shape="circle"
                    icon={<SearchOutlined />}
                    onClick={() => handleOpenSearch()}
                  />
                  <Button
                    type="link"
                    style={{ background: "#8E5D4F", color: "white" }}
                    shape="round"
                    icon={<UserOutlined />}
                    ghost
                    size="large"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={0} sm={10} xs={10}>
              <div
                className="right-content"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "100%",
                  gap: "10px",
                }}
              >
                <Button
                  type="primary"
                  style={{ background: "#8E5D4F" }}
                  size="large"
                  color="#8E5D4F"
                  shape="circle"
                  icon={<SearchOutlined />}
                  onClick={() => handleOpenSearch()}
                />
                <Button
                  type="text"
                  icon={<MenuOutlined />}
                  size="large"
                ></Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default AppHeader;
