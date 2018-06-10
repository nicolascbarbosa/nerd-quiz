import forge from 'mappersmith';
import EncodeJson from 'mappersmith/middleware/encode-json';

export default forge({
  middleware: [EncodeJson],
  host: process.env.API_SRC,

  resources: {
    Characters: {
      all: {
        path: '/people',
        method: 'GET',
      },
      byId: {
        path: '/people/{id}',
        method: 'GET',
      },
    },
  },
});
