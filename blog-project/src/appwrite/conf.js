import config from "../config/config";
import { Client, Databases, ID, Query, Storage } from "appwrite";


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

    async updateDocument(ID, { title, slug, content, featuredImage, status }) {
        try {
            return await this.database.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                ID,// might throw an error in updating 
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

    async deleteDocument(ID) {
        try {
            await this.database.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                ID,

            )
        } catch (error) {
            throw new Error(`failde to delete the document ${error}`)
        }
    }


    async getDocuments(ID) {
        try {
            return await this.database.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                ID,
            )

        } catch (error) {
            throw new Error(`unable to get documents ${error}`)
        }
    }

    async listAllDocs() {
        try {
            return await this.database.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                [
                    Query.equal("status", ["active"])
                ],
            )
        } catch (error) {
            throw new Error(`failed to list all docs ${error}`)
        }
    }

    // now how do i upload file
    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw new Error(`failed to upload the file ${error} fix the error`)
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId,
            )
        } catch (error) {
            throw new Error(`failed to delete file ${error}`)
        }
    }

    async

}