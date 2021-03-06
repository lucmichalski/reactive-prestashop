import config from "../config.json"

export const combinations = {
  getAll(array){
    if (Array.isArray(array)) {
      var combinationsRequestString = array.map(item => item.id).join('|');
    }

    return fetch(`${config.apiUrl}/combinations/?display=full`+
      `${Array.isArray(array) ? `&filter[id]=[${combinationsRequestString}]` : ``}` +
      `&ws_key=${config.apiKey}&${config.dataType}`)
      .then(response => {
        return response.json();
      }).then(data => data.combinations);
  },

  getCombination(id){
    return fetch(`${config.apiUrl}/combinations/${id}?ws_key=${config.apiKey}&${config.dataType}`)
      .then(response => {
        return response.json();
      }).then(data => data.combination);
  },

  getOptionValues(array){
    if (Array.isArray(array)) {
      var valueRequestString = array.map(item => item.id).join('|');
    }

    return fetch(`${config.apiUrl}/product_option_values/` +
      `?display=[id,name]` +
      `${Array.isArray(array) ? `&filter[id]=[${valueRequestString}]` : ``}` +
      `&ws_key=${config.apiKey}&${config.dataType}`)
      .then(function (response) {
        return response.json();
      }).then(d => {
        return d.product_option_values;
      })
  }
}