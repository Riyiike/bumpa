import React from "react";
import { shallow } from 'enzyme'
import DropDown from "../../../components/organisms/dropDown";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useSearchParams: () => [],

}))

describe('test dropDown', () => {
    it('test dropDown', () => {
        const btn = shallow(<DropDown />)
        expect(btn).toMatchSnapshot();
    })
})