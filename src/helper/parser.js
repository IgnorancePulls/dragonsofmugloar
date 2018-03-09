const fastXmlParser = require('fast-xml-parser');

function parseXml(xml) {
    return fastXmlParser.parse(xml);
}

module.exports.parseXml = parseXml;