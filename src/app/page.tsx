import { Metadata } from "next";
import { sendRequest } from "../utils/api";
import Main from "../components/home-page/main";
export const revalidate = 18;
export const metadata: Metadata = {
  title: "Đọc truyện tranh online",
  description: "homepage",
};

export default async function IndexPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  console.log("params", params);
  console.log("searchParams", searchParams);
  const RecommendComics = await sendRequest({
    url: `${process.env.COMICS_API_URL}/recommend-comics`,
    method: "GET",
    nextOption: { revalidate: revalidate },
  });

  const RecentUpdateComicsData = await sendRequest<IModelPaginate<ICommics>>({
    url: `${process.env.COMICS_API_URL}/recent-update-comics`,
    method: "GET",
    nextOption: { revalidate: revalidate },
    // nextOption: { cache: "no-store" },
    queryParams: { page: searchParams?.page || 1 },
  });

  const hhh = await sendRequest({
    url: `http://worldtimeapi.org/api/timezone/Asia/Bangkok`,
    method: "GET",
    nextOption: { revalidate: revalidate },
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
