import axios from "axios";

export default (
  url = "https://raw.githubusercontent.com/andrewnashed/britney.rest/main/quotes.json"
) => {
  return axios.create({
    baseURL: url
  });
};
