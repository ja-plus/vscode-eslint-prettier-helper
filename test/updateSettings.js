try {
    // require('../src/updateSettings.js')({ type: 'vue2' })
    require('../src/updateSettings.js')({ type: 'svelte3' })
} catch (err) {
    console.error(err)
}
