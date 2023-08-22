import { API_PATH } from "@/utils";
import { appAxios } from "@/utils/axios";

export const fetchMovies = ({ s }: { s?: string }) => {
  return appAxios.post(API_PATH.MOVIES, { s });
};
