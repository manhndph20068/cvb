"use client";
import {
  HomeOutlined,
  HomeTwoTone,
  LeftOutlined,
  ProfileTwoTone,
  RightOutlined,
} from "@ant-design/icons";
import { Affix, Breadcrumb, Button, Flex, Select } from "antd";
import { setServers } from "dns";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

interface IProps {
  ChapterComic: IChapter;
  comicId: string;
  chapterId: number;
  setCurrentServer: (value: number) => void;
  currentServer: number;
}

const CtrlAffixed: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  padding: "5px",
  background: "#E4E4E4",
  position: "fixed",
  left: 0,
  right: 0,
};

const Title = (props: IProps) => {
  const { ChapterComic, comicId, chapterId, setCurrentServer, currentServer } =
    props;
  const [listChapter, setListChapter] = useState<
    Array<{ value: string; label: string }>
  >([]);
  const [currentChapter, setCurrentChapter] = useState<string>("0");
  const [affixCtrl, setAffixCtrl] = useState<boolean>(false);
  const [nextButton, setNextButton] = useState<boolean>(true);
  const [prevButton, setPrevButton] = useState<boolean>(true);

  const selectRef = useRef(null);
  const router = useRouter();

  const handleChange = (e: any) => {
    router.push(`/truyen-tranh/${comicId}/${+e}`);
  };

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

  return (
    <div className="header" style={{ padding: "7px" }}>
      <div className="breadcrumb">
        <Breadcrumb
          style={{ fontSize: "16px" }}
          items={[
            {
              title: (
                <>
                  <Link href={"/"} prefetch={false}>
                    <HomeOutlined />
                  </Link>
                </>
              ),
            },
            {
              title: (
                <>
                  <Link href={`/truyen-tranh/${comicId}`} prefetch={false}>
                    <span>{ChapterComic?.comic_name}</span>
                  </Link>
                </>
              ),
            },
            {
              title: (
                <>
                  <span>{ChapterComic?.chapter_name}</span>
                </>
              ),
            },
          ]}
        />
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <p style={{ fontSize: "24px" }} className="title">
          <Link href={`/truyen-tranh/${comicId}`} prefetch={false}>
            {ChapterComic?.comic_name}
          </Link>{" "}
          - {ChapterComic?.chapter_name}
        </p>
      </div>
      <div style={{ textAlign: "center", color: "red", fontSize: "16px" }}>
        <span>Chọn server khác nếu không tải được ảnh</span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          padding: "10px",
        }}
      >
        <Button
          type={currentServer === 1 ? "primary" : "default"}
          onClick={() => {
            setCurrentServer(1);
          }}
        >
          Sever 1
        </Button>
        <Button
          type={currentServer === 2 ? "primary" : "default"}
          onClick={() => {
            setCurrentServer(2);
          }}
        >
          Sever 2
        </Button>
      </div>
      <div>
        <Affix
          onChange={(affixed) => {
            setAffixCtrl(affixed!);
          }}
        >
          <div
            className="ctrl-chapter"
            style={
              affixCtrl
                ? CtrlAffixed
                : {
                    display: "flex",
                    justifyContent: "center",
                    padding: "5px",
                    background: "#E4E4E4",
                  }
            }
          >
            <Flex gap="small" wrap="wrap">
              <Button
                style={{
                  backgroundColor: "tranparent",
                }}
                onClick={() => {
                  router.push(`/`);
                }}
                icon={<HomeTwoTone />}
              />

              <Button
                type={prevButton ? "primary" : "default"}
                icon={<LeftOutlined />}
                disabled={!prevButton}
                onClick={
                  prevButton
                    ? () => {
                        handlePrevChapter();
                      }
                    : () => {
                        alert("đã hết");
                      }
                }
              />
              <Select
                ref={selectRef}
                value={currentChapter}
                style={{ width: 180 }}
                onChange={(e) => handleChange(e)}
                options={listChapter}
                getPopupContainer={(trigger) => trigger.parentElement}
              />
              <Button
                type={nextButton ? "primary" : "default"}
                icon={<RightOutlined />}
                disabled={!nextButton}
                onClick={
                  nextButton ? () => handleNextChapter() : () => alert("đã hết")
                }
              />
              <Button
                style={{
                  backgroundColor: "tranparent",
                }}
                onClick={() => {
                  router.push(`/truyen-tranh/${comicId}`);
                }}
                icon={<ProfileTwoTone />}
              />
            </Flex>
          </div>
        </Affix>
      </div>
    </div>
  );
};
export default Title;
