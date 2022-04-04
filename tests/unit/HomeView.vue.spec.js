import HomeView from '../../src/views/HomeView.vue';
import { shallowMount } from '@vue/test-utils';

describe('HomeView', () => {
  it('HomeView component should exist', () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper).toBeTruthy();
  });
});
