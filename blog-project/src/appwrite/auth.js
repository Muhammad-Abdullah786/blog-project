import config from "../config/config";
import { Client, Account, ID } from "appwrite";


class Auth {
    client = new Client();
    // why account is empty because i have to put some value in client 
    account;
    constructor() {
        this.client
            .setEndpoint(config.appwriteEndpointUrl)
            .setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }
    async createAccount({ email, password, name }) {
        try {
            const user = await this.account(ID.unique(), email, password, name)
            if (user) {
                // now we need to login user
            } else {
                return user
            }

        } catch (error) {
            throw new Error(`Failed to create an account the error is ${error}`)
        }
    }
    // for login
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw new Error(`Failed to login ${error}`)
        }
    }
    // for logout
    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw new Error(`Problem occured in loguout ${error}`)
        }
    }
    // to get useraccount
    async getUserAccount() {
        try {
            await this.account.get()

        } catch (error) {
            throw new Error(`cannnot get user account ${error}`)
        }
    }
}

const authService = new Auth()


export default authService

