"use client";
const AppFooter = () => {
  return (
    <div
      style={{
        backgroundColor: "#222222",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        padding: "20px 0",
        gap: "5px",
        height: "100%",
        bottom: "0",
        width: "100%",
      }}
    >
      <div
        style={{ fontFamily: "Courier", fontSize: "21px", fontWeight: "bold" }}
      >
        MangaHub
      </div>
      <div>Author: Nguyen Duc Manh</div>
      <div>Contact: ngducmanh2121@gmail.com</div>
    </div>
  );
};
export default AppFooter;
