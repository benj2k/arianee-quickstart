import { Arianee, NETWORK } from '@arianee/arianeejs'

(async () => {

    console.log("ok")
    const arianee = new Arianee();
    const arianeeClient = await arianee.init(NETWORK.testnet);
    const wallet = await arianeeClient.fromMnemonic("pave dance reason box fury trap chat latin flip upon jelly orient");
    console.log(wallet.address);
    console.log("end")

})();
