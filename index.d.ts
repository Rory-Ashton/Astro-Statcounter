export interface Props {
  sc_project: number;
  sc_security: string;
  sc_manageConsent?: boolean;
  sc_CMP?: 'cookieyes' | 'vanillaJOP' | 'cookiebot';
}

declare const Statcounter: (props: Props) => any;
export default Statcounter;
