"use client";
import {
  Breadcrumb,
  Button,
  Col,
  Flex,
  Layout,
  List,
  Row,
  Space,
  Tag,
} from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";
import Link from "next/link";
import "./infor.comic.scss";
import {
  AppstoreOutlined,
  EyeOutlined,
  HeartOutlined,
  HomeOutlined,
  MonitorOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { useEffect, useRef, useState } from "react";

interface IProps {
  DetailInforComic: IDetailComic;
}

const paragraphStyle: React.CSSProperties = {
  display: "-webkit-box",
  WebkitLineClamp: 2,
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  fontSize: "16px",
};

const InforComic = (props: IProps) => {
  const { DetailInforComic } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const data = [
    {
      id: 36,
      name: "Chương 36",
    },
    {
      id: 35,
      name: "Chương 35",
    },
    {
      id: 34,
      name: "Chương 34",
    },
    {
      id: 33,
      name: "Chương 33",
    },
    {
      id: 32,
      name: "Chương 32",
    },
    {
      id: 31,
      name: "Chương 31",
    },
    {
      id: 30,
      name: "Chương 30",
    },
    {
      id: 29,
      name: "Chương 29",
    },
    {
      id: 28,
      name: "Chapter 28",
    },
    {
      id: 27,
      name: "Chương 27",
    },
    {
      id: 26,
      name: "Chapter 26",
    },
    {
      id: 25,
      name: "Chapter 25",
    },
    {
      id: 24,
      name: "Chapter 24",
    },
    {
      id: 23,
      name: "Chương 23",
    },
    {
      id: 22,
      name: "Chương 22",
    },
    {
      id: 21,
      name: "Chapter 21",
    },
    {
      id: 20,
      name: "Chapter 20",
    },
    {
      id: 19,
      name: "Chương 19",
    },
    {
      id: 18,
      name: "Chương 18",
    },
    {
      id: 17,
      name: "Chapter 17",
    },
    {
      id: 16,
      name: "Chapter 16",
    },
    {
      id: 15,
      name: "Chương 15",
    },
    {
      id: 14,
      name: "Chương 14",
    },
    {
      id: 13,
      name: "Chương 13",
    },
    {
      id: 12,
      name: "Chapter 12",
    },
    {
      id: 11,
      name: "Chapter 11",
    },
    {
      id: 10,
      name: "Chương 10",
    },
    {
      id: 9,
      name: "Chương 9",
    },
    {
      id: 8,
      name: "Chương 8",
    },
    {
      id: 7,
      name: "Chương 7",
    },
    {
      id: 6,
      name: "Chương 6",
    },
    {
      id: 5,
      name: "Chương 5",
    },
    {
      id: 4,
      name: "Chương 4",
    },
    {
      id: 3,
      name: "Chapter 3",
    },
    {
      id: 2,
      name: "Chapter 2",
    },
    {
      id: 1,
      name: "Chapter 1",
    },
    {
      id: 36,
      name: "Chương 36",
    },
    {
      id: 35,
      name: "Chương 35",
    },
    {
      id: 34,
      name: "Chương 34",
    },
    {
      id: 33,
      name: "Chương 33",
    },
    {
      id: 32,
      name: "Chương 32",
    },
    {
      id: 31,
      name: "Chương 31",
    },
    {
      id: 30,
      name: "Chương 30",
    },
    {
      id: 29,
      name: "Chương 29",
    },
    {
      id: 28,
      name: "Chapter 28",
    },
    {
      id: 27,
      name: "Chương 27",
    },
    {
      id: 26,
      name: "Chapter 26",
    },
    {
      id: 25,
      name: "Chapter 25",
    },
    {
      id: 24,
      name: "Chapter 24",
    },
    {
      id: 23,
      name: "Chương 23",
    },
    {
      id: 22,
      name: "Chương 22",
    },
    {
      id: 21,
      name: "Chapter 21",
    },
    {
      id: 20,
      name: "Chapter 20",
    },
    {
      id: 19,
      name: "Chương 19",
    },
    {
      id: 18,
      name: "Chương 18",
    },
    {
      id: 17,
      name: "Chapter 17",
    },
    {
      id: 16,
      name: "Chapter 16",
    },
    {
      id: 15,
      name: "Chương 15",
    },
    {
      id: 14,
      name: "Chương 14",
    },
    {
      id: 13,
      name: "Chương 13",
    },
    {
      id: 12,
      name: "Chapter 12",
    },
    {
      id: 11,
      name: "Chapter 11",
    },
    {
      id: 10,
      name: "Chương 10",
    },
    {
      id: 9,
      name: "Chương 9",
    },
    {
      id: 8,
      name: "Chương 8",
    },
    {
      id: 7,
      name: "Chương 7",
    },
    {
      id: 6,
      name: "Chương 6",
    },
    {
      id: 5,
      name: "Chương 5",
    },
    {
      id: 4,
      name: "Chương 4",
    },
    {
      id: 3,
      name: "Chapter 3",
    },
    {
      id: 2,
      name: "Chapter 2",
    },
    {
      id: 1,
      name: "Chapter 1",
    },
  ];

  useEffect(() => {
    if (ref.current) {
      const { clientHeight, scrollHeight } = ref.current;
      console.log(clientHeight, scrollHeight);
      setShowReadMoreButton(scrollHeight !== clientHeight);
    }
  }, []);

  return (
    <Layout>
      <Row>
        <Col span={24}>
          <div className="breadcrumb">
            <Breadcrumb
              style={{ fontSize: "16px" }}
              items={[
                {
                  title: (
                    <>
                      <Link href={"/"}>
                        <HomeOutlined />
                      </Link>
                    </>
                  ),
                },
                {
                  title: (
                    <>
                      <span>{DetailInforComic?.title}</span>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </Col>
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
      <Row>
        <Col span={24} style={{ border: "1px solid red" }}>
          <Content style={{ padding: "0 2%" }}>
            <div>
              <div
                style={isOpen ? { fontSize: "16px" } : paragraphStyle}
                ref={ref}
              >
                {DetailInforComic.description}
              </div>
              {showReadMoreButton && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <Button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "Thu nhỏ" : "Xem thêm"}
                  </Button>
                </div>
              )}
            </div>
          </Content>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ border: "1px solid orange", padding: "1% 1%" }}>
          <div
            id="scrollableDiv"
            style={{
              maxHeight: 450,
              overflow: "auto",
              padding: "0 16px",
              border: "1px solid rgba(140, 140, 140, 0.35)",
            }}
          >
            <InfiniteScroll
              dataLength={DetailInforComic?.chapters?.length}
              next={() => {}}
              hasMore={false}
              loader={null}
              endMessage={null}
              scrollableTarget="scrollableDiv"
            >
              <List
                dataSource={DetailInforComic?.chapters}
                renderItem={(item) => (
                  console.log(DetailInforComic),
                  (
                    <List.Item key={item.id}>
                      <Link
                        href={`/truyen-tranh/${DetailInforComic?.id}/${item?.id}`}
                      >
                        <div style={{ fontSize: "15px" }}>{item.name}</div>
                      </Link>
                    </List.Item>
                  )
                )}
              />
            </InfiniteScroll>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};
export default InforComic;
