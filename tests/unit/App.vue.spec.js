import App from '../../src/App.vue';
import { shallowMount } from '@vue/test-utils';

describe('App', () => {
  it('App component should exist', () => {
    const wrapper = shallowMount(App, {
      stubs: ['router-view'],
    });
    expect(wrapper).toBeTruthy();
  });
});
