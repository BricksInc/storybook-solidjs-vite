import { StorybookConfig as StorybookConfig$1 } from '@storybook/types';
import { BuilderOptions, StorybookConfigVite } from '@storybook/builder-vite';

type FrameworkName = 'storybook-solidjs-vite';
type BuilderName = '@storybook/builder-vite';
type FrameworkOptions = {
    builder?: BuilderOptions;
};
type StorybookConfigFramework = {
    framework: FrameworkName | {
        name: FrameworkName;
        options: FrameworkOptions;
    };
    core?: StorybookConfig$1['core'] & {
        builder?: BuilderName | {
            name: BuilderName;
            options: BuilderOptions;
        };
    };
};
/**
 * The interface for Storybook configuration in `main.ts` files.
 */
type StorybookConfig = Omit<StorybookConfig$1, keyof StorybookConfigVite | keyof StorybookConfigFramework> & StorybookConfigVite & StorybookConfigFramework;

export { FrameworkOptions, StorybookConfig };
