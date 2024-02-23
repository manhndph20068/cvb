import ".././styles/globals.css";

import AppHeader from "../../components/header/app.header";
import { sendRequest } from "../../utils/api";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resGenres = await sendRequest<IGenre[]>({
    url: `${process.env.COMICS_API_URL}/genres`,
    method: "GET",
    nextOption: { cache: "no-store" },
  });

  return (
    <>
      <AppHeader resGenres={resGenres} />
      {children}
    </>
  );
}
