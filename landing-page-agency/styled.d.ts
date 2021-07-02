// import original module declarations
import "styled-components";
import { ThemeType } from "utils/theme";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
