import { Col, Layout, Row } from "antd";
import Image from "next/image";

interface IProps {
  DetailInforComic: IDetailComic;
}

const InforComic = (props: IProps) => {
  const { DetailInforComic } = props;
  return (
    <div>
      <Row gutter={[15, 15]} justify="center">
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 23 }}
          lg={{ span: 22 }}
          xl={{ span: 8 }}
          xxl={{ span: 6 }}
          style={{ border: "1px solid red" }}
        >
          <div
            style={{
              position: "relative",
              height: "290px",
              width: "216px",
              textAlign: "center",
            }}
          >
            <Image
              fill
              style={{
                objectFit: "cover",
                borderRadius: "5px",
              }}
              src={DetailInforComic.thumbnail}
              alt="sdf"
            ></Image>
          </div>
        </Col>
        <Col
          xs={{ span: 23 }}
          sm={{ span: 23 }}
          md={{ span: 23 }}
          lg={{ span: 22 }}
          xl={{ span: 16 }}
          xxl={{ span: 16 }}
          style={{ border: "1px solid black" }}
        ></Col>
      </Row>
    </div>
  );
};
export default InforComic;
