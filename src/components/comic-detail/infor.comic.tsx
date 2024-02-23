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
import { useRouter } from "next/navigation";
import { useSelector } from "@/src/lib/redux";

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
  const visitedChapter = useSelector((state) => state.visitedComics.comics);
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const { clientHeight, scrollHeight } = ref.current;
      setShowReadMoreButton(scrollHeight !== clientHeight);
    }
  }, []);

  const visitedChapterIds = visitedChapter?.find(
    (item: any) => item.id === DetailInforComic?.id
  );
  console.log("visitedChapterIds", visitedChapterIds?.chapterIds);

  return (
    <Layout>
      <Row>
        <Col span={24}>
          <div className="breadcrumb" style={{ padding: "5px" }}>
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
        {/* <div style={{ height: "100%" }}> */}
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
            height: "100%",
            border: "1px solid green",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <div
              style={{
                padding: "5px 0",
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
                  padding: "3px 0",
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
                display: "flex",
                flexDirection: "column",
                fontSize: "17px",
              }}
            >
              <Row
                style={{
                  padding: "3px 0",
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
                display: "flex",
                flexDirection: "column",
                fontSize: "17px",
              }}
            >
              <Row
                style={{
                  padding: "3px 0",
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
                display: "flex",
                flexDirection: "column",
                fontSize: "17px",
              }}
            >
              <Row
                style={{
                  padding: "3px 0",
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
                display: "flex",
                flexDirection: "column",
                fontSize: "17px",
              }}
            >
              <Row
                style={{
                  padding: "3px 0",
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
                display: "flex",
                alignItems: "center",
                padding: "10px 0",
              }}
            >
              <Space size={[7, 7]} wrap>
                {DetailInforComic?.genres.map((genre) => {
                  return (
                    <Link href={`/genre/${genre?.id}`}>
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
                  onClick={() => {
                    router.push(
                      `/truyen-tranh/${DetailInforComic?.id}/${+DetailInforComic
                        ?.chapters[DetailInforComic?.chapters.length - 1].id}`
                    );
                  }}
                >
                  Đọc từ đầu
                </Button>
                <Button danger icon={<HeartOutlined />} size="large">
                  Theo dõi
                </Button>
              </Flex>
            </div>
          </div>
        </Col>
        {/* </div> */}
      </Row>
      <Row>
        <Col span={24} style={{ border: "1px solid red", marginTop: "10px" }}>
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
        <Col
          span={24}
          style={{
            border: "1px solid orange",
            padding: "1% 1%",
            marginTop: "10px",
          }}
        >
          <div
            id="scrollableDiv"
            style={{
              maxHeight: 550,
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
                  <List.Item key={item?.id}>
                    <Link
                      href={`/truyen-tranh/${DetailInforComic?.id}/${item?.id}`}
                    >
                      <div
                        style={{
                          fontSize: "15px",
                          color: visitedChapterIds?.chapterIds.includes(item.id)
                            ? "#0000FF"
                            : "inherit",
                        }}
                      >
                        {item?.name ? item?.name : item?.id}
                      </div>
                    </Link>
                  </List.Item>
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
