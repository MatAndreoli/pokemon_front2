import App from '@/App.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('App', () => {
  describe('given that the component is started', () => {
    it('then should validate name', () => {
      shallowMount(App, { localVue });
      expect(App.name).toBe('App');
    });
  });
});
