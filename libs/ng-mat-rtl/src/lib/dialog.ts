import { screen, within } from '@storybook/testing-library';
import last from 'lodash/last';
import { Canvas } from './model/canvas';

export const getDialogCanvas = (): Canvas => {
  const dialogs = screen.getAllByRole('dialog');
  const dialog = last(dialogs) as HTMLElement;
  return within(dialog);
};
