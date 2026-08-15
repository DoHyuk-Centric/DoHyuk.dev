import { createServer } from "node:http";
import { db } from "./db.ts";

const port = Number(process.env.PORT ?? 4000);

const server = createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  if (req.url === "/api/posts") {
    const posts = db.prepare("SELECT id, title, slug, created_at FROM posts ORDER BY created_at DESC").all();
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(posts));
    return;
  }

  res.writeHead(404, { "content-type": "application/json" });
  res.end(JSON.stringify({ error: "not found" }));
});

server.listen(port, () => {
  console.log(`> server listening at http://localhost:${port}`);
});
