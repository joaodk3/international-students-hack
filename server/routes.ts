import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";
import { storage } from "./storage";

// New official rules (prefer this file; has space in name)
const RULES_PDF_NEW = "OFFICIAL RULES.pdf";
const RULES_PDF_OLD = "OFFICIAL_RULES.pdf";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Serve official rules PDF from attached_assets (new version first)
  app.get("/OFFICIAL_RULES.pdf", (_req, res) => {
    const assetsDir = path.join(process.cwd(), "attached_assets");
    const pathNew = path.join(assetsDir, RULES_PDF_NEW);
    const pathOld = path.join(assetsDir, RULES_PDF_OLD);
    const filePath = fs.existsSync(pathNew) ? pathNew : pathOld;
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "Rules PDF not found." });
    }
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="OFFICIAL_RULES.pdf"');
    res.sendFile(filePath);
  });

  return httpServer;
}
