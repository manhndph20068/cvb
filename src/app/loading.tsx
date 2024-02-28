export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="custom-loader"></div>
    </div>
  );
}
