import React from 'react'

function getAllNFT(contract, account) {
    const tokenURIList = []
    const metadataList = []
    getAllTokenURI = async () => {
        const totalSupply = await contract.methods.totalSupply().call()
        for (let i = 0; i < totalSupply; i++) {
            const tokenURI = await contract.methods.tokenURI().call()
            tokenURIList.push(tokenURI)
        }
    }
    getAllTokenURI()

    getAllTokenMetadata = async () => {
        for (let i = 0; i < tokenURIList.length; i++) {
            try {
                const response = await axios.get(tokenURIList[i]);
                metadataList.push(response.data.result);
            } catch (error) {
                console.error(error);
            }
        }
    }
    getAllTokenMetadata()
    return metadataList;
}