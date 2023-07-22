import { createVuetify } from 'vuetify'

//Import Vuetify CSS
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//mdi icon subsets 
import { mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css' 
import '@fortawesome/fontawesome-free/css/all.css'
// //mdiSvg for default
import { aliases, mdi as mdiSvg } from 'vuetify/iconsets/mdi-svg'

export default createVuetify({
  theme: { defaultTheme: 'light' },
  icons: {
    iconfont: "fa" || "mdiSvg",
    defaultSet: 'mdiSvg',
    aliases,
    sets: {
      mdi,
      mdiSvg,
    },
  },
  components,
  directives,
})
