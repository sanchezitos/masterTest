import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { handleResponse } from "../utils/hanldeResponse";
import { getPopularRepositories } from "../utils/gitHub";


export const get = async (): Promise<APIGatewayProxyResult> => {

    const repositories = await getPopularRepositories()
    return handleResponse(200, repositories)
}