"use client";
import { Col, FloatButton, Row } from "antd";
import Title from "./title";
import Content from "./content";
import { doAddAction } from "@/src/lib/redux/slices/visitedComicsSlice/visitedComicsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

interface IProps {
  ChapterComic: IChapter;
  comicId: string;
  chapterId: number;
  DetailInforComic: IDetailComic;
}

const MainChapterOfComic = (props: IProps) => {
  const { ChapterComic, comicId, chapterId, DetailInforComic } = props;
  const [currentServer, setCurrentServer] = useState<number>(1);
  const dispatch = useDispatch();

  if (ChapterComic?.chapter_name || ChapterComic?.chapters?.length > 0) {
    console.log("add", ChapterComic?.chapter_name);
    dispatch(
      doAddAction({
        id: comicId,
        chapterIds: chapterId,
        chapterName: ChapterComic?.chapter_name
          ? ChapterComic?.chapter_name
          : chapterId.toString(),
        image: DetailInforComic?.thumbnail,
        name: DetailInforComic?.title,
      })
    );
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
        >
          <Title
            chapterId={chapterId}
            comicId={comicId}
            ChapterComic={ChapterComic}
            setCurrentServer={setCurrentServer}
            currentServer={currentServer}
          />
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 23 }}
          xl={{ span: 16 }}
          xxl={{ span: 13 }}
          style={{ marginTop: "5px" }}
        >
          <Content ChapterComic={ChapterComic} currentServer={currentServer} />
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
