import React from "react";
import { shallow } from 'enzyme'
import NavBar from "../../../components/organisms/NavBar";


jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        darkTheme: "NavBarContext",
    }),

}))


describe('test mainPage', () => {
    it('test mainPage', () => {
        const btn = shallow(<NavBar />)
        expect(btn).toMatchSnapshot();
    })
})