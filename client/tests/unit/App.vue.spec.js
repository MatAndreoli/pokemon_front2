import App from '../../src/App.vue';
import { shallowMount } from '@vue/test-utils';

describe('App', () => {
  it('App component should exist', () => {
    shallowMount(App);
    expect(App.name).toBe('App');
  });
});
