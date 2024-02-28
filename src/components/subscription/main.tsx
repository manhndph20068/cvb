"use client";
import { Col, Row } from "antd";
import Subscription from "./subscription";

interface IProps {
  resSubscriptions: IBackendResponse<Subscriptions[]> | undefined;
}

const Main = (props: IProps) => {
  const { resSubscriptions } = props;
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
          <Subscription resSubscriptions={resSubscriptions} />
        </Col>
      </Row>
    </>
  );
};
export default Main;
