export default {
  npmClient: "yarn",
  routes: [
    { path: "/", component: "home" },
    { path: "/login", component: "login" },
    {
      path: "/course/:id",
      component: "@/layouts/WithSideBar",
      routes: [
        { path: "", component: "home" },
        { path: "student", component: "teacher/studentManage" },
        { path: "resource", component: "teacher/resources" },
        { path: "homework", component: "teacher/homework" },
        { path: "homework/:id/detail", component: "teacher/homeworkDetail" },
        { path: "homework/:id/review", component: "teacher/homeworkReview" },
        {
          path: "homework/:id/review/:id",
          component: "teacher/reviewDetail",
        },
        { path: "test", component: "teacher/testWork" },
        { path: "test/:id/review", component: "teacher/testReview" },
        { path: "test/:id/detail", component: "teacher/testDetail" },
        {
          path: "test/:id/review/:id",
          component: "teacher/reviewDetail",
        },
        { path: "reply", component: "replyPage" },
        { path: "myWork", component: "student/homework" },
        { path: "myWork/:id/detail", component: "student/homeworkDetail" },
        { path: "myTest", component: "student/testWork" },
        { path: "reply", component: "replyPage" },
        { path: "*", component: "notFound" },
      ],
    },
    {
      path: "/notFound",
      component: "notFound",
    },
    {
      path: "/*",
      redirect: "/notFound",
    },
  ],
  proxy: {
    "/api": { // 标识需要进行转换的请求的url
     "target": "http://127.0.0.1:7001", // 服务端域名
     "changeOrigin": true, // 允许域名进行转换
    }
  }
};
