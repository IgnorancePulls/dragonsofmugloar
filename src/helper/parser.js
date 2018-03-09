const fastXmlParser = require('fast-xml-parser');

function ParseXml(xml) {
    return fastXmlParser.parse(xml);
}

module.exports = ParseXml;