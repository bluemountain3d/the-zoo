import axios from "axios";

export const get = async <T>(url: string) => {
  const res = await axios.get<T>(url);
  return res.data;
}