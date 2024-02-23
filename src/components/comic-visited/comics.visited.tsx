"use client";

import { useDispatch } from "@/src/lib/redux";
import {
  VisitedComicsState,
  doDeleteAction,
} from "@/src/lib/redux/slices/visitedComicsSlice/visitedComicsSlice";
import { DeleteOutlined, HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Divider, List } from "antd";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  listComicsVisited: VisitedComicsState;
}
const ComicsVisited = (props: IProps) => {
  const { listComicsVisited } = props;
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(doDeleteAction(id));
  };
  return (
    <>
      <div>
        <div style={{ margin: "25px 0" }}>
          <div className="breadcrumb" style={{ padding: "5px" }}>
            <Breadcrumb
              style={{ fontSize: "16px" }}
              items={[
                {
                  title: (
                    <>
                      <Link href={"/"}>
                        <HomeOutlined />
                      </Link>
                    </>
                  ),
                },
                {
                  title: <>Lịch sử</>,
                },
              ]}
            />
          </div>
          <h2>Lịch sử đọc truyện</h2>
          <div>
            <div style={{ textAlign: "center", fontSize: "17px" }}>
              Từ thiết bị
            </div>
            <Divider plain />
          </div>
        </div>
        {listComicsVisited.comics.length > 0 && (
          <>
            <List
              grid={{
                xs: 2,
                sm: 3,
                md: 4,
                lg: 4,
                xl: 5,
                xxl: 6,
              }}
              dataSource={listComicsVisited?.comics}
              renderItem={(item) => (
                <List.Item>
                  <div style={{ display: "flex", justifyContent: "center" }}>
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
                      <Button
                        shape="round"
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(item.id)}
                      />
                    </div>
                  </div>
                  <div
                    key={item?.id}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "7px",
                    }}
                  >
                    <Link href={`/truyen-tranh/${item.id}`}>
                      <div
                        style={{
                          position: "relative",
                          height: "205px",
                          width: "170px",
                          textAlign: "center",
                        }}
                      >
                        <Image
                          src={`${item?.image}`}
                          alt={item?.name}
                          priority
                          sizes="100%"
                          height={205}
                          width={170}
                          style={{
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                  <Link
                    // href={`/track/${convertSlugUrl(item.title)}-${
                    //   item._id
                    // }.html?audio=${item.trackUrl}`}

                    href={`/truyen-tranh/${item?.id}`}
                    style={{ display: "flex", justifyContent: "center" }}
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
                    >
                      {item.name}
                    </div>
                  </Link>
                  <Link
                    href={`/truyen-tranh/${item?.id}/${item.chapterIds[0]}`}
                    style={{ display: "flex", justifyContent: "center" }}
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
                    >
                      Đọc tiếp {item.chapterName}
                    </div>
                  </Link>
                  {/* <div style={{ display: "flex", justifyContent: "center" }}>
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
                  <Button
                    shape="round"
                    icon={<DeleteOutlined />}
                    // onClick={() => handleDelete(item.id)}
                  />
                </div>
              </div> */}
                </List.Item>
              )}
            />
          </>
        )}

        {/* <div
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
          total={DetailInforComic?.total_pages * comicsPerPage}
          showSizeChanger={false}
          pageSize={comicsPerPage}
          onChange={(e) => {
            router.push(`${pathname}?page=${e}`);
          }}
        />
      </div> */}
      </div>
    </>
  );
};
export default ComicsVisited;
