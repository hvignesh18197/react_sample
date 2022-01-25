import Api from "./Api";

export default {
  getProducts() {
    return Api().post("products");
  },
  getProduct(id) {
    return Api().post(`product/${id}`);
  },
};
