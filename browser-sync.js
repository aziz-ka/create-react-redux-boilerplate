module.exports = {
  'port': 8080,
  'proxy': `http://localhost:${process.env.PORT || '3000'}`,
  'open': false,
  'ui': {
    'port': 8088
  }
};
