"use client";
import { Col, Row } from "antd";
import CompletedComic from "./completed.comic";

interface IProps {
  CompletedComicsData: IModelPaginate<ICommics>;
}

const Main = (props: IProps) => {
  const { CompletedComicsData } = props;
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
          <CompletedComic CompletedComicsData={CompletedComicsData} />
        </Col>
      </Row>
    </>
  );
};
export default Main;
