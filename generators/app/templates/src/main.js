import { ServiceBroker } from 'moleculer';
import ApiService from 'moleculer-web';

const broker = new ServiceBroker({
  logger: console,
  transporter: {
    type: 'NATS',
    options: {
      url: process.env.NATS_URL || 'nats://localhost:4222',
    },
  },
});

broker.createService({
  name: 'sample-1',
  actions: {
    async hello() {
      return 'Hello World!';
    },
  },
});

broker.createService(ApiService);

broker.start();
