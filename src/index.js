import { render } from 'react-dom';
import './index.scss';
import App from './App';

const root = document.getElementById('app')

render(<App name="React"/>, root);