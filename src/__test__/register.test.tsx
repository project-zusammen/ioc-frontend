import { render, screen } from '@testing-library/react';

import Register from '@/app/(auth)/register/page';

describe('Register Page', () => {
  it('should render', () => {
    const page = render(<Register />);
    expect(page).toMatchSnapshot();
  });
});
