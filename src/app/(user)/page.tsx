import { Metadata } from "next";
import { sendRequest } from "../../utils/api";
import Main from "../../components/home-page/main";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/src/utils/authOptions";

export const revalidate = 900;
export const metadata: Metadata = {
  title:
    "Đọc truyện tranh online miễn phí tại Mangahub - Author Nguyen Duc Manh",
  description: "homepage",
};

export default async function IndexPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const session = await getServerSession(authOptions);
  console.log("session", session);

  const RecommendComics = await sendRequest({
    url: `${process.env.COMICS_API_URL}/recommend-comics`,
    method: "GET",
    nextOption: { revalidate: revalidate },
  });

  const RecentUpdateComicsData = await sendRequest<IModelPaginate<ICommics>>({
    url: `${process.env.COMICS_API_URL}/recent-update-comics`,
    method: "GET",
    nextOption: { revalidate: revalidate },
    queryParams: { page: searchParams?.page || 1 },
  });

  const DataTopOfMonth = await sendRequest<IModelPaginate<ICommics>>({
    url: `${process.env.COMICS_API_URL}/top/monthly`,
    method: "GET",
    nextOption: { revalidate: revalidate },
    queryParams: { page: 1 },
  });

  const DataTopOfWeek = await sendRequest<IModelPaginate<ICommics>>({
    url: `${process.env.COMICS_API_URL}/top/weekly`,
    method: "GET",
    nextOption: { revalidate: revalidate },
    queryParams: { page: 1 },
  });

  const DataTopOfDaily = await sendRequest<IModelPaginate<ICommics>>({
    url: `${process.env.COMICS_API_URL}/top/daily`,
    method: "GET",
    nextOption: { revalidate: revalidate },
    queryParams: { page: 1 },
  });

  // console.log("DataTopOfMonth", RecentUpdateComicsData);
  return (
    <Main
      RecommendComics={RecommendComics}
      RecentUpdateComicsData={RecentUpdateComicsData}
      DataTopOfMonth={DataTopOfMonth?.comics.slice(0, 7)}
      DataTopOfWeek={DataTopOfWeek?.comics.slice(0, 7)}
      DataTopOfDaily={DataTopOfDaily?.comics.slice(0, 7)}
    />
  );
}
