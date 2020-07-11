import os from 'os';
import moment from 'moment';

const startTime = new Date();

export const osInfo = {
    serverCurrentTime: moment(new Date()).locale('es').format('MMMM Do YYYY, h:mm:ss a'),
    serverStartUpTime: moment(startTime).locale('es').format('MMMM Do YYYY, h:mm:ss a'),
    serverUpTime: moment(startTime).locale('es').fromNow(),
    status: {
        freemem: os.freemem(),
        totalmem: os.totalmem(),
        uptime: os.uptime(),
        hostname: os.hostname(),
        platform: os.platform(),
    }
};