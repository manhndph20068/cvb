import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./styles/globals.css";
import { ReduxProviders } from "../lib/redux.providers";
import NextAuthWrapper from "../lib/next.auth.wrapper";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProviders>
          <AntdRegistry>
            <NextAuthWrapper>{children}</NextAuthWrapper>
          </AntdRegistry>
        </ReduxProviders>
      </body>
    </html>
  );
}
