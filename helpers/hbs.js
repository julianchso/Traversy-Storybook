const moment = require("moment");

// Helper to format date. Exported to app.js.
module.exports = {
  formatDate: function (date, format) {
    return moment(date).format(format);
  },
};

