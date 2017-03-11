var path = require('path');

module.exports = {
  appPath: function() {
    switch (process.platform) {
      case 'darwin':
        return path.join(__dirname, '..', '.tmp', 'mac', 'Sqlblocks.app', 'Contents', 'MacOS', 'Sqlblocks');
      case 'linux':
        return path.join(__dirname, '..', '.tmp', 'linux', 'Sqlblocks');
      default:
        throw 'Unsupported platform';
    }
  }
};
