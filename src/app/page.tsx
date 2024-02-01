import { Metadata } from "next";
import { Counter } from "../components/Counter/Counter";
import { sendRequest } from "../utils/api";
import Main from "../components/home-page/main";

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
    nextOption: { cache: "no-store" },
  });

  const RecentUpdateComicsData = await sendRequest<IModelPaginate<ICommics>>({
    url: `${process.env.COMICS_API_URL}/recent-update-comics`,
    method: "GET",
    nextOption: { cache: "no-store" },
    queryParams: { page: searchParams?.page || 1 },
  });

  return (
    <Main
      RecommendComics={RecommendComics}
      RecentUpdateComicsData={RecentUpdateComicsData}
    />
  );
}
