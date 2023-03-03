import React from "react";
import { shallow } from 'enzyme'
import MainPage from "../../pages/mainPage";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useOutletContext: () => [],
    useSearchParams: () => [],

}))

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        regionIndex: 1,
        searchFilter: ''
    }),

}))


describe('test mainPage', () => {
    it('test mainPage', () => {
        const btn = shallow(<MainPage />)
        expect(btn).toMatchSnapshot();
    })
})