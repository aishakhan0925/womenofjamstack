const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, loading) {
  const sizes = "(min-width: 704px) 47vw, (min-width: 1055px) 30vw, 100vw";

  let metadata = await Image(src, {
    widths: [300, 600, 900],
    formats: ["avif", "webp"],
    outputDir: "_site/img",
    urlPath: "/img",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading,
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  eleventyConfig.ignores.add("./src/_sass");
  eleventyConfig.ignores.add("./src/_css/main.css.map");

  eleventyConfig.addWatchTarget("./src/css");
  eleventyConfig.addPassthroughCopy({ "./src/_css": "/css" });
  eleventyConfig.addPassthroughCopy({ "./src/_fonts": "/fonts" });
  eleventyConfig.addPassthroughCopy({ "./src/_public": "/" });

  return {
    dir: {
      data: "_data",
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
