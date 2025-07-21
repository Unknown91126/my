import express, { type Request, Response, NextFunction } from "express";
import http from "http";
import { registerRoutes } from "./routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// This logging middleware is safe for production
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  res.on("finish", () => {
    if (req.path.startsWith("/api")) {
      const duration = Date.now() - start;
      console.log(`${req.method} ${req.path} ${res.statusCode} - ${duration}ms`);
    }
  });
  next();
});

(async () => {
  const server = http.createServer(app);
  await registerRoutes(app);

  // Error handling middleware
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });
  
  if (process.env.NODE_ENV === "development") {
    const { setupVite } = await import("./vite.js");
    await setupVite(app, server);
  } else {
    // In production, serve the static files from the client's dist directory
    const { serveStatic } = await import("./vite.js");
    serveStatic(app);
  }

  const port = process.env.PORT || 5000;
  server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
})();
