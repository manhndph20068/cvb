import Main from "@/src/components/completed-comics/main";
import { sendRequest } from "@/src/utils/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Truyện đã hoàn thành",
  description: "completedcomicspage",
};

export const revalidate = 900;
const TruyenFullPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const CompletedComicsData = await sendRequest<IModelPaginate<ICommics>>({
    url: `${process.env.COMICS_API_URL}/completed-comics`,
    method: "GET",
    nextOption: { revalidate: revalidate },
    queryParams: { page: searchParams?.page || 1 },
  });

  return (
    <>
      <Main CompletedComicsData={CompletedComicsData} />
    </>
  );
};
export default TruyenFullPage;
