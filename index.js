var ttn = require("ttn")

var appID = "weather_station_gronau"
var accessKey = "ttn-account-v2.VB9Pbqjb2R2UHwOTaipHC0jbkM7KFen72d4yNZcA9os"

ttn.data(appID, accessKey)
  .then(function (client) {
    client.on("uplink", function (devID, payload) {
      console.log("Received uplink from ", devID)
      console.log(payload)
    })
  })
  .catch(function (error) {
    console.error("Error", error)
    process.exit(1)
  })
