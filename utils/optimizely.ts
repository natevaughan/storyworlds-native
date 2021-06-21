const optimizelySdk = require('@optimizely/optimizely-sdk');

const optimizelyClient = optimizelySdk.createInstance({
    sdkKey: 'EcDPA4JKM4mevkuXSVnCH',
    eventBatchSize: 10,
    eventFlushInterval: 1000,
});

export default optimizelyClient;