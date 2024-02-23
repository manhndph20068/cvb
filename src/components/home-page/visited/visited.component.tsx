"use client";
import {
  VisitedComicsState,
  doDeleteAction,
} from "@/src/lib/redux/slices/visitedComicsSlice/visitedComicsSlice";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import "./visited.component.scss";
import { useDispatch } from "@/src/lib/redux";

interface IProps {
  listComicsVisited: VisitedComicsState;
}

const VisitedComponent = (props: IProps) => {
  const { listComicsVisited } = props;
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(doDeleteAction(id));
  };

  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "17px",
        }}
      >
        <div style={{ fontSize: "19px", fontWeight: "bold" }}>
          Lịch sử đọc truyện
        </div>
        <Link href="/lich-su">
          <div>Xem tất cả</div>
        </Link>
      </div>
      {listComicsVisited?.comics.slice(0, 5).map((item, index) => {
        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "13px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                position: "relative",
                height: "88px",
                width: "75px",
              }}
            >
              <Link href={`/truyen-tranh/${item?.id}`}>
                <div
                  style={{
                    position: "relative",
                    height: "88px",
                    width: "75px",
                  }}
                >
                  <Image
                    src={item?.image}
                    style={{
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                    fill
                    alt={item?.name}
                  />
                </div>
              </Link>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                flex: 1,
              }}
            >
              <Link href={`/truyen-tranh/${item?.id}`}>
                <div
                  style={{
                    width: "auto",
                    fontSize: "15px",
                    fontWeight: "bold",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.name}
                </div>
              </Link>

              <div style={{ width: "auto" }}>
                <Link href={`/truyen-tranh/${item?.id}/${item.chapterIds[0]}`}>
                  Đọc tiếp {item.chapterName}
                </Link>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Button
                shape="default"
                icon={<DeleteOutlined />}
                onClick={() => handleDelete(item.id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default VisitedComponent;
