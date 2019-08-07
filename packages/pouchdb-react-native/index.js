'use strict'

import PouchDB from '@craftzdog/pouchdb-core-react-native'
import AsyncStoragePouch from 'pouchdb-adapter-asyncstorage'
import HttpPouch from 'pouchdb-adapter-http'
import mapreduce from 'pouchdb-mapreduce'
import replication from '@craftzdog/pouchdb-replication-react-native'
import { decode, encode } from 'base-64'

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

// Avoid using node dependent modules
process.browser = true

PouchDB
  .plugin(AsyncStoragePouch)
  .plugin(HttpPouch)
  .plugin(mapreduce)
  .plugin(replication)

export default PouchDB
