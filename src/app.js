const { classifyIt, extractIt } = require('./helpers');
const parsers = require('./parsers');

async function classifyText(action, settings) {
    const params = {
        text: parsers.string(action.params.text),
        modelId: parsers.string(action.params.model),
        productionModel: parsers.boolean(action.params.productionModel),
        apiKey : parsers.string(action.params.MONKEYLEARN_API_KEY) || settings.MONKEYLEARN_API_KEY,
    };
    const classifyResponse = await classifyIt(params);

    return classifyResponse.body;
}


async function extractText(action, settings) {
    const params = {
        text: parsers.string(action.params.text),
        modelId: parsers.string(action.params.model),
        productionModel: parsers.boolean(action.params.productionModel),
        apiKey : parsers.string(action.params.MONKEYLEARN_API_KEY) || settings.MONKEYLEARN_API_KEY,
    };
    const extractResponse = await extractIt(params);

    return extractResponse.body;
}

module.exports = {
    classifyText,
    extractText,
    ...require("./autocomplete")
};        