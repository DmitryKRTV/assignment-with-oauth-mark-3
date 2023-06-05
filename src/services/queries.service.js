import axiosInstance from "../utils/axios";

class Queries {
    getDealFields() {
        return axiosInstance.get("dealFields");
    }

    setDealField(body) {
        return axiosInstance.post("dealFields", body);
    }

    addDeal(body) {
        return axiosInstance.post("deals", body);
    }

}


export default new Queries();
