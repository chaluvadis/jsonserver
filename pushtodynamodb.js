var fs = require("fs");

var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

var dbClient = new AWS.DynamoDB.DocumentClient();

var data = fs.readFileSync("dev-speakers.json");

var speakers = JSON.parse(data);

//utility function to create a single put request
function getSpeaker(index) {
  return {
    TableName: "dev-speakers",
    Item: speakers[index]
  };
}

//recursive function to save one place at a time
function saveSpeaker(index) {
  if (index == speakers.length) {
    console.log("saved all.");
    return;
  }

  var params = getSpeaker(index);
  //spit out what we are saving for sanity
  //use the client to execute put request.
  dbClient.put(params, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("saved Spaker item " + index);
      index += 1;
      //save the next place on the list
      //with half a second delay
      setTimeout(function() {
        saveSpeaker(index);
      }, 1000);
    }
  });
}

// start saving from index - 0
saveSpeaker(0);
