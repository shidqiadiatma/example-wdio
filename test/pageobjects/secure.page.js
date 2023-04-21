

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get successMessage () {
        return $('/html/body/div[1]/div/div[1]/div/div[5]/div/div/div[3]/div/div/div[1]/div[1]/div/div[1]/div/div/div[1]/span');
    }
    get alertWrongPass () {
        return $('._9ay7');
    }

    get alertWrongEmail () {
        return $('._9kq2')
    }
}

export default new SecurePage();
