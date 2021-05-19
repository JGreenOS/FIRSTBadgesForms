module.exports = {
  development: {
    username: process.env.DEV_UN,
    password: process.env.DEV_PW,
    database: process.env.DEV_DB,
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    use_env_variable:
      'JAWSDB_URL=mysql://ijytw5ir176sworr:vy75d8k2rjmhxv2d@y5svr1t2r5xudqeq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/vi4kwyfe18vtp6vf',
    dialect: 'mysql',
  },
};
