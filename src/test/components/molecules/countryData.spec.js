import React from "react";
import { shallow } from 'enzyme'
import CountryData from "../../../components/molecules/countryData";



jest.mock('nanoid', () => ({
    ...jest.requireActual('nanoid'),
    // nanoid: () => [],


}))


describe('test mainPage', () => {
    it('test mainPage', () => {
        const btn = shallow(<CountryData />)
        expect(btn).toMatchSnapshot();
    })
})