var StellarSdk = require('stellar-sdk')
var request = require('request');

var server = new StellarSdk.Server('https://horizon-testnet.stellar.org')
var pair = StellarSdk.Keypair.random()

pair.secret()
// SAV76USXIJOBMEQXPANUOQM6F5LIOTLPDIDVRJBFFE2MDJXG24TAPUU7
pair.publicKey()
let keypair = {
 'publicKey': pair.publicKey(),
 'secretKey': pair.secret()
}
console.log(keypair)
