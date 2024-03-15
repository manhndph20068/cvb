import ".././styles/globals.css";

import AppHeader from "../../components/header/app.header";
import { sendRequest } from "../../utils/api";
import AppFooter from "@/src/components/footer/app.footer";

export const revalidate = 20;
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader />
      <div style={{ minHeight: "100vh", marginBottom: "20px" }}>{children}</div>
      <AppFooter />
    </>
  );
}
