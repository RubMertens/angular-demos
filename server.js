const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("expenses.json");
const middlewares = jsonServer.defaults();


server.use(function(req, res, next){
  setTimeout(next, 500);
});
server.use(middlewares);
server.use((req, res, next) => {
  if (req.header("isMe") ===  "true") {
    next()
  } else {
    res.sendStatus(401);
  }
})

server.use(router);
server.listen(3000, () => console.log("server is running"))
