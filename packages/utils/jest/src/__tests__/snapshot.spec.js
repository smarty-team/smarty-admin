const { generateDiv } = require('../dom') 
require('../jsdom-config')
it("Dom的快照测试", () => {
    generateDiv()
    expect(document.getElementsByClassName('c1')).toMatchSnapshot()
})