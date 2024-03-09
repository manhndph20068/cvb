import { LeftOutlined, ProfileTwoTone, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IProps {
  ChapterComic: IChapter;
  currentServer: number;
  nextButton: boolean;
  prevButton: boolean;
  handleNextChapter: () => void;
  handlePrevChapter: () => void;
}
const Content = (props: IProps) => {
  const {
    ChapterComic,
    currentServer,
    nextButton,
    prevButton,
    handleNextChapter,
    handlePrevChapter,
  } = props;
  const router = useRouter();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {ChapterComic?.images?.map((item) => {
          return (
            <Image
              key={item.page}
              style={{ width: "100%", height: "auto", margin: 0, padding: 0 }}
              width={0}
              height={0}
              sizes="100vw"
              src={currentServer === 1 ? item.src : item.backup_src}
              alt={item.src}
            />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          padding: "25px",
        }}
      >
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
        >
          Chapter trước
        </Button>
        <Button
          type={nextButton ? "primary" : "default"}
          icon={<RightOutlined />}
          disabled={!nextButton}
          onClick={
            nextButton ? () => handleNextChapter() : () => alert("đã hết")
          }
        >
          Chapter sau
        </Button>
      </div>
    </>
  );
};
export default Content;
