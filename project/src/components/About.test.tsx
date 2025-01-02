import { render } from '@testing-library/react';
import { About } from './About';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('About Component', () => {
    it('should render correctly', () => {
        const { container } = render(<About />);
        expect(container).toBeInTheDocument();
    });
});