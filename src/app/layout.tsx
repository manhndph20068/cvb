import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./styles/globals.css";
import { ReduxProviders } from "../lib/redux.providers";
import AppHeader from "../components/header/app.header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProviders>
          <AntdRegistry>
            <AppHeader />
            {children}
          </AntdRegistry>
        </ReduxProviders>
      </body>
    </html>
  );
}
