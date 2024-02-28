"use client";
import { Col, Row } from "antd";
import NewComic from "./new.comic";

interface IProps {
  NewComicsData: IModelPaginate<ICommics>;
}

const Main = (props: IProps) => {
  const { NewComicsData } = props;

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
          <NewComic NewComicsData={NewComicsData} />
        </Col>
      </Row>
    </>
  );
};
export default Main;
