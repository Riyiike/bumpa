import React from "react";
import { shallow } from 'enzyme'
import CountryNames from "../../../components/molecules/countryNames";





describe('test mainPage', () => {
    it('test mainPage', () => {
        const btn = shallow(<CountryNames />)
        expect(btn).toMatchSnapshot();
    })
})