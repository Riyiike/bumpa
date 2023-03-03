import React from "react";
import { shallow } from 'enzyme'
import ErrorPage from "../../pages/errorPage";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useRouteError: () => [],

}))



describe('test mainPage', () => {
    it('test mainPage', () => {
        const btn = shallow(<ErrorPage />)
        expect(btn).toMatchSnapshot();
    })
})