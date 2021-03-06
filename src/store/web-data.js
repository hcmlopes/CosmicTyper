import axios from "axios";
import * as store from "./store";
import { parseList } from "./http-utils";
import { getLsItem } from "./storage-utils";
import { keyEnums } from "./enums";
import API from "./config";

export async function getWebLessonsAction() {
  if (getLsItem(keyEnums.webKey)) {
    store.getWebLessons(getLsItem(keyEnums.webKey));
    return;
  }

  try {
    const resp = await axios.get(`${API}/webLessons`);
    const data = parseList(resp);
    store.getWebLessons(data);
    return data;
  } catch (err) {
    return console.log(err);
  }
}
