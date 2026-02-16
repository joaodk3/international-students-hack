import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";
import { storage } from "./storage";

const RULES_PDF = "OFFICIAL RULES HACK.pdf";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/OFFICIAL_RULES.pdf", (_req, res) => {
    const filePath = path.join(process.cwd(), "attached_assets", RULES_PDF);
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "Rules PDF not found." });
    }
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="OFFICIAL_RULES_HACK.pdf"');
    res.sendFile(filePath);
  });

  return httpServer;
}
