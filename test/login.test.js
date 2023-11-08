import { Selector, t } from 'testcafe';
import Login from '../pages/Login';
import Home from '../pages/Home';
import { users } from '../users'; 

fixture`Login`.page`http://localhost:3002/login`;

const loginp = new Login();
const homep = new Home();

users.forEach((user) => {
  test(`Iniciar sesión con ${user.email}`, async (t) => {
    await loginp.login(user.email, user.password);
    await t.wait(5000);
    await t.expect(homep.welcomeMessage.exists).ok();
  });
});