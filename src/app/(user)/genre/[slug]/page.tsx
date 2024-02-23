import Main from "@/src/components/genre/main";
import { sendRequest } from "@/src/utils/api";
import { Metadata, ResolvingMetadata } from "next";

export const revalidate = 900;

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const fetchDataGenre = async (params: string) => {
  const resGenres = await sendRequest<IGenre[]>({
    url: `${process.env.COMICS_API_URL}/genres`,
    method: "GET",
    nextOption: { cache: "no-store" },
  });
  const infoGenre = resGenres.find((genre) => genre.id === params);
  return infoGenre;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata | undefined> {
  const infoGenre = await fetchDataGenre(params.slug);
  return {
    metadataBase: new URL("https://cdnntx.com"),
    title: "Thể loại " + infoGenre?.name + " - " + infoGenre?.description,
    description: infoGenre?.description,
    openGraph: {
      title: "Thể loại " + infoGenre?.name,
      description: infoGenre?.description,
      type: "website",
    },
  };
}

const GenrePage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const DetailInforComic = await sendRequest<IModelPaginate<ICommics>>({
    url: `${process.env.COMICS_API_URL}/genres/${params.slug}`,
    method: "GET",
    nextOption: { revalidate: revalidate },
    queryParams: { page: searchParams?.page || 1 },
  });
  const infoGenre = await fetchDataGenre(params.slug);
  if (infoGenre === undefined) {
    return <div>Genre not found!</div>;
  } else {
    return <Main DetailInforComic={DetailInforComic} infoGenre={infoGenre} />;
  }
};
export default GenrePage;
