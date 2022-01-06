/*global kakao */
import React, { useRef, useEffect } from "react";
function Map({ title, lat, lon }) {
  const container = useRef(null); //지도를 담을 영역의 DOM 레퍼런스
  const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new window.kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };

  let positions = [
    // {
    //   title: "카카오",
    //   latlng: new kakao.maps.LatLng(33.450705, 126.570677),
    // },
    {
      title: title,
      latlng: new kakao.maps.LatLng(lat, lon),
    },
  ];
  var imageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

  // 커스텀 오버레이를 생성합니다

  useEffect(() => {
    let map = new kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
      var infowindow = new kakao.maps.InfoWindow({
        content: `<div style="width:150px;text-align:center;padding:6px 0;color:black;"><a href='https://naver.com'>${positions[i].title}</a></div>`,
      });
      infowindow.open(map, marker);
    }
    marker.setMap(map);
    console.log(lat);

    return () => {};
  }, []);

  return (
    <div
      className="map"
      style={{ width: "50vw", height: "500px", margin: "auto" }}
      ref={container}
    ></div>
  );
}

export default Map;