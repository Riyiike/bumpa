import React from "react";
import { shallow } from 'enzyme'
import DropDown from "../../../components/organisms/dropDown";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useSearchParams: () => [],

}))




describe('test mainPage', () => {
    it('test mainPage', () => {
        const btn = shallow(<DropDown />)
        expect(btn).toMatchSnapshot();
    })
})