import { NgQuickStart360Page } from './app.po';

describe('ng-quick-start360 App', () => {
  let page: NgQuickStart360Page;

  beforeEach(() => {
    page = new NgQuickStart360Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
