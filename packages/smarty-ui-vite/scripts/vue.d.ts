export * from './types/entry'
import SmartyUI, { Button } from './types/entry'
export default SmartyUI

declare module 'vue' {
export interface GlobalComponents {
SButton: typeof import("./types/entry").Button,
JSXButton: typeof import("./types/entry").JSXButton,
: typeof import("./types/entry").SFCButton,
}
}