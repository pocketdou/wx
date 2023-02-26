import ServiceInstance from "./index"
import { baseURL, bdBrainURL } from "./config"

const service = new ServiceInstance(baseURL)
const dbService = new ServiceInstance(bdBrainURL)

export { service, dbService }
