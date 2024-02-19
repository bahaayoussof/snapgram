import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
	projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
	url: import.meta.env.VITE_APPWRITE_URL,
};

// create instance of appwrite client
export const client = new Client();
client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

// create instance of appwrite account
export const account = new Account(client);
// create instance of appwrite database
export const databases = new Databases(client);
// create instance of appwrite storage
export const storage = new Storage(client);
// create instance of appwrite avatars
export const avatars = new Avatars(client);
