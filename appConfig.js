var developmentDatabase = {
    postgres: {
    host: 'localhost',
    port: 5432,
    database: 'dd5c1o0pot8f162',
    user: 'ohxyyhtwmfgfos',
    password: 'f667099b9da863bfa6b1679caa3d5c65570d71820469b54c677f0e3eaa4b65fe'
    }
    }
    
    var connectionString = "postgres://ohxyyhtwmfgfos:f667099b9da863bfa6b1679caa3d5c65570d71820469b54c677f0e3eaa4b65fe@ec2-52-213-167-210.eu-west-1.compute.amazonaws.com:5432/d5c1o0pot8f162";
    if (process.env.NODE_ENV == 'production') {
    //Production mode
    if (process.env.DATABASE_URL) {
    developmentDatabase =
    parseConnectionString(process.env.DATABASE_URL);
    } else {
    console.log("process.env.DATABASE_URL empty, connectionStringvariable used");
    developmentDatabase = parseConnectionString(connectionString);
    }
    }else{
    //Development mode
    developmentDatabase = parseConnectionString(connectionString);
    }
    function parseConnectionString(connectionString) {
    if (connectionString) {
    var myRegexp = /(\w+):(\w+)@(.+):(\w+)\/(\w+)/g;
    var match = myRegexp.exec(connectionString);
    if (match.length == 6) {
    developmentDatabase.postgres.user = match[1];
    developmentDatabase.postgres.password = match[2];
    developmentDatabase.postgres.host = match[3];
    developmentDatabase.postgres.port = Number(match[4]);
    developmentDatabase.postgres.database = match[5];
    developmentDatabase.postgres.ssl = true;
    return developmentDatabase;
    }
    }
    console.log("connectionString cannot be parsed");
    return null;
    }
    module.exports = {
    hostname: "http://localhost",
    port: 5656,
    database: {
    postgres: developmentDatabase.postgres
    }
    }