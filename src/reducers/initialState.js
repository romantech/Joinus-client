export const initialState = {
  projects: [
    {
      projectId: 1,
      projectName: "JOINUS",
      attendExpired: "2021-03-18 03:47:48",
      writeUser: "kim",
      stack: ["javascript"],
      attendCount: 3,
      thumbnail:
        "https://d2v80xjmx68n4w.cloudfront.net/gigs/DEk431603768862.png",
    },
    {
      projectId: 2,
      projectName: "Caculator",
      attendExpired: "2021-03-18 03:47:48",
      writeUser: "Choi",
      stack: ["javascript", "python"],
      attendCount: 7,
      thumbnail:
        "https://d2v80xjmx68n4w.cloudfront.net/gigs/49S6v1609120324.png",
    },
    {
      projectId: 3,
      projectName: "PieceBook",
      attendExpired: "2021-03-18 03:47:48",
      writeUser: "Park",
      stack: ["typescript"],
      attendCount: 10,
      thumbnail:
        "https://d2v80xjmx68n4w.cloudfront.net/gigs/ZOdpp1615965668.png",
    },
    {
      projectId: 4,
      projectName: "Gamstagram",
      attendExpired: "2021-03-18 03:47:48",
      writeUser: "John",
      stack: ["python"],
      attendCount: 20,
      thumbnail:
        "https://d2v80xjmx68n4w.cloudfront.net/gigs/oGBOp1606198814.png",
    },
  ],
  userInfo: {
    userId: 0,
    userEmail: "",
    userName: "",
    source: "",
    accessToken: "",
  },
  isLogin: false,
  token: {
    accessToken: "",
  },
  renderData: [],
};
