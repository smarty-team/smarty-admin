console.log(1)
function log(): number {
    console.debug('before');
    console.error(2);
    console.debug('after');
    return 0
}
log();
class Foo {
    bar(): void {
        console.log(3)
    }
    render() {
        return ''
    }
}