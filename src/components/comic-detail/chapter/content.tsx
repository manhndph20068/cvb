import Image from "next/image";

interface IProps {
  ChapterComic: IChapter;
}
const Content = (props: IProps) => {
  const { ChapterComic } = props;
  console.log("ChapterComic", ChapterComic);
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
              loading="lazy"
              sizes="100vw"
              src={item.src}
              alt={item.src}
            />
          );
        })}
      </div>
    </>
  );
};
export default Content;
