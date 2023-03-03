import React from "react";
import { shallow } from 'enzyme'
import SearchInput from "../../../components/organisms/searchInput";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useSearchParams: () => [],

}))

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
    }),
    useState: () => [],

}))


describe('test mainPage', () => {
    it('test mainPage', () => {
        const btn = shallow(<SearchInput />)
        expect(btn).toMatchSnapshot();
    })
})