"use client";

import { useSelector } from "@/src/lib/redux";
import { Col, List, Row } from "antd";
import ComicsVisited from "./comics.visited";

const Main = () => {
  const listComicsVisited = useSelector((state) => state.visitedComics);
  return (
    <>
      <Row gutter={[0, 15]} justify="center">
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 23 }}
          lg={{ span: 22 }}
          xl={{ span: 19 }}
          xxl={{ span: 17 }}
        >
          <ComicsVisited listComicsVisited={listComicsVisited} />
        </Col>
      </Row>
    </>
  );
};
export default Main;
