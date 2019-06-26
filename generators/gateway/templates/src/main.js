import { ServiceBroker } from 'moleculer';
import ApiService from 'moleculer-web';
import helmet from 'helmet';

const broker = new ServiceBroker({
  logger: console,
  transporter: {
    type: 'NATS',
    options: {
      url: 'nats://localhost:4222',
    },
  },
});

broker.createService({
  name: 'sample-1',
  actions: {},
  mixins: [ApiService],
  settings: {
    use: [helmet()],
    cors: {
      origin: '*',
    },
  },
});

broker.start();
