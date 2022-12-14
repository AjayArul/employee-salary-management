import { render, screen } from '@testing-library/react';
import Loading from './../../components/loading/Loading';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('renders "Loading" with redux', () => {
    const initialState = { success: null };
    const mockStore = configureStore();
    let store;

    it('Check the severity SUCCESS props!"', () => {
        store = mockStore(initialState);
        render( 
            <Provider store={store}>
                <BrowserRouter>
                    <Loading/>
                </BrowserRouter>
            </Provider> 
        );
        expect(screen.getByRole('progressbar')).not.toBeNull();
        
    });
});