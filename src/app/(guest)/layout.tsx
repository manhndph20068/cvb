import { AntdRegistry } from "@ant-design/nextjs-registry";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry> {children}</AntdRegistry>
      </body>
    </html>
  );
}