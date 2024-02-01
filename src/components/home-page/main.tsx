"use client";
import { Row, Col, Layout } from "antd";
import RecommnendComics from "./recommend.comics";
import RecentUpdateComics from "./recent.update.comics";

interface IProps {
  RecommendComics: any;
  RecentUpdateComicsData: IModelPaginate<ICommics>;
}

const Main = (props: IProps) => {
  const { RecommendComics, RecentUpdateComicsData } = props;

  return (
    <Layout>
      <Row gutter={[0, 15]} justify="center">
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 23 }}
          lg={{ span: 22 }}
          xl={{ span: 19 }}
          xxl={{ span: 17 }}
        >
          <RecommnendComics RecommendComics={RecommendComics} />
        </Col>
      </Row>
      <Row gutter={[16, 16]} justify="center">
        <Col
          xs={{ span: 16 }}
          sm={{ span: 16 }}
          md={{ span: 16 }}
          lg={{ span: 15 }}
          xl={{ span: 12 }}
          xxl={{ span: 11 }}
          style={{ border: "1px solid red" }}
        >
          <RecentUpdateComics data={RecentUpdateComicsData} />
        </Col>
        <Col
          xs={{ span: 7 }}
          sm={{ span: 7 }}
          md={{ span: 7 }}
          lg={{ span: 7 }}
          xl={{ span: 7 }}
          xxl={{ span: 6 }}
          style={{ border: "1px solid green" }}
        >
          top
        </Col>
      </Row>
    </Layout>
  );
};
export default Main;
