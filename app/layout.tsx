import { ReduxProviders } from "@/lib/redux.providers";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProviders>
          <AntdRegistry>{children}</AntdRegistry>
        </ReduxProviders>
      </body>
    </html>
  );
}
