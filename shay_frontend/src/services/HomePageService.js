import AppDataService from "./AppDataService";

const COMMON_BASE = "api";

export default class HomePageService {
    static async getTemplatesList(id) {
        return await AppDataService.get(`${COMMON_BASE}/poster/template/65ae250e7c699f72862a4daa`);
    }
    static async postTemplateData(data) {
        return await AppDataService.post(`${COMMON_BASE}/poster/generate`, data);
    }
    static async getLinkedinAuth() {
        return await AppDataService.get(`${COMMON_BASE}/linkedin`);
    }
    static async postMediaData(data) {
        return await AppDataService.post(`${COMMON_BASE}/createMediaPost`, data);
    }
    static async getStoredTemplatesList() {
        return await AppDataService.get(`${COMMON_BASE}/users/templates`);
    }
}
