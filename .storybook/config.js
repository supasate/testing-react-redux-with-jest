import { configure, setAddon } from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info'

const req = require.context('../src/components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

setAddon(infoAddon)

configure(loadStories, module);
