import "./App.css";
// import 'antd/dist/antd.css';
import { Layout } from "antd";
import AppHeader from "./components/common/Header";
import AppHome from "./views/home";
import AppFooter from "./components/common/footer";
import {layout} from 'antd'
const { Header,Content,Footer } = Layout;
const App = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
       
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
};
export default App;
