import { ThemeProvider } from 'styled-components';

import { Home } from '@/pages/Home';
import light from '@/theme/light';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <Home />
    </ThemeProvider>
  );
}
