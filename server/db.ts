let client: any | undefined;

export async function getMongoClient(): Promise<any> {
  if (client && client.topology && client.topology.isConnected()) return client;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set");

  const mongodb: any = await import("mongodb");
  const newClient = new mongodb.MongoClient(uri, {
    appName: process.env.MONGODB_APP_NAME || "airigo-ai",
    retryWrites: true,
  });
  client = await newClient.connect();
  return client;
}

export async function getDb(dbName?: string) {
  const c = await getMongoClient();
  const name = dbName || process.env.MONGODB_DB || "ai-gadget";
  return c.db(name);
}

export async function closeMongoClient() {
  if (client) {
    await client.close();
    client = undefined;
  }
}

// Graceful shutdown in dev/watch to avoid EADDRINUSE on restart
if (process.env.NODE_ENV !== "production") {
  process.once("SIGINT", () => {
    closeMongoClient().finally(() => process.exit(0));
  });
  process.once("SIGTERM", () => {
    closeMongoClient().finally(() => process.exit(0));
  });
}
