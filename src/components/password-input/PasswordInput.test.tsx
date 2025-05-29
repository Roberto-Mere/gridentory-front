import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import PasswordInput from './PasswordInput';

vi.mock('../../assets/svg/eye-hidden.svg', () => ({
  default: () => <svg data-testid="mock-icon" />,
}));

describe('Password input', () => {
  it('should hide password by default', () => {
    render(<PasswordInput />);
    const passwordInput = screen.getByLabelText(/password/i);

    expect(passwordInput).toHaveProperty('type', 'password');
  });
});
