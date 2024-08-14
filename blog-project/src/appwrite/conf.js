import config from "../config/config";
import { Client, Databases, ID, Query, Storage } from "appwrite";


export class Service {
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
                slug,
                {
                    title: title,
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

    async updateDocument(slug, { title, content, featuredImage, status }) {
        try {
            return await this.database.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,// might throw an error in updating 
                {
                    title,

                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            throw new Error(`An error occured during updating document ${error}`)
        }
    }

    async deleteDocument(slug) {
        try {
            await this.database.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,

            )
        } catch (error) {
            throw new Error(`failde to delete the document ${error}`)
        }
    }


    async getDocuments(slug) {
        try {
            return await this.database.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
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

    async getFilePreview(fileId) {
        try {
            return await this.storage.getFilePreview(
                config.appwriteBucketId,
                fileId,
                // you can add width and many more look at the docs
                // https://appwrite.io/docs/references/1.5.x/client-web/storage
            )
        } catch (error) {
            throw new Error(`error getting preview file ${error}`)
        }

    }

}

const service = new Service()
export default service