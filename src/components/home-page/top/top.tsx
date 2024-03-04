"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";

interface IProps {
  data: ICommics[];
}
const Top = (props: IProps) => {
  const { data } = props;
  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            key={item.id}
            style={{
              padding: "5px",
              marginBottom: "7px",
              maxWidth: "100%",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "35%",
                height: "90px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <h1 style={{ fontFamily: "Calibri", width: "35px" }}>
                {index + 1}
              </h1>
              <div
                style={{
                  position: "relative",
                  height: "100%",
                  width: "75px",
                }}
              >
                <Link href={`/truyen-tranh/${item?.id}`}>
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
                width: "65%",
                height: "90px",
              }}
            >
              <div
                style={{
                  height: "50%",
                }}
              >
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  <Link href={`/truyen-tranh/${item?.id}`}> {item?.title}</Link>
                </div>
              </div>
              <div
                style={{
                  height: "50%",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  alignItems: "end",
                }}
              >
                <div
                  style={{
                    fontSize: "15px",
                  }}
                >
                  <Link
                    href={`/truyen-tranh/${item?.id}/${item?.last_chapter?.id}`}
                  >
                    {item?.last_chapter?.name}
                  </Link>
                </div>
                <div
                  style={{
                    fontSize: "15px",

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
export default Top;
