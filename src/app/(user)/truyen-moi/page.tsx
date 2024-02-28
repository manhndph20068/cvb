import Main from "@/src/components/new-comics/main";
import { sendRequest } from "@/src/utils/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đọc truyện mới nhất",
  description: "newcomicspage",
};

export const revalidate = 900;
const TruyenMoiPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const NewComicsData = await sendRequest<IModelPaginate<ICommics>>({
    url: `${process.env.COMICS_API_URL}/new-comics`,
    method: "GET",
    nextOption: { revalidate: revalidate },
    queryParams: { page: searchParams?.page || 1 },
  });

  return (
    <>
      <Main NewComicsData={NewComicsData} />
    </>
  );
};
export default TruyenMoiPage;
