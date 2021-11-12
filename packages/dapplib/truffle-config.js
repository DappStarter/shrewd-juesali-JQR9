require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift release stereo purpose gesture globe equal gate'; 
let testAccounts = [
"0x91b0aa4eb1d9f8756f8b6af487bdbabe899d6f6a4d95326b790afce683c645a3",
"0xb0e15f55e1c49cafc41acf3039f08633aa339b103d47f5cd6fed316953985e43",
"0xccc52b1958a7ea8d3a559a795c907b1ac74c261505eaa03f3b3b102d3ac754b4",
"0x1bed4601b84ba0c62568eeeac4f4e2b0773a74d1ed18ba7ca9e508eb66a113c9",
"0xea094401bf4a928adf496ef8b4697ddb3a96d3fa5388b3e00aef5f7c4bdfd7ed",
"0xfa5c9d9f0c25bb3e4ea02729b8f54bc26491bc2393443377111134b23fddad56",
"0x4d5816303bed234daf9373888beb3909b77c3446a702f043ad31112877956c54",
"0x5d51bb9a0bef2efde5a9b39d60f72572109ea010e71578ab9fe1958e0fb37a50",
"0xbb2a1ff228d150bf06a9c87cfc8af40a1d3593588be8d7d458ab326d51c5719f",
"0xf23f32c349da9561d1d3b444ddb1f6f74598b36f369ace89baf77759eb429bec"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

