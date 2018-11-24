import Vue from "vue";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
import {
  Button,
  Input,
  Form,
  FormItem,
  Container,
  Row,
  Col,
  Main,
  Aside,
  Header,
  Menu,
  MenuItem,
  Submenu,
  Carousel,
  CarouselItem,
  Popover,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Loading
} from "element-ui";

locale.use(lang);

Vue.use(Button);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Container);
Vue.use(Col);
Vue.use(Row);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Popover);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);

Vue.use(Loading.directive);
