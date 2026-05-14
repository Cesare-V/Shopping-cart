import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Navbar from './Navbar';

const renderNavbar = (cartCount = 0) => {
  return render(
    <CartContext.Provider value={{ cartCount }}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </CartContext.Provider>
  );
};

describe('Navbar', () => {
  test('mostra i link di navigazione', () => {
    renderNavbar();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });

  test('non mostra il badge se il carrello è vuoto', () => {
    renderNavbar(0);
    expect(screen.queryByText('0')).not.toBeInTheDocument();
  });

  test('mostra il badge con il numero corretto di articoli', () => {
    renderNavbar(3);
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});