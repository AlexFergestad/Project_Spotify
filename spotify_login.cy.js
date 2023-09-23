//import { SpotifyHome, SpotifySearchBar } from './page_objects/spotify_login.cy.page_object_version.js';


describe('In this test, we will automate the functionalities of the "Search Bar" feature', () => {
  //const homePage = new SpotifyHome();
  //const searchBar = new SpotifySearchBar();

  beforeEach(() => {
    // Visits the actual home page of Spotify
    //homePage.visitHomePage();
    cy.visit('https://open.spotify.com/');

    // Clicks on the search bar
    //searchBar.getSearchBar().click();
    cy.get(':nth-child(2) > .link-subtle > .Type__TypeElement-sc-goli3j-0');

    // Types in 'Alternative Genres' in the search bar
    //searchBar.getSearchBar().type('Alternative Genres');
    cy.get(':nth-child(2) > .link-subtle > .Type__TypeElement-sc-goli3j-0').type("Alternative Genre");
  });

  it('I can get recommendations when I type in different music genres in the search bar', () => {
    // Add your test code here
  });

  it('After using the search bar, I can see the top result', () => {
    // Cypress interacts with what the top result says below
    cy.get('.iGyMsGo7FgYQQThBj2y9 > .q8AZzDc_1BumBHZg0tZb > .OMuRYOdpUbGif12_lRJl > .onVWL7MW4PW9FyVajBAc > .Type__TypeElement-sc-goli3j-0');
  });

  it('I see the top alternative songs', () => {
    // Trying to get the scroll bar to scroll to the top songs that show up after being searched in the search bar
    cy.get('.VL6wjp4Br_D3FEWrUGGR');
  });

  it('I see the top Artists', () => {
    // Trying to get the scroll bar to scroll to the top songs that show up after being searched in the search bar
    cy.viewport(1920, 1080);
    cy.get('[data-testid="artists-search-entity-shelf"] > .q8AZzDc_1BumBHZg0tZb > .OMuRYOdpUbGif12_lRJl > .onVWL7MW4PW9FyVajBAc > .Type__TypeElement-sc-goli3j-0');
  });
});
