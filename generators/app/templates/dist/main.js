"use strict";

var _moleculer = require("moleculer");

var _moleculerWeb = _interopRequireDefault(require("moleculer-web"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const broker = new _moleculer.ServiceBroker({
  logger: console,
  transporter: {
    type: 'NATS',
    options: {
      url: 'nats://localhost:4222'
    }
  }
});
broker.createService({
  name: 'sample-1',
  actions: {
    async hello() {
      const data = await broker.call('sample-2.hello');
      return data;
    }

  }
});
broker.createService(_moleculerWeb.default);
broker.start();