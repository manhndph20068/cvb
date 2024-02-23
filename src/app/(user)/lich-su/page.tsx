import Main from "@/src/components/comic-visited/main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lịch sử đọc truyện",
  description: "visitedpage",
};

const LichSuPage = () => {
  return (
    <>
      <Main />
    </>
  );
};
export default LichSuPage;
