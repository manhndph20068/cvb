"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";

interface IProps {
  DataTopOfMonth: ICommics[];
}
const TopOfMonth = (props: IProps) => {
  const { DataTopOfMonth } = props;
  return (
    <>
      {DataTopOfMonth.map((item, index) => {
        return (
          <div
            style={{
              border: "1px solid black",
              padding: "5px",
              marginBottom: "7px",
              maxWidth: "100%",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "30%",
                height: "100px",
                border: "1px solid red",
                display: "flex",
                alignItems: "center", // Vertical centering
                justifyContent: "space-evenly",
              }}
            >
              <h1 style={{ fontFamily: "Calibri", width: "35px" }}>
                0{index + 1}
              </h1>
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  width: "75px",
                  // textAlign: "center",
                }}
              >
                <Link href={"#"}>
                  <Image
                    style={{
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                    priority
                    fill
                    src={item?.thumbnail}
                    alt={item?.title}
                  />
                </Link>
              </div>
            </div>
            <div
              style={{
                width: "70%",
                height: "100px",
                border: "1px solid blue",
              }}
            >
              <div
                style={{
                  border: "1px solid red",
                  height: "50%",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",

                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Link href={"#"}> {item?.title}</Link>
                </div>
              </div>
              <div
                style={{
                  border: "1px solid black",
                  height: "50%",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "end",
                }}
              >
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  <Link href={"#"}>{item?.last_chapter?.name}</Link>
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <FaRegEye />
                  {new Intl.NumberFormat("en-US").format(item?.total_views)}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default TopOfMonth;
