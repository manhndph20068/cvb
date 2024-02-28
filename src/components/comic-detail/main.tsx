"use client";
import { Col, Row } from "antd";
import InforComic from "./infor.comic";

interface IProps {
  DetailInforComic: IDetailComic;
  resSubscriptions?: IBackendResponse<Subscriptions[]>;
}

const MainInforComic = (props: IProps) => {
  const { DetailInforComic, resSubscriptions } = props;

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
        >
          <InforComic
            DetailInforComic={DetailInforComic}
            resSubscriptions={resSubscriptions}
          />
        </Col>
      </Row>
    </div>
  );
};
export default MainInforComic;
