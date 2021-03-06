export const bigMovieInfo = [
  {
    title: "뭐해",
    description:
      "토요일 오후, 외출 직전 갑자기 약속이 취소된 유미는 이리저리 연락을 돌려 보지만 뭔가 잘 풀리지 않는다.",
    posterUrl: "http://siff.kr/wp-content/uploads/2021/11/20211104_101741.jpg",
    movieIdx: 50,
  },
  {
    title: "황룡산",
    description:
      "1950년 10월 경기도의 금정굴에서 남한 군경에 의해 한 마을에서 153명 이상이 희생된 민간인 학살 사건",
    posterUrl: "http://siff.kr/wp-content/uploads/2021/11/20211104_060602.jpg",
    movieIdx: 41,
  },
  {
    title: "희수",
    description:
      "세상을 곧 떠나야 하는 희수와 그의 흔적을 좇는 학선의 처음이자 마지막 여행기",
    posterUrl: "http://siff.kr/wp-content/uploads/2021/11/20211104_110915.jpg",
    movieIdx: 72,
  },
];
export const graphData1 = {
  labels: ["로맨스", "공포", "드라마", "스릴러", "SF"],
  datasets: [
    {
      label: "장르별 영화 개수",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export const graphData2 = {
  labels: [2018, 2019, 2020, 2021],
  datasets: [
    {
      label: "관객수",
      data: [110149287, 115621862, 40462371, 18219013],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
  ],
};
export const graphData3 = {
  labels: [2019, 2020, 2021],
  datasets: [
    {
      label: "이용 경험 있음(%)",
      data: [41, 72.2, 81.7],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
    {
      label: "이용 경험 없음(%)",
      data: [59, 27.8, 18.3],
      backgroundColor: "rgba(53, 162, 235, 1)",
    },
  ],
};
export const graphData4 = {
  labels: [2018, 2019, 2020, 2021],
  datasets: [
    {
      label: "매출액",
      data: [912746432308, 970793408451, 350412173790, 173404400692],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
  ],
};
