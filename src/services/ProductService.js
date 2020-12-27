import GenericService from "./GenericService";
class ProductsService extends GenericService {
  
  addProduct = (data) => this.post("products/add", data);
  deleteProduct = (_id) => this.delete("products/delete/"+_id);
  updateProduct = (_id, data) => this.put("products/api/" + _id, data);
  getProducts = () => this.get("products");
  getSingleProduct = (id) => this.get("products/"+ id);
}

let productService = new ProductsService();
export default productService; 