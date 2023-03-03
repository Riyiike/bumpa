import React from "react";
import { shallow } from 'enzyme'
import CountryTitle from "../../../components/molecules/countryTitle";




describe('test mainPage', () => {
    it('test mainPage', () => {
        const btn = shallow(<CountryTitle />)
        expect(btn).toMatchSnapshot();
    })
})