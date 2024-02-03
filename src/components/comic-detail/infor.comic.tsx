"use client";
import { Button, Col, Flex, Row, Space, Tag } from "antd";
import Image from "next/image";
import Link from "next/link";
import "./infor.comic.scss";
import {
  AppstoreOutlined,
  EyeOutlined,
  HeartOutlined,
  MonitorOutlined,
  UserOutlined,
} from "@ant-design/icons";
interface IProps {
  DetailInforComic: IDetailComic;
}

const InforComic = (props: IProps) => {
  const { DetailInforComic } = props;
  return (
    <Row>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 24 }}
        xl={{ span: 5 }}
        xxl={{ span: 5 }}
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "15px 0",
          border: "1px solid blue",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "290px",
            width: "216px",
          }}
        >
          <Image
            fill
            style={{
              objectFit: "cover",
              borderRadius: "5px",
            }}
            src={DetailInforComic.thumbnail}
            alt={DetailInforComic.title}
          />
        </div>
      </Col>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 24 }}
        xl={{ span: 19 }}
        xxl={{ span: 19 }}
        style={{
          display: "flex",
          justifyContent: "start",
          padding: "15px 15px",
        }}
      >
        <div
          style={{
            // minHeight: "360px",
            minHeight: "320px",
            width: "100%",
          }}
        >
          <div
            style={{
              minHeight: "12.5%",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {DetailInforComic.title}
          </div>
          <div
            style={{
              minHeight: "9.5%",
              display: "flex",
              flexDirection: "column",
              fontSize: "17px",
            }}
          >
            <Row
              style={{
                marginTop: "auto",
              }}
            >
              <Col
                xs={{ span: 8 }}
                sm={{ span: 8 }}
                md={{ span: 4 }}
                lg={{ span: 4 }}
                xl={{ span: 4 }}
                xxl={{ span: 4 }}
                style={{ fontSize: "17px" }}
              >
                <UserOutlined style={{ marginRight: "5px" }} />
                Tác giả
              </Col>
              <Col
                xs={{ span: 16 }}
                sm={{ span: 16 }}
                md={{ span: 20 }}
                lg={{ span: 20 }}
                xl={{ span: 20 }}
                xxl={{ span: 20 }}
                style={{
                  fontSize: "17px",
                }}
              >
                {DetailInforComic?.authors}
              </Col>
            </Row>
          </div>
          <div
            style={{
              minHeight: "9.5%",
              display: "flex",
              flexDirection: "column",
              fontSize: "17px",
            }}
          >
            <Row
              style={{
                marginTop: "auto",
              }}
            >
              <Col
                xs={{ span: 8 }}
                sm={{ span: 8 }}
                md={{ span: 4 }}
                lg={{ span: 4 }}
                xl={{ span: 4 }}
                xxl={{ span: 4 }}
                style={{ fontSize: "17px" }}
              >
                <AppstoreOutlined style={{ marginRight: "5px" }} />
                Tên khác
              </Col>
              <Col
                xs={{ span: 16 }}
                sm={{ span: 16 }}
                md={{ span: 20 }}
                lg={{ span: 20 }}
                xl={{ span: 20 }}
                xxl={{ span: 20 }}
                style={{ fontSize: "17px" }}
              >
                {DetailInforComic?.other_names[0]}
              </Col>
            </Row>
          </div>
          <div
            style={{
              minHeight: "9.5%",
              display: "flex",
              flexDirection: "column",
              fontSize: "17px",
            }}
          >
            <Row
              style={{
                marginTop: "auto",
              }}
            >
              <Col
                xs={{ span: 8 }}
                sm={{ span: 8 }}
                md={{ span: 4 }}
                lg={{ span: 4 }}
                xl={{ span: 4 }}
                xxl={{ span: 4 }}
                style={{ fontSize: "17px" }}
              >
                <MonitorOutlined style={{ marginRight: "5px" }} />
                Tình trạng
              </Col>
              <Col
                xs={{ span: 16 }}
                sm={{ span: 16 }}
                md={{ span: 20 }}
                lg={{ span: 20 }}
                xl={{ span: 20 }}
                xxl={{ span: 20 }}
                style={{ fontSize: "17px" }}
              >
                {DetailInforComic?.status}
              </Col>
            </Row>
          </div>
          <div
            style={{
              minHeight: "9.5%",
              display: "flex",
              flexDirection: "column",
              fontSize: "17px",
            }}
          >
            <Row
              style={{
                marginTop: "auto",
              }}
            >
              <Col
                xs={{ span: 8 }}
                sm={{ span: 8 }}
                md={{ span: 4 }}
                lg={{ span: 4 }}
                xl={{ span: 4 }}
                xxl={{ span: 4 }}
                style={{ fontSize: "17px" }}
              >
                <HeartOutlined style={{ marginRight: "5px" }} />
                Lượt thích
              </Col>
              <Col
                xs={{ span: 16 }}
                sm={{ span: 16 }}
                md={{ span: 20 }}
                lg={{ span: 20 }}
                xl={{ span: 20 }}
                xxl={{ span: 20 }}
                style={{ fontSize: "17px" }}
              >
                {DetailInforComic?.followers}
              </Col>
            </Row>
          </div>
          <div
            style={{
              minHeight: "9.5%",
              display: "flex",
              flexDirection: "column",
              fontSize: "17px",
            }}
          >
            <Row
              style={{
                marginTop: "auto",
              }}
            >
              <Col
                xs={{ span: 8 }}
                sm={{ span: 8 }}
                md={{ span: 4 }}
                lg={{ span: 4 }}
                xl={{ span: 4 }}
                xxl={{ span: 4 }}
                style={{ fontSize: "17px" }}
              >
                <EyeOutlined style={{ marginRight: "5px" }} />
                Lượt xem
              </Col>
              <Col
                xs={{ span: 16 }}
                sm={{ span: 16 }}
                md={{ span: 20 }}
                lg={{ span: 20 }}
                xl={{ span: 20 }}
                xxl={{ span: 20 }}
                style={{ fontSize: "17px" }}
              >
                {DetailInforComic?.total_views}
              </Col>
            </Row>
          </div>
          <div
            style={{
              minHeight: "19%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Space size={[5, 5]} wrap>
              {DetailInforComic?.genres.map((genre) => {
                return (
                  <Link href={"#"}>
                    <Tag color="processing" style={{ fontSize: "15px" }}>
                      {genre?.name}
                    </Tag>
                  </Link>
                );
              })}
            </Space>
          </div>
          <div
            style={{
              minHeight: "10%",
              display: "flex",
            }}
          >
            <Flex wrap="wrap" gap="small">
              <Button
                type="primary"
                size="large"
                style={{
                  background: "green",
                }}
              >
                Đọc từ đầu
              </Button>
              {/* <Button
                type="primary"
                size="large"
                style={{
                  background: "purple",
                }}
              >
                Đọc mới nhất
              </Button> */}
              <Button danger icon={<HeartOutlined />} size="large">
                Theo dõi
              </Button>
            </Flex>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default InforComic;
