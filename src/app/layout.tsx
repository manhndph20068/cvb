import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./styles/globals.css";
import { ReduxProviders } from "../lib/redux.providers";
import NextAuthWrapper from "../lib/next.auth.wrapper";
import NprogressWrapper from "../lib/nprogress.wrapper";

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
            <NprogressWrapper>
              <NextAuthWrapper>{children}</NextAuthWrapper>
            </NprogressWrapper>
          </AntdRegistry>
        </ReduxProviders>
      </body>
    </html>
  );
}
