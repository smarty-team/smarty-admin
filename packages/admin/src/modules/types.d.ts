import { App } from "vue";
import {Router} from "vue-router"
export type UserModule = (ctx: { app: App, router : Router,isClient: boolean }) => void;