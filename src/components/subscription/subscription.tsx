"use client";

import { sendRequest } from "@/src/utils/api";
import { DeleteOutlined, HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Divider, List } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  resSubscriptions: IBackendResponse<Subscriptions[]> | undefined;
}
const Subscription = (props: IProps) => {
  const { resSubscriptions } = props;
  const { data: session } = useSession();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const res = await sendRequest<IBackendResponse<any>>({
      url: `${process.env.NEXT_PUBLIC_BE_URL}/api/v1/subscriptions/deleteSubscription`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
      body: {
        idAccount: session?.userInfo?.id,
        idComic: id,
      },
    });
    if (res?.statusCode === 0) {
      await sendRequest({
        url: `/api/revalidate`,
        method: "POST",
        queryParams: {
          tag: "subscriptions-by-user",
          secret: "randomString",
        },
      });
      router.refresh();
    }
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
                  title: <>Theo dõi</>,
                },
              ]}
            />
          </div>
          <h2>Truyện đang theo dõi</h2>

          <div>
            <div style={{ textAlign: "center", fontSize: "17px" }}>
              Từ tài khoản
            </div>
            <Divider plain />
          </div>
        </div>

        {session?.userInfo &&
          resSubscriptions?.data &&
          resSubscriptions?.data?.length > 0 && (
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
                dataSource={resSubscriptions?.data}
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
                          onClick={() => handleDelete(item?.idComic)}
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
                      <Link href={`/truyen-tranh/${item?.idComic}`}>
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
                      href={`/truyen-tranh/${item?.idComic}`}
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
                    {/* <Link
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
                  </Link> */}
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

        {!session?.userInfo && (
          <>
            <h3>
              Bạn cần{" "}
              <Link style={{ color: "red" }} href={"auth/signin"}>
                đăng nhập
              </Link>{" "}
              để sử dụng chức năng này
            </h3>
          </>
        )}

        {resSubscriptions?.data && resSubscriptions?.data?.length === 0 && (
          <>
            <h3>Bạn chưa theo dõi truyện nào</h3>
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
export default Subscription;
