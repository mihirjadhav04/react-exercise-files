import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId);
        
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, content, featuredImage, userId, status, slug}) {
        try {
            return await this.databases.createDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }

            )
        } catch (error) {
            console.log("Appwrite service error:: createPost :: ", error);
            throw error
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )

        } catch (error) {
            console.log("Appwrite service error:: updatePost :: ", error);
            throw error
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            )
            return true

        } catch (error) {
            console.log("Appwrite service error:: deletePost :: ", error);
            return false
        }
    }

    async getSinglePost(slug) {
        try {
            return await this.databases.getDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            )

        }  catch (error) {
            console.log("Appwrite service error:: getSinglePost :: ", error);
            return false
        }
    }

    async listAllPosts(){
        try {
            return await this.databases.listDocuments(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                [
                    Query.equal("status","active") // indexes are required to run and make your queries work
                ]
            )
        }catch (error) {
            console.log("Appwrite service error:: listAllPosts :: ", error);
            return false
        }
    }


    //file upload service
    async uploadFile(file){
        try {
            return await this.storage.createFile(
                config.appWriteBucketId,
                ID.unique,
                file
            )
        } catch (error) {
           console.log("Appwrite service error:: uploadFile :: ", error); 
           return false
        }
    }


    // flie delete service 
    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                config.appWriteBucketId,
                fileId
            ) 
            return true
        }catch (error) {
            console.log("Appwrite service error:: deleteFile :: ", error); 
            return false
         }
    }


    getFilePreview(fileId) {
        try {
            this.storage.getFilePreview(
                config.appWriteBucketId,
                fileId
            )
        } 
        catch (error) {
            console.log("Appwrite service error:: filePreview :: ", error); 
            return false
        }
    }

}



const service = new Service()
export default service
