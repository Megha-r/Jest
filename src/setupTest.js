// const Enzyme = require('enzyme');

// const EnzymeAdapter = require('enzyme-adapter-react-16');

// Enzyme.configure({
//     adapter: new EnzymeAdapter(),
//     "collectCoverageFrom": [
//         "./test/*.{js}",
//     ]
// });
// console.log("hjgjhgjjhj");

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });