import Login from "../pages/Login";
import { Selector, t } from 'testcafe';

fixture`Login`.page`http://localhost:3002/login`;

const loginp = new Login();

const clickContactButton = async (t) => {
  const contactButton = Selector('a[href="/contact"]'); 
  await t.click(contactButton);
};

test(`Contacto`, async (t) => {
  await clickContactButton(t);
  await t.wait(2000);
});
