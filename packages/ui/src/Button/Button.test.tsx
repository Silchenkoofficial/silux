import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('is disabled when disabled prop is set', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('is disabled and aria-busy when loading', () => {
    render(<Button loading>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
  });

  it('does not call onClick when disabled', async () => {
    const onClick = vi.fn();
    render(<Button disabled onClick={onClick}>Click me</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('does not call onClick when loading', async () => {
    const onClick = vi.fn();
    render(<Button loading onClick={onClick}>Click me</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('calls onClick when enabled', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders spinner overlay and keeps content in DOM when loading', () => {
    render(
      <Button loading leftIcon={<span data-testid="icon" />}>
        Click me
      </Button>,
    );
    // Icon stays in DOM (visibility:hidden) to preserve layout — no shift
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    // Button has data-loading attribute
    expect(screen.getByRole('button')).toHaveAttribute('data-loading', 'true');
  });

  it('renders leftIcon when not loading', () => {
    render(<Button leftIcon={<span data-testid="left-icon" />}>Click me</Button>);
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });

  it('renders rightIcon', () => {
    render(<Button rightIcon={<span data-testid="right-icon" />}>Click me</Button>);
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('applies fullWidth class', () => {
    render(<Button fullWidth>Click me</Button>);
    // CSS Modules scope class names — check for the substring
    expect(screen.getByRole('button').className).toMatch(/fullWidth/);
  });

  it('forwards ref', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click me</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('passes through native button props', () => {
    render(<Button type="submit" data-testid="btn">Click me</Button>);
    const button = screen.getByTestId('btn');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('renders child element when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/page">Link</a>
      </Button>,
    );
    const link = screen.getByRole('link', { name: 'Link' });
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    expect(link.className).toMatch(/button/);
  });
});
