'use strict'

module.exports = {
    'extends': 'stylelint-config-recommended',
    'rules': {
        'block-no-empty': true,
        'color-no-invalid-hex': true,
        'declaration-colon-space-before': 'never',
        'declaration-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-colon-space-after': 'always',
        'declaration-no-important': true,
        'function-comma-space-after': 'always',
        'property-no-vendor-prefix': true,
        'value-no-vendor-prefix': true,
        'selector-list-comma-newline-after': 'always-multi-line',
        'media-feature-name-no-vendor-prefix': true,
        'max-empty-lines': 2,
        'string-quotes': 'single',
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-trailing-semicolon': 'always',
        'no-eol-whitespace': true,
    }
}
