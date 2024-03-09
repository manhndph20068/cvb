"use client";
import { Col, FloatButton, Row } from "antd";
import Title from "./title";
import Content from "./content";
import { doAddAction } from "@/src/lib/redux/slices/visitedComicsSlice/visitedComicsSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface IProps {
  ChapterComic: IChapter;
  comicId: string;
  chapterId: number;
  DetailInforComic: IDetailComic;
}

const MainChapterOfComic = (props: IProps) => {
  const { ChapterComic, comicId, chapterId, DetailInforComic } = props;
  const [currentServer, setCurrentServer] = useState<number>(1);
  const [listChapter, setListChapter] = useState<
    Array<{ value: string; label: string }>
  >([]);
  const [currentChapter, setCurrentChapter] = useState<string>("0");
  const [nextButton, setNextButton] = useState<boolean>(true);
  const [prevButton, setPrevButton] = useState<boolean>(true);
  const [scrollDirection, setScrollDirection] = useState<number>(0);
  const [hide, setHide] = useState<boolean>(false);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > scrollDirection) {
        setHide(false);
      } else {
        setHide(true);
      }
      setScrollDirection(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);

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

  useEffect(() => {
    if (ChapterComic?.chapters) {
      const listChapter: Array<{ value: string; label: string }> =
        ChapterComic?.chapters.map((item) => {
          return {
            value: item.id.toString(),
            label: item.name,
          };
        });
      setListChapter(listChapter);
    }
    if (chapterId && ChapterComic?.chapters) {
      const nameChapter = ChapterComic?.chapters.find(
        (item) => +item.id === +chapterId
      );
      setCurrentChapter(nameChapter?.id.toString()!);
    }
  }, [ChapterComic]);

  useEffect(() => {
    const index = listChapter.findIndex(
      (item) => item.value === currentChapter
    );
    if (index <= 0) {
      setNextButton(false);
    }
    if (index > 0) {
      setNextButton(true);
    }
    if (index < listChapter.length - 1) {
      setPrevButton(true);
    }
    if (index >= listChapter.length - 1) {
      setPrevButton(false);
    }
  }, [currentChapter]);

  const handleNextChapter = () => {
    const index = listChapter.findIndex(
      (item) => item.value === currentChapter
    );
    if (index <= 0) {
      alert("đã hết");
    }
    if (index <= listChapter.length - 1 && index > 0) {
      router.push(`/truyen-tranh/${comicId}/${+listChapter[index - 1].value}`);
    }
  };

  const handlePrevChapter = () => {
    const index = listChapter.findIndex(
      (item) => item.value === currentChapter
    );
    console.log("index", listChapter.length - 1, index);
    if (index >= listChapter.length - 1) {
      alert("đã hết");
    }
    if (index < listChapter.length - 1 && index < listChapter.length - 1) {
      router.push(`/truyen-tranh/${comicId}/${+listChapter[index + 1].value}`);
    }
  };

  return (
    <div
      style={{ paddingTop: "10px", backgroundColor: "black", color: "white" }}
    >
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
            listChapter={listChapter}
            currentChapter={currentChapter}
            nextButton={nextButton}
            prevButton={prevButton}
            handleNextChapter={handleNextChapter}
            handlePrevChapter={handlePrevChapter}
            hide={hide}
          />
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 22 }}
          lg={{ span: 22 }}
          xl={{ span: 16 }}
          xxl={{ span: 13 }}
          style={{ marginTop: "5px" }}
        >
          <Content
            ChapterComic={ChapterComic}
            currentServer={currentServer}
            nextButton={nextButton}
            prevButton={prevButton}
            handleNextChapter={handleNextChapter}
            handlePrevChapter={handlePrevChapter}
          />
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
