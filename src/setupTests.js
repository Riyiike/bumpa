import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
configure({ adapter: new Adapter() });
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {}
    };
  };