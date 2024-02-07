"use client";
import { Col, FloatButton, Row } from "antd";
import Title from "./title";
import Content from "./content";

interface IProps {
  ChapterComic: IChapter;
  comicId: string;
  chapterId: number;
}

const MainChapterOfComic = (props: IProps) => {
  const { ChapterComic, comicId, chapterId } = props;

  if (ChapterComic?.chapter_name) {
    console.log("add", ChapterComic?.chapter_name);
  }

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
          style={{ border: "1px solid red" }}
        >
          <Title
            chapterId={chapterId}
            comicId={comicId}
            ChapterComic={ChapterComic}
          />
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 23 }}
          xl={{ span: 16 }}
          xxl={{ span: 13 }}
          style={{ border: "1px solid black", marginTop: "5px" }}
        >
          <Content ChapterComic={ChapterComic} />
        </Col>
        <Col
          xs={{ span: 0 }}
          sm={{ span: 0 }}
          md={{ span: 0 }}
          lg={{ span: 0 }}
          xl={{ span: 19 }}
          xxl={{ span: 17 }}
        >
          <FloatButton.BackTop />
        </Col>
      </Row>
    </div>
  );
};
export default MainChapterOfComic;
