const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const dynamodb = new AWS.DynamoDB.DocumentClient();

function addUser(userID, name) {
  const params = {
    TableName: 'Users',
    Item: { userID, name }
  };
  return dynamodb.put(params).promise();
}

module.exports = { addUser };