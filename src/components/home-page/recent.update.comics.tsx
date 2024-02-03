"use client";
import { Card, List, Pagination, Space, Tag } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
interface IProps {
  data: IModelPaginate<ICommics>;
}

const RecentUpdateComics = (props: IProps) => {
  const { data } = props;
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [currentComics, setCurrentComics] = useState<ICommics[]>([]);
  const searchParams = useSearchParams();
  const query = searchParams.get("page");
  const router = useRouter();

  const handleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const convertStatusComic = (status: string) => {
    if (status === "Completed") return "Hoàn thành";
    if (status === "Ongoing") return "Đang tiến hành";
    if (status === "All") return "Tất cả";
  };

  useEffect(() => {
    const startIndex = (data?.current_page - 1) * comicsPerPage;
    const endIndex = startIndex + comicsPerPage;
    // setCurrentComics(data?.comics.slice(startIndex, endIndex));
  }, [data?.comics, data?.current_page]);

  const comicsPerPage = 36;

  return (
    <div style={{ paddingLeft: "10px" }}>
      <h4>RecentUpdateComics</h4>
      <List
        grid={{
          gutter: [16, 8],
          xs: 2,
          sm: 2,
          md: 4,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        dataSource={data?.comics}
        renderItem={(item) => (
          <List.Item>
            <div key={item?.id}>
              <div
                style={{
                  position: "relative",
                  height: "205px",
                  width: "170px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 4,
                    left: 5,
                    background: "#56ccf2", // Màu nền của tag
                    color: "#fff", // Màu chữ của tag
                    padding: "2px 6px", // Kích thước padding của tag
                    borderRadius: " 5px ", // Độ cong của góc tag
                    zIndex: 1,
                    fontSize: "12px",
                    opacity: 1,
                  }}
                >
                  {item?.updated_at}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 4,
                    left: 5,
                    background: "#56585A",
                    color: "#fff",
                    padding: "2px 6px",
                    borderRadius: " 5px ",
                    zIndex: 1,
                    fontSize: "12px",
                    opacity: 0.9,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <span style={{ marginTop: 2 }}>
                      <FaRegEye />
                    </span>
                    <span>
                      {new Intl.NumberFormat("en-US").format(item?.total_views)}{" "}
                    </span>
                  </div>
                </div>
                <Link href={`/truyen-tranh/${item.id}.html`}>
                  <Image
                    src={`${item?.thumbnail}`}
                    alt={item?.title}
                    priority
                    sizes="100%"
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                  />
                </Link>
              </div>
            </div>
            <Link
              // href={`/track/${convertSlugUrl(item.title)}-${
              //   item._id
              // }.html?audio=${item.trackUrl}`}

              href={`#`}
            >
              <div
                key={item.id}
                style={{
                  width: "170px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                  marginTop: "5px",
                  fontSize: "15px",
                }}
                onMouseEnter={() => {
                  setHoveredItemId(item.id);
                  document.addEventListener("mousemove", handleMouseMove);
                }}
                onMouseLeave={() => {
                  setHoveredItemId(null);
                  document.removeEventListener("mousemove", handleMouseMove);
                }}
              >
                {item.title}
                {hoveredItemId === item.id && (
                  <div
                    id={item.id}
                    style={{
                      position: "fixed", // Để giữ cho popup ở vị trí chuột
                      top: position.y,
                      left: position.x,
                      transform: "translate(5%, 2%)", // Để popup không bị che khuất bởi chuột
                      background: "#fff",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                      padding: "10px",
                      borderRadius: "5px",
                      zIndex: 1000,
                      border: "1px solid #ddd",
                      color: "black",
                      maxWidth: "400px",
                    }}
                  >
                    {/* Nội dung của popup */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        textAlign: "left",
                      }}
                      key={item?.id}
                    >
                      <span
                        style={{
                          fontWeight: "bold",
                          color: "#2db7f5",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {item.title}
                      </span>
                      <span>Tình trạng: {convertStatusComic(item.status)}</span>
                      <span>
                        Lượt xem:{" "}
                        {new Intl.NumberFormat("en-US").format(
                          item?.total_views
                        )}
                      </span>
                      <span>
                        Lượt theo dõi:{" "}
                        {new Intl.NumberFormat("en-US").format(item.followers)}
                      </span>
                      <Space size={[5, 5]} wrap style={{ margin: "5px 0" }}>
                        {item?.genres.map((genre) => {
                          return <Tag color="#2db7f5">{genre?.name}</Tag>;
                        })}
                      </Space>

                      <span style={{ whiteSpace: "pre-line" }}>
                        Mô tả: {item?.short_description}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </Link>
            <Link
              // href={`/track/${convertSlugUrl(item.title)}-${
              //   item._id
              // }.html?audio=${item.trackUrl}`}

              href={`#`}
            >
              <div
                key={item.id}
                style={{
                  width: "170px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                  marginTop: "5px",
                }}
              >
                {" "}
                {item.last_chapter.name}
              </div>
            </Link>
          </List.Item>
        )}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          height: "50px",
          border: "1px solid red",
        }}
      >
        <Pagination
          defaultCurrent={query ? parseInt(query) : 1}
          total={data?.total_pages * comicsPerPage}
          showSizeChanger={false}
          pageSize={comicsPerPage}
          onChange={(e) => {
            router.push(`/?page=${e}`);
          }}
        />
      </div>
    </div>
  );
};
export default RecentUpdateComics;
