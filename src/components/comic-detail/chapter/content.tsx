import Image from "next/image";

interface IProps {
  ChapterComic: IChapter;
  currentServer: number;
}
const Content = (props: IProps) => {
  const { ChapterComic, currentServer } = props;
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
    </>
  );
};
export default Content;
