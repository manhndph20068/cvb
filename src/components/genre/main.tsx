"use client";
import { Col, Row } from "antd";
import GenreComics from "./genre.comics";

interface IProps {
  DetailInforComic: IModelPaginate<ICommics>;
  infoGenre: IGenre;
}
const Main = (props: IProps) => {
  const { DetailInforComic, infoGenre } = props;

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
          <GenreComics
            DetailInforComic={DetailInforComic}
            infoGenre={infoGenre}
          />
        </Col>
      </Row>
    </>
  );
};
export default Main;
