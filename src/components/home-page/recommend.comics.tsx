"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import Image from "next/image";
import { Button } from "antd";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./recommend.comic.scss";
import Link from "next/link";

interface IProps {
  RecommendComics: any;
}

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <Button
      onClick={onClick}
      style={{
        position: "absolute",
        top: "30%",
        right: "1%",
        width: 50,
        height: 50,
        zIndex: "2",
        opacity: 0.4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <GrFormNext style={{ fontSize: 25 }} />
    </Button>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <Button
      onClick={onClick}
      style={{
        position: "absolute",
        top: "30%",
        left: "1%",
        width: 50,
        height: 50,
        zIndex: "2",
        opacity: 0.4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <GrFormPrevious style={{ fontSize: 25 }} />
    </Button>
  );
};

const RecommnendComics = (props: IProps) => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,

    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1950,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          speed: 1000,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1870,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1615,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1325,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 930,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 755,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ maxWidth: "100%" }}>
      <div>
        <h2 className="title-comic">Truyện Đề Cử</h2>
      </div>
      <Slider {...settings}>
        {props.RecommendComics?.map((item: any) => {
          return (
            <div
              className="content-comic"
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid blue",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "205px",
                  width: "170px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 4,
                    left: 5,
                    background: "#56ccf2", // Màu nền của tag
                    color: "#fff", // Màu chữ của tag
                    padding: "2px 6px", // Kích thước padding của tag
                    borderRadius: " 5px ", // Độ cong của góc tag
                    zIndex: 1,
                    fontSize: "12px",
                    opacity: 1,
                  }}
                >
                  {item.updated_at}
                </div>
                <Image
                  src={`${item.thumbnail}`}
                  alt={item.title}
                  priority
                  sizes="100%"
                  fill
                  style={{
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </div>

              <Link
                // href={`/track/${convertSlugUrl(item.title)}-${
                //   item._id
                // }.html?audio=${item.trackUrl}`}

                href={`#`}
              >
                <div
                  style={{
                    width: "170px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    marginTop: "8px",
                    fontSize: "15px",
                  }}
                >
                  {" "}
                  {item.title}
                </div>
              </Link>
              <Link
                // href={`/track/${convertSlugUrl(item.title)}-${
                //   item._id
                // }.html?audio=${item.trackUrl}`}

                href={`#`}
              >
                <div
                  style={{
                    width: "170px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    marginTop: "7px",
                  }}
                >
                  {" "}
                  {item.lastest_chapter.name}
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default RecommnendComics;
