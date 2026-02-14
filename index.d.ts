export interface Props {
  sc_project: number;
  sc_security: string;
  sc_manageConsent?: boolean;
  sc_CMP?: 'cookieyes' | 'vanillajop' | 'cookiebot';
}

declare const Statcounter: (props: Props) => any;
export default Statcounter;


declare global {
  interface Window {
    Cookiebot?: {
      consent?: {
        statistics?: boolean;
        [key: string]: unknown;
      };
    };
    getCkyConsent?: () => {
      categories?: {
        analytics?: boolean;
        [key: string]: unknown;
      };
      [key: string]: unknown;
    };
    __sc_astro_listener_added?: boolean;
    _statcounter?: () => void;
  }
}

export {};