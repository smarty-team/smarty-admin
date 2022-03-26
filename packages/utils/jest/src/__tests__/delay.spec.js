const delay = require("../delay");
it("异步测试", (done) => {
  // 开启定时函数模拟
  jest.useFakeTimers();

  delay(() => {
    done();
  });
  //快进，使所有定时器回调
  jest.runAllTimers();
});
