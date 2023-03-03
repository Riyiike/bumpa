import React from "react";
import { shallow } from 'enzyme'
import BackBtn from "../../../components/atoms/button/backButton";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
      pathname: 'localhost:3000'
    }),

    useNavigate: () => ({
        pathname: 'localhost:3000'
    })
}))

describe('test button', () => {
    it('test back button', () => {
        const btn = shallow(<BackBtn />)
        expect(btn).toMatchSnapshot();
    })
})