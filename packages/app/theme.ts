import { makeTheme } from 'dripsy'
// https://www.dripsy.xyz/usage/theming/create

// * We have extracted colors to an external refrence for use in
// * react native element's `style={({ hovered, pressed }) => ({`
// * because Dripsy doesn't support hover states through `sx` and `&:hover`
// * https://github.com/nandorojo/dripsy/issues/7
const colorSet = {
  $black: '#000',
  $white: '#FFF',
  $text: '#000',
  $background: '#fff',
  $primary: '#FEDA00',
  $primaryHighlight: '#FFE44D',
  $primaryLowlight: '#CCAD00',
  $secondary: '#2081E2',
  $secondaryHighlight: '#2E8EEE',
  $secondaryLowlight: '#1868B7',
  $tertiary: '#30a46c',
  $tertiaryHighlight: '#4cc38a',
  $tertiaryLowlight: '#236e4a',
}

const theme = makeTheme({
  breakpoints: ['800px', '1100px', '1350px'],
  space: {
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
  },
  sizes: {
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
  },
  fontSizes: {
    $0: 12,
    $1: 14,
    $2: 16,
    $3: 18,
    $4: 20,
    $5: 24,
    $6: 28,
    $7: 32,
    $8: 36,
    $9: 40,
    $10: 44,
  },
  fontWeights: {
    body: '400',
    heading: '700',
    bold: '700',
  },
  colors: {
    ...colorSet,
    $gray: [
      '#000000',
      '#1a1a1a',
      '#353535',
      '#4e4e4e',
      '#686868',
      '#808080',
      '#979797',
      '#adadad',
      '#c2c2c2',
      '#d7d7d7',
      '#ebebeb',
      '#ffffff',
    ],
  },
  borderWidths: {
    $0: '0px',
    $1: '1px',
    $2: '2px',
    $3: '4px',
  },
  fonts: {
    heading: 'Roboto Mono',
    body: 'Roboto Mono',
    mono: 'Inconsolata',
  },
  lineHeights: { solid: 1, heading: 1.25, body: 1.5 },
  name: 'Vertex-XR',
  easingFunctions: {
    $0: 'cubic-bezier(0.543, 1.086, 0.5, -0.383)',
    $1: 'ease',
    $2: 'ease-out',
    $3: 'ease-in-out',
    $4: 'linear',
  },
  borderStyles: ['none', 'solid'],
  description: '',
  durations: ['125ms', '250ms', '500ms'],
  boxShadows: {
    0: '0px 0px 1px 0px rgba(0, 0, 0, 0.125), 0px 0px 2px 0px rgba(0, 0, 0, 0.125), 0px 0px 4px 0px rgba(0, 0, 0, 0.125), 0px 0px 8px 0px rgba(0, 0, 0, 0.125), 0px 0px 16px 0px rgba(0, 0, 0, 0.125)',
    1: '0px 0px 1px 0px hsla(0, 0%, 0%, 0.16), 0px 0px 2px 0px hsla(0, 0%, 0%, 0.16), 0px 0px 4px 0px hsla(0, 0%, 0%, 0.16), 0px 0px 8px 0px hsla(0, 0%, 0%, 0.16)',
    2: '0px 0px 1px 0px hsla(0, 0%, 0%, 0.07), 0px 0px 2px 0px hsla(0, 0%, 0%, 0.07), 0px 0px 4px 0px hsla(0, 0%, 0%, 0.07), 0px 0px 8px 0px hsla(0, 0%, 0%, 0.07), 0px 0px 16px 0px hsla(0, 0%, 0%, 0.07)',
    3: '0px 0px 1px 0px rgba(0, 0, 0, 0.25), 0px 0px 2px 0px rgba(0, 0, 0, 0.20), 0px 0px 4px 0px rgba(0, 0, 0, 0.15), 0px 0px 8px 0px rgba(0, 0, 0, 0.10), 0px 0px 16px 0px rgba(0, 0, 0, 0.05)',
    4: '0px 1px 2px 0px hsla(0, 0%, 0%, 0.035), 0px 2px 4px 0px hsla(0, 0%, 0%, 0.07), 0px 4px 8px 0px hsla(0, 0%, 0%, 0.07), 0px 8px 16px 0px hsla(0, 0%, 0%, 0.07), 0px 32px 64px 0px hsla(0, 0%, 0%, 0.07)',
  },
  borderRadius: {
    $0: '0px',
    $1: '4px',
    $2: '6px',
    $3: '8px',
    $4: '16px',
    $5: '9999px',
  },
  letterSpacings: { tracked: '0.1em', negative: '-0.05em', large: '0.25em' },
  textShadows: {},
  gradients: {},
  text: {
    body: {
      fontFamily: 'root',
      color: '$text',
    },
    thick: {
      fontWeight: 'bold',
    },
    h1: {
      fontSize: '$7',
      color: '$text',
      fontFamily: 'heading',
    },
    h2: {
      fontSize: '$6',
      color: '$text',
      fontFamily: 'heading',
    },
    h3: {
      fontSize: '$5',
      color: '$text',
      fontFamily: 'heading',
    },
    h4: {
      fontSize: '$4',
      color: '$text',
      fontFamily: 'heading',
    },
    h5: {
      fontSize: '$3',
      color: '$text',
      fontFamily: 'heading',
    },
    h6: {
      fontSize: '$2',
      color: '$text',
      fontFamily: 'heading',
    },
    p: {
      fontSize: '$0', // 12px from `fontSizes`
      mb: '$3', // 16px from `space`
      color: '$text',
      fontFamily: 'body',
    },
    span: {
      color: '$text',
      fontFamily: 'body',
    },
    a: {
      color: '$text',
      fontFamily: 'body',
    },
  },
  buttons: {
    primary: {
      color: colorSet.$black,
      background: colorSet.$primary,
      borderColor: colorSet.$primary,
      '&:hover': {
        color: colorSet.$black,
        background: colorSet.$primaryHighlight,
        borderColor: colorSet.$primaryHighlight,
      },
      '&:active': {
        color: colorSet.$black,
        background: colorSet.$primaryLowlight,
        borderColor: colorSet.$primaryLowlight,
      },
    },
    secondary: {
      color: colorSet.$white,
      background: colorSet.$secondary,
      borderColor: colorSet.$secondary,
      '&:hover': {
        color: colorSet.$white,
        background: colorSet.$secondaryHighlight,
        borderColor: colorSet.$secondaryHighlight,
      },
      '&:active': {
        color: colorSet.$white,
        background: colorSet.$secondaryLowlight,
        borderColor: colorSet.$secondaryLowlight,
      },
    },
    tertiary: {
      color: colorSet.$white,
      background: colorSet.$tertiary,
      borderColor: colorSet.$tertiary,
      '&:hover': {
        color: colorSet.$white,
        background: colorSet.$tertiaryHighlight,
        borderColor: colorSet.$tertiaryHighlight,
      },
      '&:active': {
        color: colorSet.$white,
        background: colorSet.$tertiaryLowlight,
        borderColor: colorSet.$tertiaryLowlight,
      },
    },
  },
})

export default theme
