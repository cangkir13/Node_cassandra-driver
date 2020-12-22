// load packege
const cassandra = require('cassandra-driver');

// make function like ORM (Object Relation Mapping)
const Client = cassandra.Client;
const Mapper = cassandra.mapping.Mapper;

// Config cassandra

const client = new Client({
    contactPoints:['127.0.0.1'], // host cluster
    keyspace:'views', // keyspace / name database
    localDataCenter: 'datacenter1', 
});

// make model naming
const mapper = new Mapper(client, {
    models: { 'Viewers': { tables: ['viewstbl'] } }
})

// call model by name || alias
const Viewers = mapper.forModel('Viewers')

// funciton get all data with asynchronous method
async function getAllViewers() {
    let data = await Viewers.findAll()
    console.log(data)
}

// funciton create/insert data
async function addViewer(viewerID, viewerName) {
    let post = {idview: viewerID, nameview:viewerName}
    await Viewers.insert(post)
    console.log('data sudah di tambahkan ')
    console.log(post)
}

// funciton edit/update data
async function updateViewer(viewerID, viewerName) {
    let post = {idview: viewerID, nameview:viewerName}
    await Viewers.update(post)
    console.log('data sudah di update '+ JSON.stringify(post))
}

// delete data by id
async function removeViewer(viewerID) {
    await Viewers.remove({idview:viewerID})
    console.log('data sudah di hapus')
}

// call function as you needed

addViewer(4, 'insert satu 3')
// updateViewer(1, 'testing update')
// removeViewer(1)
// getAllViewers()
