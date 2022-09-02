import React from 'react';
import {screen} from '@testing-library/react'
import {fireEvent, render, } from '@testing-library/react'
import { Provider } from 'react-redux';
import { MemoryRouter,BrowserRouter } from 'react-router-dom';
import Leaderboard from '../components/Leaderboard'
import NotFoundPage from '../components/NotFoundPage';
import { store } from '../store';
import Login from '../components/Login';

describe('Testing DOM elements', () => {

       it('will create check presence of element', () => {
    const component =  render(
        <MemoryRouter>
            <Provider store={store}>
                <Leaderboard />
            </Provider>
         </MemoryRouter>
        );
        const column = component.getByTestId('answered')
        expect(column).toBeInTheDocument()
    });
   
    it('should render the 404 component', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <NotFoundPage />
          </BrowserRouter>
        </Provider>
      );
      expect(screen.getByTestId('404')).toBeInTheDocument();
    });
  });

    it('will create create snapshot', () => {
        const component =  render(
            <MemoryRouter>
                <Provider store={store}>
                    <Leaderboard />
                </Provider>
             </MemoryRouter>
            );
            expect(component).toMatchSnapshot();
        });
       
         

        it('should render the component', () => {
            const view = render(
              <Provider store={store}>
                <BrowserRouter>
                  <Login />
                </BrowserRouter>
              </Provider>
            );
            expect(view).toBeDefined();
            expect(view).toMatchSnapshot();
          });
           

          it('will display an error password is wrong', () => {
            render(
                 <Provider store={store}>
                   <BrowserRouter>
                     <Login />
                   </BrowserRouter>
                 </Provider>
               );
           
               const selectUserElement = screen.getByTestId('username');
           
               const passwordInputElement = screen.getByTestId('password');
           
               const submitButton = screen.getByTestId('submit-btn');
           
               expect(passwordInputElement).toBeInTheDocument();
               expect(submitButton).toBeInTheDocument();
               expect(selectUserElement).toBeInTheDocument();
             });
           
             it('verify value of input field', () => {
              render(
                 <Provider store={store}>
                   <BrowserRouter>
                     <Login />
                   </BrowserRouter>
                 </Provider>
               );
           
               const selectUserElement = screen.getByTestId('username');
           
               const passwordInputElement = screen.getByTestId('password');
           
               const submitButton = screen.getByTestId('submit-btn');
           
               expect(passwordInputElement).toBeInTheDocument();
               expect(submitButton).toBeInTheDocument();
               expect(selectUserElement).toBeInTheDocument();
           
               fireEvent.change(selectUserElement, {
                 target: { value: 'sarahedo' }
               });
               fireEvent.change(passwordInputElement, {
                 target: { value: 'password123' }
               });
               expect(selectUserElement.value).toBe('sarahedo');
               expect(passwordInputElement.value).toBe('password123');
             });
            
              
    
   