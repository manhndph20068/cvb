"use client";
import {
  HomeOutlined,
  HomeTwoTone,
  LeftOutlined,
  ProfileTwoTone,
  RightOutlined,
} from "@ant-design/icons";
import { Affix, Breadcrumb, Button, ConfigProvider, Flex, Select } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

interface IProps {
  ChapterComic: IChapter;
  comicId: string;
  chapterId: number;
  setCurrentServer: (value: number) => void;
  currentServer: number;
  listChapter: Array<{ value: string; label: string }>;
  currentChapter: string;
  nextButton: boolean;
  prevButton: boolean;
  handleNextChapter: () => void;
  handlePrevChapter: () => void;
  hide: boolean;
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
  const {
    ChapterComic,
    comicId,
    chapterId,
    setCurrentServer,
    currentServer,
    listChapter,
    currentChapter,
    nextButton,
    prevButton,
    handleNextChapter,
    handlePrevChapter,
    hide,
  } = props;

  const [affixCtrl, setAffixCtrl] = useState<boolean>(false);

  const selectRef = useRef(null);
  const router = useRouter();

  const handleChange = (e: any) => {
    router.push(`/truyen-tranh/${comicId}/${+e}`);
  };

  const ControlElement = () => {
    return (
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
    );
  };

  return (
    <div className="header" style={{ padding: "7px" }}>
      <div className="breadcrumb">
        <ConfigProvider
          theme={{
            components: {
              Breadcrumb: {
                colorText: "white",
                itemColor: "white",
                lastItemColor: "white",
                linkColor: "white",
                linkHoverColor: "white",
                separatorColor: "white",
              },
            },
          }}
        >
          <Breadcrumb
            style={{ fontSize: "16px", color: "white" }}
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
        </ConfigProvider>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "5px",
            background: "#E4E4E4",
          }}
        >
          {/* <div
            className="ctrl-chapter"
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "5px",
              background: "#E4E4E4",
            }}
          ></div> */}
          <ControlElement />
        </div>

        <Affix
          onChange={(affixed) => {
            setAffixCtrl(affixed!);
          }}
        >
          <div
            className="ctrl-chapter"
            style={
              affixCtrl && hide
                ? CtrlAffixed
                : {
                    display: "none",
                  }
            }
          >
            <ControlElement />
          </div>
        </Affix>
      </div>
    </div>
  );
};
export default Title;
