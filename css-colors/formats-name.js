'use strict';

const
  FORMATS_NAME = {
    hsb: {
      label: 'HSB / HSBA (HSV / HSVA)',
      guide: ['hsb(Hdeg, S%, V%)', 'hsba(Hdeg, S%, V%, A%)'],
      description: 'hsb(<H>, <S>, <V>)\nhsba(<H>, <S>, <V>, <A>)\n\nA notation that specifies HSB (HSV) color model.\nThis is composed of the hue <H>, saturation <S>, and brightness <B> (value <V>).\nThe hue is represented as an angle of the color circle (it is represented as the\nslide bar in this color picker). And the alpha <A> channel also can be\nspecified.\nThe HSB (HSV) color model (or kindred one) is the most widely used color model,\nand it is supported by almost graphics softwares such as Adobe, etc.\n\n**NOTE**: This is not defined in current CSS.'
    },
    hsl: {
      label: 'HSL / HSLA',
      guide: ['hsl(Hdeg, S%, L%)', 'hsla(Hdeg, S%, L%, A%)'],
      description: 'hsl(<H>, <S>, <L>)\nhsla(<H>, <S>, <L>, <A>)\n\nA notation that specifies human readable HSL color model.\nThis is composed of the hue <H>, saturation <S>, and lightness <L>. The hue is\nrepresented as an angle of the color circle (it is represented as the slide bar\nin this color picker). And the alpha <A> channel also can be specified.\nThe HSL color model (or kindred one) is the most widely used color model by most\npeople when generating or editing a color, even when writing a color code as\nanother notation such as RGB.'
    },
    hwb: {
      label: 'HWB',
      guide: ['hwb(Hdeg, W%, B%)', 'hwb(Hdeg, W%, B%, A%)'],
      description: 'hwb(<H>, <W>, <B>)\nhwb(<H>, <W>, <B>, <A>)\n\nA notation that specifies HWB color model similar to HSL.\nThis is composed of the hue <H>, whiteness <W>, and blackness <B>. The hue is\nrepresented as an angle of the color circle (it is represented as the slide bar\nin this color picker). And the alpha <A> channel also can be specified.\n\n**NOTE**: Some browsers don\'t support this notation.'
    },
    rgb: {
      label: 'RGB / RGBA',
      guide: ['rgb(R%, G%, B%)', 'rgba(R%, G%, B%, A%)'],
      description: 'rgb(<R>, <G>, <B>)\nrgba(<R>, <G>, <B>, <A>)\n\nA general notation that specifies RGB color model.\nThis is composed of the red <R>, green <G>, and blue <B> channels. And the alpha\n<A> channel also can be specified.\nThe RGB color model is machine readable, and it is not very human readable.\n\n**NOTE**: Some browsers don\'t support decimal values without percentage\nexpression as <R>, <G>, <B>.'
    },
    hex: {
      label: 'RGB-Hex 3/4/6/8 digits',
      description: '#RRGGBB\n#RGB\n#RRGGBBAA\n#RGBA\n\nA legacy notation that specifies the RGB color model.\nThis is composed of the red(R), green(G), and blue(B) channels. And the alpha(A)\nchannel also can be specified.\nThis was the most widely used notation to write codes for a long time, in mainly\nweb technology.\nThe RGB color model is machine readable, and it is not very human readable.\n\n**NOTE**: Some browsers don\'t support <A>. (i.e. this must be 3/6 digits.)'
    },
    named: {
      label: 'Named Color',
      description: 'Defined common colors named by CSS that can be written and read more easily.'
    },
    cmyk: {
      label: 'Device-dependent CMYK',
      guide: ['device-cmyk(C%, M%, Y%, K%)', 'device-cmyk(C%, M%, Y%, K%, A%)', 'device-cmyk(C%, M%, Y%, K%, A%, F)'],
      description: 'device-cmyk(<C>, <M>, <Y>, <K>)\ndevice-cmyk(<C>, <M>, <Y>, <K>, <A>)\ndevice-cmyk(<C>, <M>, <Y>, <K>, <A>, <F>)\n\nA notation that specifies CMYK color model.\nThis is composed of the cyan <C>, magenta <M>, yellow <Y>, and black <K>. And\nthe alpha <A> channel and the fallback color <F> also can be specified.\nThe CMYK color model is the most common print-based ways of representing colors.\n\n**NOTE**: Some browsers don\'t support this notation.'
    },
    gray: {
      label: 'Gray',
      guide: ['gray(S%)', 'gray(S%, A%)'],
      description: 'gray(<S>)\ngray(<S>, <A>)\n\nA notation that specifies grayscale.\nThis composes a color by the shade <S>. And the alpha <A> channel also can be\nspecified.\n\n**NOTE**: Some browsers don\'t support this notation.'
    }
  },

  fs = require('fs'), pathUtil = require('path');

fs.writeFileSync(pathUtil.join(__dirname, '../lib/formats-name.json'), JSON.stringify(FORMATS_NAME));
// for test
fs.writeFileSync(pathUtil.join(__dirname, '../test/formats-name.js'),
  `window.formatsName = ${JSON.stringify(FORMATS_NAME)};`);
