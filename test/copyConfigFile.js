let answer = {
  type: process.argv[2] || 'js',
};
try {
  require('../src/copyConfigFile')(answer);
} catch (err) {
  console.err(err);
}
