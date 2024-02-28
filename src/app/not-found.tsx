import { Button, Result } from "antd";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div style={{ fontFamily: "Comic Sans MS", fontSize: "90px" }}>404</div>
      <div style={{ fontFamily: "Comic Sans MS", fontSize: "30px" }}>
        Page not found
      </div>
      <img
        src="https://github.com/manhndph20068/image-store/blob/main/404mg.png?raw=true"
        height={250}
        style={{ marginTop: "25px" }}
      />
      <Link href={"/"}>
        <Button style={{ marginTop: "25px" }}>Back Home</Button>
      </Link>
    </div>
  );
}
