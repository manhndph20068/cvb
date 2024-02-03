import Main from "@/src/components/comic-detail/main";
import { sendRequest } from "@/src/utils/api";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const tempParam = params?.slug.split(".html") ?? [];
  const id = tempParam[0];
  const res = await sendRequest<IDetailComic>({
    url: `${process.env.COMICS_API_URL}/comics/${id}`,
    method: "GET",
    nextOption: { cache: "no-store" },
  });

  return {
    metadataBase: new URL("https://cdnntx.com"),
    title: res.title,
    description: res.description,
    openGraph: {
      title: res.title,
      description: res.description,
      type: "website",
      images: [res.thumbnail],
    },
  };
}

const ComicPage = async (props: any) => {
  const { params } = props;
  const tempParam = params?.slug.split(".html") ?? [];
  const id = tempParam[0];

  const DetailInforComic = await sendRequest<IDetailComic>({
    url: `${process.env.COMICS_API_URL}/comics/${id}`,
    method: "GET",
    nextOption: { cache: "no-store" },
  });

  return (
    <div style={{ marginTop: "20px" }}>
      <Main DetailInforComic={DetailInforComic} />
    </div>
  );
};
export default ComicPage;
