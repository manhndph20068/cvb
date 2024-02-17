import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./styles/globals.css";
import { ReduxProviders } from "../lib/redux.providers";
import AppHeader from "../components/header/app.header";
import { sendRequest } from "../utils/api";

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
    <html lang="en">
      <body>
        <ReduxProviders>
          <AntdRegistry>
            <AppHeader resGenres={resGenres} />
            {children}
          </AntdRegistry>
        </ReduxProviders>
      </body>
    </html>
  );
}
