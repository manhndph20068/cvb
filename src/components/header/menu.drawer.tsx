"use client";
import {
  CaretDownOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Divider,
  Drawer,
  Dropdown,
  List,
  MenuProps,
  Space,
} from "antd";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

interface IProps {
  openDrawer: boolean;
  setOpenDrawer: (open: boolean) => void;
  resGenres: IGenre[];
  items: MenuProps["items"];
}
const MenuDrawer = (props: IProps) => {
  const { openDrawer, setOpenDrawer, resGenres, items } = props;
  const [openListGenres, setOpenListGenres] = useState<boolean>(false);
  const { data: session } = useSession();

  const onClose = () => {
    setOpenDrawer(false);
    setOpenListGenres(false);
  };

  const handleOpenListGenres = () => {
    setOpenListGenres(!openListGenres);
  };

  return (
    <>
      <Drawer title="" width="70%" onClose={onClose} open={openDrawer}>
        {session ? (
          <>
            <div
              style={{
                display: "flex",
                width: "auto",
                gap: "7px",
                alignItems: "center",
              }}
            >
              <Avatar
                size="large"
                src={
                  session.user?.image
                    ? `${session.user?.image}`
                    : `${session.userInfo?.avatar}` ?? null
                }
                icon={<UserOutlined />}
              />
              <div
                className="user-name"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      {session.user?.name ?? session?.userInfo?.email}
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>
            <Divider />
          </>
        ) : (
          <>
            <p onClick={() => signIn()} style={{ marginBottom: "20px" }}>
              Đăng nhập
            </p>
          </>
        )}

        <p
          onClick={() => handleOpenListGenres()}
          style={{ color: openListGenres ? "red" : "black" }}
        >
          Thể Loại <CaretDownOutlined />
        </p>
        {openListGenres && (
          <>
            <Divider />
            <List
              grid={{ gutter: 20, column: 2 }}
              dataSource={resGenres}
              renderItem={(item) => (
                <List.Item style={{ padding: "0 5px" }}>
                  <Link
                    style={{
                      fontSize: "15px",
                    }}
                    href={`/genre/${item.id}`}
                    onClick={() => onClose()}
                  >
                    {item.name}
                  </Link>
                </List.Item>
              )}
            />
            <Divider />
          </>
        )}
        <p>Truyên Mới</p>
        <p>Truyện Full</p>
        <Link href={"/theo-doi"} onClick={() => onClose()}>
          <p>Theo dõi</p>
        </Link>
      </Drawer>
    </>
  );
};
export default MenuDrawer;
