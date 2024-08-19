import http from "@/config/http";
import { CardResponse } from "@/types/response/CardResponse";

export class cardService {
  static getCardByName = (
    name: string,
    type: string = "",
    supertype: string = "",
    page: number = 1,
    cantidad: number = 50
  ) => {
    const qFilterName = `name:${name}*`;
    // const qFilterType = `types:${type}*`;
    // const qFilterSuperTypes = `supertype:${supertype}`;
    // const qFilterCurrentPage = `&page=${page}`;

    // const queryParams = `cards?q=${qFilterSuperTypes} ${
    //   supertype !== "pokemon" ? qFilterName : `${qFilterName} ${qFilterType}`
    // } &pageSize=${cantidad} ${qFilterCurrentPage}`;

    const queryParams = `cards?q=${qFilterName}`;

    return http.get<CardResponse>(`${queryParams}`);
  };
}
