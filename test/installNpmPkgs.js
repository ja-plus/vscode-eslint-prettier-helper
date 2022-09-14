try {
  // require('../src/updateSettings.js')({ type: 'vue2' })
  require('../src/installNpmPkgs.js')({ type: 'ts' });
} catch (err) {
  console.error(err);
}
