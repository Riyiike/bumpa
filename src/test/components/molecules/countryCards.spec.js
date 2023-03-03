import React from "react";
import { shallow } from 'enzyme'
import CountryCards from "../../../components/molecules/countryCards"



jest.mock('nanoid', () => ({
    ...jest.requireActual('nanoid'),
    // nanoid: () => [],


}))


describe('test mainPage', () => {
    it('test mainPage', () => {
        const btn = shallow(<CountryCards />)
        expect(btn).toMatchSnapshot();
    })
})