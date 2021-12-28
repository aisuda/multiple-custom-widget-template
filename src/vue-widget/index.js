import InfoCard from './info-card';
// @ts-ignore
import { registerRendererByType } from 'amis-widget';

registerRendererByType(InfoCard, {
  type: 'vue-info-card',
  usage: 'renderer',
  weight: 99,
  framework: 'vue',
});
