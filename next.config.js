const withFonts = require("next-fonts");
const withImages = require("next-images");
const withVideo = require("./helpers/withVideo");
module.exports = withFonts(withImages(withVideo()));
