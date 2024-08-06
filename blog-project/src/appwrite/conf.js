import config from "../config/config";
import { Client, Databases, ID, Storage } from "appwrite";


class Service {
    client = new Client();
    database;
    storage;
    constructor() {
        this.client
            .setEndpoint(config.appwriteProjectId)
            .setProject(config.appwriteProjectId)
        this.database = new Databases(this.client)
        this.storage = new Storage(this.client)
    }
    // to create a new document
    async createDocument({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.database.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                ID.unique(),
                {
                    title: title,
                    slug: slug,
                    content: content,
                    featuredImage: featuredImage,
                    status: status,
                    userId: userId,
                }
            )
        } catch (error) {
            throw new Error(`Failed to create a Document ${error}`)
        }
    }

    async updateDocument({ title, slug, content, featuredImage, status }) {
        try {
            return await this.database.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                ID.unique(),// might throw an error in updating 
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            throw new Error(`An error occured during updating document ${error}`)
        }
    }

    async deleteDocument({ title, slug, content, featuredImage, status }) {
        try {
            return await this.database.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                ID.unique(),
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                }

            )
        } catch (error) {
            throw new Error(`failde to delete the document ${error}`)
        }
    }

}