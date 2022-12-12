import axios from "axios";
import { ACCESSTOKEN, DOMAIN, TOKEN } from "../utils/setting/Config";

export class baseService {
  put = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "PUT",
      data: model,
      headers: {
        TokenCyberSoft: TOKEN,
        Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });
  };

  post = (url, model) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "POST",
      data: model,
      headers: {
        TokenCyberSoft: TOKEN,
        Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });
  };

  get = (url) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "GET",
      headers: {
        TokenCyberSoft: TOKEN,
        Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });
  };

  delete = (url) => {
    return axios({
      url: `${DOMAIN}${url}`,
      method: "DELETE",
      headers: {
        TokenCyberSoft: TOKEN,
        Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });
  };
}
