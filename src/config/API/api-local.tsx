// const protocol = 'http';
const host = 'https://appvelo.com/sm_app';
// const port = '5000';
const trailUrl = 'api';

const hostUrl = `${host}/`;
// const endpoint = `${protocol}://${host}${(port ? ':' + port : '')}/${trailUrl}`;
const endpoint = `${host}/${trailUrl}`;

export default {
    // protocol: protocol,
    host: host,
    // port: port,
    apiUrl: trailUrl,
    endpoint: endpoint,
    hostUrl: hostUrl,
};
