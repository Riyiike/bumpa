import React from "react";
import { shallow } from 'enzyme'
import CountryDetailPage from "../../pages/countryDetailPage";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useOutletContext: () => [],
    useLoaderData: (
    ) => [],

}))



describe('test detailpage', () => {
    it('test detailpage', () => {
        const detailPage = shallow(<CountryDetailPage />)
        expect(detailPage).toMatchSnapshot();
    })
})