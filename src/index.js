var worker = require('./lib/worker');
const logger = require('./lib/logger');

logger.info('Starting up mongo-k8s-sidecar');

worker.init(function(err) {
  if (err) {
    logger.error('Error trying to initialize mongo-k8s-sidecar', err);
    return;
  }

  worker.workloop();
});
