"use client";
import { Popover, List } from "antd";
import { Button } from "antd/es/radio";
import "./app.header.scss";
import Link from "next/link";
import { useState } from "react";

interface IProps {
  resGenres: IGenre[];
}

const MenuHeader = (props: IProps) => {
  const { resGenres } = props;
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
      <Popover
        overlayStyle={{
          width: "550px",
          height: "auto",
        }}
        content={ListGenres}
      >
        <div style={{ cursor: "pointer" }}>Thể loại</div>
      </Popover>
    </div>
  );
};
export default MenuHeader;
