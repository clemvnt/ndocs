import DefaultTheme from 'vitepress/theme';
import MyLayout from './Layout.vue';
import Switch from './components/Switch.vue';
import SwitchAppearance from './components/SwitchAppearance.vue';
import 'uno.css';
import './styles/variables.css';

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('Switch', Switch);
    app.component('SwitchAppearance', SwitchAppearance);
  },
};
