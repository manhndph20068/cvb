"use client";
import { Popover, List, Divider } from "antd";
import { Button } from "antd/es/radio";
import "./app.header.scss";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { sendRequest } from "@/src/utils/api";

interface IProps {
  resGenres: IGenre[];
}

const MenuHeader = (props: IProps) => {
  const { resGenres } = props;
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isPopoverVisible, setIsPopoverVisible] = useState<boolean>(false);

  useEffect(() => {
    // const resInforacc = await sendRequest<any>({
    //   url: `${process.env.NEXT_PUBLIC_BE_URL}/api/v1/auth/getInforSocialAccount`,
    //   method: "POST",
    //   nextOption: { cache: "no-store" },
    //   body: {
    //     email: "sflkjsd@sdf.df",
    //     type: "GOOGLE",
    //   },
    // });
    // console.log("resInforacc", resInforacc);
  }, []);

  const handleMouseEnter = (item: IGenre) => {
    setHoveredItem(item.description);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const ListGenres = () => {
    return (
      <List
        grid={{ gutter: 25, column: 4 }}
        dataSource={resGenres}
        renderItem={(item) => (
          <List.Item style={{ padding: "0 5px" }}>
            <Link
              style={{
                fontSize: "15px",
              }}
              href={`/genre/${item.id}`}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              onClick={() => setIsPopoverVisible(false)}
            >
              {item.name}
            </Link>
          </List.Item>
        )}
        footer={<>{hoveredItem}</>}
      />
    );
  };

  return (
    <div className="center-content">
      <Link href={"/truyen-moi"}>
        <div className="menu">Truyện Mới</div>
      </Link>

      <Popover
        overlayStyle={{
          width: "550px",
          height: "auto",
        }}
        content={ListGenres}
        open={isPopoverVisible}
        onOpenChange={(setVisible) => setIsPopoverVisible(setVisible)}
      >
        <div className="menu">Thể Loại</div>
      </Popover>

      <Link href={"/truyen-full"}>
        <div className="menu">Truyện Full</div>
      </Link>

      <Link href={"/theo-doi"}>
        <div className="menu">Theo dõi</div>
      </Link>
    </div>
  );
};
export default MenuHeader;
