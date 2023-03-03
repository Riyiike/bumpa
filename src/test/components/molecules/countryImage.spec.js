import React from "react";
import { shallow } from 'enzyme'
import BorderCountries from "../../../components/molecules/borderCountries";



// 

describe('test mainPage', () => {
    it('test mainPage', () => {
        const btn = shallow(<BorderCountries />)
        expect(btn).toMatchSnapshot();
    })
})