// TODO try to render _layout.html for application shell
// -> anything imported needs to be compiled too

module.exports = function() {
  return `module.exports = { render() { return { html: '', css: null, head: '' }; } }`;
};
