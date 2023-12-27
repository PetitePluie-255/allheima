// import express from "express"
const express = require('express');
const server = express()
import { stuName } from "./stuName.js"
import cors from "cors"
server.use(cors())
server.get("/api/rand", (req, res) => {
  // console.log(stuName());
//   res.header("Access-Control-Allow-Origin", "*")
  res.send(stuName())
})

server.all("*", (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*")
  res.status(404)
  res.send("找不到资源")
})

server.listen(3000, () => {
  console.log("服务已启动")
})
