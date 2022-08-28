import NProgress from 'nprogress'
import type { UserModule } from './types'

export const install: UserModule = ({ isClient, router }) => {
    if (isClient) {
        NProgress.inc(0.1); //递增进度条
        NProgress.configure({
            easing: "ease",
            speed: 1000,
            showSpinner: true
        });
        router.beforeEach(() => { NProgress.start() })
        router.afterEach(() => { NProgress.done() })
    }
}