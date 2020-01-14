import http from "http";
import app from "../index";

app.set('port', 8000);
http.createServer(app).listen(8000);