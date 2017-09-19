// full options list (defaults)
var md_ops = {
  html:         true,        // Enable HTML tags in source
  xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                              // This is only for full CommonMark compatibility.
  breaks:       false,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                              // useful for external highlighters.
  linkify:      false,        // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  typographer:  false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  //
  // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
  // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed and should be escaped externaly.
  // If result starts with <pre... internal wrapper is skipped.
  highlight: function (/*str, lang*/) { return ''; }
}

var markdown = require('markdown-it')(md_ops)
var markdown_container = require('markdown-it-container')

markdown.use(markdown_container, 'demo', {
  validate: function(params) {
    // return params.trim().match(/^demo\s+(.*)$/);
    return params.trim() === 'demo'
  },
  render: function (tokens, idx) {
    if (tokens[idx].nesting === 1) {
      // opening tag
      var next = tokens[idx + 1]
      var load = next.content
      return '<div>'+load+'\n';
    } else {
      // closing tag
      return '</div>\n';
    }
  }
});

module.exports = markdown

// console.log(markdown.render('::: demo  # h2  :::\n'));
