"use client";
import qs from "qs";
import { useState } from "react";
import { Col, Divider, Row, Select, Spin } from "antd";
import axios from "axios";
import Link from "next/link";
import { SearchOutlined } from "@ant-design/icons";

let timeout: ReturnType<typeof setTimeout> | null;
let currentValue: string;

const fetchData = (value: string, callback: Function) => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  const fake = () => {
    const str = qs.stringify({
      q: value,
    });
    axios(`${process.env.NEXT_PUBLIC_COMICS_API_URL}/search?${str}`)
      .then((response) => response.data)
      .then((data: IModelPaginate<ICommics>) => {
        console.log("data", data);
        if (currentValue === value) {
          const result = data.comics;
          const processedData = result.map(
            (item: any) => (
              console.log("item", item),
              {
                id: item.id,
                title: item.title,
                last_chapter: item.last_chapter.name,
                image: item.thumbnail,
              }
            )
          );
          callback(processedData);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
  if (value) {
    timeout = setTimeout(fake, 300);
  } else {
    callback([]);
  }
};

function RenderList({ option, index, options }: any) {
  return (
    <Link href={`/truyen-tranh/${option.id}`}>
      <div key={option?.id} style={{ display: "flex", gap: 12 }}>
        <img
          src={option?.image}
          alt={option?.title}
          style={{ height: "65px", width: "50px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: "16px", fontWeight: "bold" }}>
            {option?.title}
          </div>
          <div>{option?.last_chapter}</div>
        </div>
      </div>
    </Link>
  );
}

const InputSearch = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState<string>();
  const [fetching, setFetching] = useState(false);

  const handleSearch = (newValue: string) => {
    setFetching(true);
    fetchData(newValue, setData);
    setFetching(false);
  };

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  return (
    <Row justify="center">
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 23 }}
        lg={{ span: 22 }}
        xl={{ span: 19 }}
        xxl={{ span: 17 }}
      >
        <div className="input-search" style={{ padding: "6px 0" }}>
          <Select
            showSearch
            value={null}
            placeholder="Tìm kiếm truyện"
            style={{ width: "100%", height: "40px", fontSize: "16px" }}
            defaultActiveFirstOption={false}
            suffixIcon={<SearchOutlined />}
            autoFocus={true}
            filterOption={false}
            onSearch={handleSearch}
            onChange={handleChange}
            notFoundContent={null}
          >
            {(data || []).map((d: any, index: number) => (
              <Select.Option key={d.id} value={d.id}>
                <RenderList option={d} index={index} options={d} />
              </Select.Option>
            ))}
          </Select>
        </div>
      </Col>
    </Row>
  );
};
export default InputSearch;
