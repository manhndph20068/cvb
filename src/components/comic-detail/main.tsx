"use client";
import { Col, Row } from "antd";
import InforComic from "./infor.comic";
import { useSelector } from "@/src/lib/redux";

interface IProps {
  DetailInforComic: IDetailComic;
}

const MainInforComic = (props: IProps) => {
  const { DetailInforComic } = props;

  return (
    <div style={{ marginTop: "10px" }}>
      <Row justify="center">
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 23 }}
          lg={{ span: 22 }}
          xl={{ span: 19 }}
          xxl={{ span: 17 }}
          style={{ border: "1px solid blue" }}
        >
          <InforComic DetailInforComic={DetailInforComic} />
        </Col>
      </Row>
    </div>
  );
};
export default MainInforComic;
