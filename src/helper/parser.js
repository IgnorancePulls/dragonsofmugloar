'use strict';

const fastXmlParser = require('fast-xml-parser');

class ParseXml {
    parseXml(xml) {
        return fastXmlParser.parse(xml);
    }
}

module.exports = ParseXml;
