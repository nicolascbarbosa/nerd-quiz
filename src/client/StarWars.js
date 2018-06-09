import forge from "mappersmith";
import EncodeJson from "mappersmith/middleware/encode-json";

const OrderClient = forge({
  middleware: [EncodeJson],
  host: process.env.API_SRC,

  resources: {
    StarWars: {}
  }
}).StarWars;

export default OrderClient;
