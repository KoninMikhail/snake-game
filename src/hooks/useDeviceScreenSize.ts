import { up, down } from 'styled-breakpoints';
import { useBreakpoint } from 'styled-breakpoints/react-styled';

export default function useDeviceScreenSize() {
  const isMobile = useBreakpoint(down('md'));
  const isTablet = useBreakpoint(up('md'));
  const isDesktop = useBreakpoint(up('xl'));

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}
