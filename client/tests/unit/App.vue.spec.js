import App from '@/App.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('App', () => {
  it('App component should exist', () => {
    shallowMount(App, { localVue });
    expect(App.name).toBe('App');
  });
});
