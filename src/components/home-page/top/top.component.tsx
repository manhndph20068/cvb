"use client";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "./top.component.scss";
import Top from "./top";

interface IProps {
  DataTopOfMonth: ICommics[];
  DataTopOfWeek: ICommics[];
  DataTopOfDaily: ICommics[];
}

const TopComponent = (props: IProps) => {
  const { DataTopOfMonth, DataTopOfWeek, DataTopOfDaily } = props;
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Top Tháng",
      children: <Top data={DataTopOfMonth} />,
    },
    {
      key: "2",
      label: "Top Tuần",
      children: <Top data={DataTopOfWeek} />,
    },
    {
      key: "3",
      label: "Top Ngày",
      children: <Top data={DataTopOfDaily} />,
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          style={{ width: "100%" }}
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          size="large"
          indicator={{
            align: "center",
          }}
        />
      </div>
    </>
  );
};
export default TopComponent;
