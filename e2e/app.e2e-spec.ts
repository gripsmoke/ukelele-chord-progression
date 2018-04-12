import { UkeleleChordProgressionPage } from './app.po';

describe('ukelele-chord-progression App', function() {
  let page: UkeleleChordProgressionPage;

  beforeEach(() => {
    page = new UkeleleChordProgressionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
