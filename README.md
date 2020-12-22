# Node_cassandra-driver
simple crud with Object Relation Mapping method

This is simple CRUD with Apache Cassandra-driver packge

#### Library
cassandra-driver : [https://www.npmjs.com/package/cassandra-driver]

#### Required
install node_module in your project
```sh
npm install
```

- configure Cassandra in your mechine to apache-cassandra
- keyspace and table for your application data
- default schema data example

  ```sh
  1. Create keyspace
  CREATE KEYSPACE views
  WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1};
  ```
  ```sh
  2. Create table
  CREATE TABLE viewers (
        idview int PRIMARYKEY,
        nameview text
	);
  ```
- Run file with command
```sh
node index.js
```
