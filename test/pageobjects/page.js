export default class Page {
    open () {
        browser.url(`https://www.facebook.com/`)
        return browser.maximizeWindow();
    }
}
