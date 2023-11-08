import { Selector, t } from 'testcafe';

export default class Home {
    constructor() {
        this.welcomeMessage = Selector('h1').withText('Hotel California');
    }

    async getWelcomeMessage() {
        return this.welcomeMessage.innerText;
    }
}