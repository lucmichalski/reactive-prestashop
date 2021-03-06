import config from "../config.json"

export const images = {
  getProductImages(id){

  },
  getLogo(){
    return `${config.apiUrl}images/general/header/?ws_key=${config.apiKey}`;
  },

  productImage(productId, imageId){
    return `${config.apiUrl}images/products/${productId}/${imageId}/?ws_key=${config.apiKey}`
  },

  categoryImage()
  getManufacturersImg(id){
    return `${config.apiUrl}images/manufacturers/${id}/?ws_key=${config.apiKey}`
  }
}