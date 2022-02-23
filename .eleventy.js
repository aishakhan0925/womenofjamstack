module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("./src/_sass");
  eleventyConfig.ignores.add("./src/_css/main.css.map");

  eleventyConfig.addWatchTarget("./src/css");
  eleventyConfig.addPassthroughCopy({ "./src/_css": "/css" });
  eleventyConfig.addPassthroughCopy({ "./src/_fonts": "/fonts" });
  eleventyConfig.addPassthroughCopy({ "./src/_public": "/" });

  eleventyConfig.addPassthroughCopy({ "./src/_data/images": "/images" });

  return {
    dir: {
      data: "_data",
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
