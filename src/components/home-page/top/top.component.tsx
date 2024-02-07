"use client";
import { Col, Row, Tabs } from "antd";
import type { TabsProps } from "antd";
import "./top.component.scss";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoTodayOutline } from "react-icons/io5";
import { BsCalendar4Week } from "react-icons/bs";
import TopOfMonth from "./top.month";
import TopOfWeek from "./top.week";
import TopDaily from "./top.daily";

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
      children: <TopOfMonth DataTopOfMonth={DataTopOfMonth} />,
    },
    {
      key: "2",
      label: "Top Tuần",
      children: <TopOfWeek DataTopOfWeek={DataTopOfWeek} />,
    },
    {
      key: "3",
      label: "Top Ngày",
      children: <TopDaily DataTopOfDaily={DataTopOfDaily} />,
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
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
