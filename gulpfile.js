const GulpClient = require('gulp');
const sbg = require('static-blog-generator');

GulpClient.task('copy', async () => {
  sbg.copyAssets();
  sbg.copyPosts(null, 'hexo-theme-unit-test');
});
