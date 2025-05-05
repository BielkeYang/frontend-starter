module.exports = {
  plugins: [
    require('@brandocms/europacss'),
    require('autoprefixer')({ grid: 'on' }),
    require('postcss-reporter')({
      clearReportedMessages: true,
      throwError: false,
    }),
  ],
}
