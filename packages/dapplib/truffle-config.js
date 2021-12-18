require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain upgrade grace opera force second'; 
let testAccounts = [
"0xd7937240d5a2a445f8a1de6eeac408ff35070b1e968e93284e5ef1b7f8e57ef0",
"0x7764f1b7862b22e9c2fb501fc8e26d813d58ab2431845f1f7d6e978e353f2b0d",
"0x4deef1c4429565adc7f772a567adf1b7192f432a91ca1e2f5c2eea8d6f57f24f",
"0xb79ca3b98b1bf58bcb75bc063a574e12de213e811d8cb6a537fc9cca0a841e0c",
"0x44041f7ee3412a36d21d1bd190a90d582dda88134cbec82fbd5a812d41827524",
"0x86bf99a88b739c6f5efc85a877c6dd3185ea1b19d06f8ba05a5e6b68daf8a334",
"0xdbccbb5b2b64cb2a6467fc4969b36e6d96ee305e670ce39c1e805cf053de68db",
"0xad7dc6bd7c2e05bd6242b7cfb9ef82412d21e3c20c796abf063b1561da6134b6",
"0x74a98fc2eb33249f25b50876cec21d356253ae385601afef3cff5e7f584cef53",
"0xdcf701e9498bc29c261c77c86e4aaeeccb3fcdb3bbd5e4e34a4f86673a9c0d16"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


