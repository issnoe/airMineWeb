module.exports = {
  servers: {
    one: {
      host: '52.161.111.232',
      username: 'jasso',
      password: 'ajlo128522Aire'
    }
  },

  meteor: {
    name: 'aireMine',
    path: '.',
    port: 80,
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://52.161.111.232:80',
      PORT: 80,
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
