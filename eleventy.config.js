import {load} from 'js-yaml';

export default function (eleventyConfig) {
  eleventyConfig.addDataExtension('yml', (contents) => load(contents));
  eleventyConfig.setNunjucksEnvironmentOptions({
    trimBlocks: true,
    lstripBlocks: true,
  });

  return {
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'templates',
      output: 'src',
      data: '../data',
    },
  };
}
