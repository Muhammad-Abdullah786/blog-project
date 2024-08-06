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
}