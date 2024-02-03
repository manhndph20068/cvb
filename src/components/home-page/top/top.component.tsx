import { Layout } from "antd";
import { Tabs } from "antd";
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
      label: `Top tháng`,
      children: <TopOfMonth DataTopOfMonth={DataTopOfMonth} />,
      icon: <MdOutlineCalendarMonth />,
    },
    {
      key: "2",
      label: "Top tuần",
      children: <TopOfWeek DataTopOfWeek={DataTopOfWeek} />,
      icon: <BsCalendar4Week />,
    },
    {
      key: "3",
      label: "Top ngày",
      children: <TopDaily DataTopOfDaily={DataTopOfDaily} />,
      icon: <IoTodayOutline />,
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
