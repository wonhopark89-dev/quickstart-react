// https://styled-components.com/docs/api#create-a-declarations-file
// import original module declarations
import 'styled-components';

// and extend them!
// override
declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    cardBgColor: string;
  }
}
