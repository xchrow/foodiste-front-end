import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#253759',
          secondary: '#f8b400',
          background: '#f3f3f3'

        },
      },
    },
  },
})
