import {homePageClass} from "../../support/pageObjects-B/HomePageClass";
import {resultPageClass} from "../../support/pageObjects-B/ResultPageClass";

describe('Page Object Pattern - B', () => {
    beforeEach(() => {
        homePageClass.visit()
    });

    it('search Dilijan and filter 4 stars', () => {
        homePageClass.fillSearchFields()
        resultPageClass.clickFourStars()

    });
});