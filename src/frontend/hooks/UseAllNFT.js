import React from 'react'

async function getAllTokenURI(contract){
    const tokenURIList = []
    const totalSupply = await contract.methods.totalSupply().call()
    for (let i = 0; i < totalSupply; i++) {
        const tokenURI = await contract.methods.tokenURI(i).call()
        tokenURIList.push(tokenURI)
    }
    return tokenURIList
}

async function getAllTokenMetadata(contract, tokenURIList){
    const axios = require('axios')
    const tempMetadataList = []
    for (let i = 0; i < tokenURIList.length; i++) {
        try {
            const response = await axios.get(tokenURIList[i]);
            tempMetadataList.push(response.data.result);
        } catch (error) {
            console.error(error);
        }
    }
    return tempMetadataList
}

async function UseAllNFT(contract) {
    const tokenURIList = await getAllTokenURI(contract)
    const metadataList = await getAllTokenMetadata(contract, tokenURIList)
    return metadataList;
}

export default UseAllNFT