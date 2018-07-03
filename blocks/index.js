import Eos from 'eosjs'

const eos = Eos({httpEndpoint: process.env.HTTP_END_POINT, chainId: process.env.CHAIN_ID})

async function getInfo() {
	let info = await eos.getInfo({});
  return info;
}

export const blockFunc = {
	getInfo,
}