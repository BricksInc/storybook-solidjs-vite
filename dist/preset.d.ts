import { PresetProperty } from '@storybook/types';
import { StorybookConfig } from './index.js';
import '@storybook/builder-vite';

declare const core: PresetProperty<'core', StorybookConfig>;
declare const viteFinal: StorybookConfig['viteFinal'];

export { core, viteFinal };
