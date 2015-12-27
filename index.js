var moment = require('moment-timezone')
var timezonedetect = require('jstimezonedetect')

module.exports = {
  /**
   * Shifts a UTC value into the current user's timezone
   *
   * @return {string} Adjusted timezone
   */
  shift: function (input) {
    var timezone = timezonedetect.determine()
    var utc = moment.tz(input, 'UTC')
    var clientTz = utc.clone().tz(timezone.name())
    var datestring = clientTz.format('YYYY-MM-DD HH:mm')
    return datestring
  },

  /**
   * Returns the string representation of the current user's timezone
   *
   * @return {string} String representation of the current timezone (IANA zone info key)
   */
  getTimezoneName: function () {
    var timezone = timezonedetect.determine()
    return timezone.name()
  }
}
