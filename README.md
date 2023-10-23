

# pgz-hiprint-html

一款web打印设计插件，简单易用，基于HIPrint。适用于普通HTML和vue项目！可以直接上手使用！

https://www.pusdn.com

## 在线预览（online demo）
https://janeyork-cn.gitee.io/demo.janeyork.pusdn.com/demo/pgz-hiprint-html/index-biz.html

带参数

https://janeyork-cn.gitee.io/demo.janeyork.pusdn.com/demo/pgz-hiprint-html/index-biz.html?pjurl=https%3A%2F%2Fmockapi.eolink.com%2FnXdA6kfce7bb03780dd6f2383cda5310baf683e854fbd05%2Fa



## 截图

![输入图片说明](https://images.gitee.com/uploads/images/2022/0126/171339_ce80dbbe_868742.png "屏幕截图.png")

![输入图片说明](https://images.gitee.com/uploads/images/2022/0126/172103_8bd4285b_868742.png "屏幕截图.png")



## 目录介绍

## 快速使用（参数示例）

> 直接在你的项目（VUE、HTML都行）中，内嵌链接，iframe内嵌、弹窗、新窗口打开，等方式。
> 内嵌链接，有空白的，也有数据回显的，方便打印设计，或者回显从数据库查询出来的预置模板。


空白设计
[https://janeyork-cn.gitee.io/demo.janeyork.pusdn.com/demo/pgz-hiprint-html/index-biz.html](https://janeyork-cn.gitee.io/demo.janeyork.pusdn.com/demo/pgz-hiprint-html/index-biz.html)

回显设计，pjurl=print json url打印配置JSON接口地址
[https://janeyork-cn.gitee.io/demo.janeyork.pusdn.com/demo/pgz-hiprint-html/index-biz.html?pjurl=https%3A%2F%2Fmockapi.eolink.com%2FnXdA6kfce7bb03780dd6f2383cda5310baf683e854fbd05%2Fa](https://janeyork-cn.gitee.io/demo.janeyork.pusdn.com/demo/pgz-hiprint-html/index-biz.html?pjurl=https%3A%2F%2Fmockapi.eolink.com%2FnXdA6kfce7bb03780dd6f2383cda5310baf683e854fbd05%2Fa)

参数含义：
pjurl：返回打印JSON的接口地址(**POST方式，且可以直接访问**)，例如
[https://mockapi.eolink.com/nXdA6kfce7bb03780dd6f2383cda5310baf683e854fbd05/a](https://mockapi.eolink.com/nXdA6kfce7bb03780dd6f2383cda5310baf683e854fbd05/a)

## 业务系统中使用
- 直接使用空白设计
- 使用动态接口参数，传递，回显。接口返回数据参考pjurl
