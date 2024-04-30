import mongoose from "mongoose";
import { User } from "./user.js";

const DB_URL =
  process.env.MONGODB_URL ||
  "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.js 파일을 확인하세요.";

mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on("connected", () =>
  console.log("정상적으로 MongoDB 서버에 연결되었습니다.  " + DB_URL)
);
db.on("error", (error) =>
  console.error("MongoDB 연결에 실패하였습니다.\n" + DB_URL + "\n" + error)
);

app.use(express.json());

app.use("/posts/:userId",allPosts(userId), postRouter);

app.use("/edu", educationRouter);
app.use("/cer", certificateRouter);
app.use("/award", awardRouter);
app.use("/proj", projectRouter);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.statusCode = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.error(error);
  const statusCode = error.statusCode ?? 500;
  let message = error.message;
  if (statusCode === 500) {
    message = "Internal Server Error";
  }
  res.status(statusCode).json({
    data: null,
    error: message,
  });
});
export { User };