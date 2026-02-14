import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Since this is a static landing page with external links, 
  // we don't need any backend API routes for now.
  
  return httpServer;
}
