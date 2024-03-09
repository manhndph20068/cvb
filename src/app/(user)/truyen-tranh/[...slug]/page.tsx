import MainChapterOfComic from "@/src/components/comic-detail/chapter/main";
import MainInforComic from "@/src/components/comic-detail/main";
import { sendRequest } from "@/src/utils/api";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/src/utils/authOptions";

type Props = {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata | undefined> {
  const comic_id = params?.slug[0];
  const chapter_id = params?.slug[1];

  const resComic = await sendRequest<IDetailComic>({
    url: `${process.env.COMICS_API_URL}/comics/${comic_id}`,
    method: "GET",
    nextOption: { cache: "no-store" },
  });

  if (comic_id && chapter_id && params.slug.length === 2) {
    const resChapter = await sendRequest<IChapter>({
      url: `${process.env.COMICS_API_URL}/comics/${comic_id}/chapters/${chapter_id}`,
      method: "GET",
      nextOption: { cache: "no-store" },
    });

    if (!resChapter?.comic_name) {
      notFound();
    }
    return {
      metadataBase: new URL("https://cdnntx.com"),
      title: resChapter?.comic_name + " " + resChapter?.chapter_name,
      description: resComic?.description,
      openGraph: {
        title: resChapter?.comic_name + " - " + resChapter?.chapter_name,
        description: resComic?.description,
        type: "website",
        images: [resComic?.thumbnail],
      },
    };
  }

  if (comic_id && params?.slug?.length === 1) {
    return {
      metadataBase: new URL("https://cdnntx.com"),
      title: resComic?.title + " [Tới " + resComic?.chapters[0]?.name + "]",
      description: resComic?.description,
      openGraph: {
        title: resComic?.title,
        description: resComic?.description,
        type: "website",
        images: [resComic?.thumbnail],
      },
    };
  }
}

const ComicPage = async (props: any) => {
  const { params } = props;
  const comic_id = params?.slug[0];
  const chapter_id = params?.slug[1];
  const session = await getServerSession(authOptions);

  const DetailInforComic = await sendRequest<IDetailComic>({
    url: `${process.env.COMICS_API_URL}/comics/${comic_id}`,
    method: "GET",
    nextOption: { cache: "no-store" },
  });

  if (params.slug.length === 1) {
    let resSubscriptions: IBackendResponse<Subscriptions[]> | undefined;

    if (session) {
      resSubscriptions = await sendRequest<IBackendResponse<Subscriptions[]>>({
        url: `${process.env.BE_URL}/api-be/v1/subscriptions/findSubscriptionsByAccountId`,
        method: "POST",
        body: {
          idAccount: session?.userInfo?.id,
        },
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
        nextOption: {
          next: { tags: ["subscriptions-by-user"] },
        },
        // nextOption: { cache: "no-store" },
      });
    }
    console.log("resSubscriptions", resSubscriptions);

    return (
      <div style={{ marginTop: "20px" }}>
        <MainInforComic
          DetailInforComic={DetailInforComic}
          resSubscriptions={resSubscriptions}
        />
      </div>
    );
  } else if (params.slug.length === 2) {
    const ChapterComic = await sendRequest<IChapter>({
      url: `${process.env.COMICS_API_URL}/comics/${comic_id}/chapters/${chapter_id}`,
      method: "GET",
      nextOption: { cache: "no-store" },
    });

    return (
      <div>
        <MainChapterOfComic
          chapterId={chapter_id}
          comicId={comic_id}
          ChapterComic={ChapterComic}
          DetailInforComic={DetailInforComic}
        />
      </div>
    );
  }
};
export default ComicPage;
