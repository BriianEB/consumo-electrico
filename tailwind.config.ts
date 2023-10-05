import type { Config } from 'tailwindcss';

import colors from './app/_shared/theme/colors';

const config: Config = {
  content: [    
    './app/**/*.tsx'
  ],
  theme: {
    colors: colors
  },
  plugins: [],
}
export default config
