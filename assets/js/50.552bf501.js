(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{430:function(t,e,r){t.exports=r.p+"assets/img/good-efi.cdd27487.png"},431:function(t,e,r){t.exports=r.p+"assets/img/bad-efi.3a816e2e.png"},586:function(t,e,r){"use strict";r.r(e);var a=r(10),_=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"安装过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装过程"}},[t._v("#")]),t._v(" 安装过程")]),t._v(" "),e("p",[t._v("现在你已经完成了OpenCore的设置，你终于能够启动，需要记住的主要事情:")]),t._v(" "),e("ul",[e("li",[t._v("为macOS启用最佳BIOS设置")]),t._v(" "),e("li",[t._v("阅读 "),e("a",{attrs:{href:"https://sumingyd.github.io/OpenCore-Multiboot/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenCore 多引导指南"),e("OutboundLink")],1),t._v(" 以及 "),e("a",{attrs:{href:"https://sumingyd.github.io/OpenCore-Post-Install/multiboot/bootstrap",target:"_blank",rel:"noopener noreferrer"}},[t._v("设置启动选项"),e("OutboundLink")],1),t._v(" "),e("ul",[e("li",[t._v("主要适用于那些在单个驱动器上运行的多个操作系统人")])])]),t._v(" "),e("li",[t._v("和"),e("RouterLink",{attrs:{to:"/troubleshooting/troubleshooting.html"}},[t._v("通用故障诊断")]),t._v(" 页面")],1),t._v(" "),e("li",[t._v("阅读"),e("RouterLink",{attrs:{to:"/troubleshooting/boot.html"}},[t._v("macOS引导过程")]),t._v(" "),e("ul",[e("li",[t._v("可以帮助第一次安装的用户更好地了解他们可能在哪里卡住")])])],1),t._v(" "),e("li",[t._v("以及大量的耐心")])]),t._v(" "),e("h2",{attrs:{id:"再次检查你的准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#再次检查你的准备工作"}},[t._v("#")]),t._v(" 再次检查你的准备工作")]),t._v(" "),e("p",[t._v("在启动之前，我们应该检查的最后一件事是你的EFI是如何设置的:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("好的 EFI")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("坏的 EFI")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:r(430),alt:""}})]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:r(431),alt:""}})])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("EFI文件夹在EFI分区上")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("EFI文件夹不见了")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("已编译ACPI文件(.aml)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("未编译ACPI文件(.dsl)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("不包括DSDT")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("* DSDT包括在内")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("删除不需要的驱动程序(.efi)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("保留默认驱动程序")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("删除不需要的工具(.efi)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("保留默认工具")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("kext文件夹中的所有文件都以 .kext 结尾")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("包括源代码和文件夹")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("config.plist 在 EFI/OC 内")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("既没有重命名也没有将.plist放在正确的位置")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("只使用需要的kext")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("下载了每一个列出的kext")])])])]),t._v(" "),e("h2",{attrs:{id:"在-usb-上启动-opencore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-usb-上启动-opencore"}},[t._v("#")]),t._v(" 在 USB 上启动 OpenCore")]),t._v(" "),e("p",[t._v("现在你终于准备好把u盘插入电脑并启动了。请记住，大多数笔记本电脑和一些台式机仍然会默认使用Windows内部驱动器，你需要在BIOS启动选项中手动选择OpenCore。您需要查看用户手册或使用谷歌来找出如何访问BIOS和启动菜单(例如：Esc、F2 F10或F12)")]),t._v(" "),e("p",[t._v("启动USB后，你可能会看到以下启动选项:")]),t._v(" "),e("ol",[e("li",[t._v("Windows")]),t._v(" "),e("li",[t._v("macOS Base System (External) / Install macOS Big Sur (External) / "),e("em",[t._v("u盘名称")]),t._v(" (External)")]),t._v(" "),e("li",[t._v("OpenShell.efi")]),t._v(" "),e("li",[t._v("Reset NVRAM")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("你可能需要按空格键才能看到安装程序，因为在OpenCore的后续版本中默认启用了"),e("code",[t._v("HideAuxiliary")]),t._v("。")])]),t._v(" "),e("p",[t._v("对我们来说, "),e("strong",[t._v("选项 2.")]),t._v(" 就是我们想要的。根据安装程序的制作方式，它可能显示为 "),e("strong",[t._v('"macOS Base System (External)"')]),t._v(", "),e("strong",[t._v('"Install macOS Big Sur (External)"')]),t._v(" 或 "),e("strong",[t._v('"'),e("em",[t._v("你的USB驱动器名称")]),t._v(' (External)"')])]),t._v(" "),e("h2",{attrs:{id:"macos-安装程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos-安装程序"}},[t._v("#")]),t._v(" macOS 安装程序")]),t._v(" "),e("p",[t._v("因此，您终于启动了安装程序，完成了冗长的操作并点击安装程序!现在你已经走到了这一步，需要记住的主要事情是:")]),t._v(" "),e("ul",[e("li",[t._v("你希望安装macOS的驱动 "),e("strong",[t._v("必须")]),t._v(" 同时是 GUID分区模式 "),e("strong",[t._v("和")]),t._v(" APFS\n"),e("ul",[e("li",[t._v("硬盘上的High Sierra，所有Sierra用户都需要使用macOS Journaled(HFS+)")])])]),t._v(" "),e("li",[t._v("驱动器 "),e("strong",[t._v("必须")]),t._v(" 有一个200MB的分区\n"),e("ul",[e("li",[t._v("默认情况下，macOS将设置新格式化的驱动器为200MB")]),t._v(" "),e("li",[t._v("参见 "),e("a",{attrs:{href:"https://sumingyd.github.io/OpenCore-Multiboot/",target:"_blank",rel:"noopener noreferrer"}},[t._v("多引导指南"),e("OutboundLink")],1),t._v(" 了解更多关于分区Windows驱动器的信息")])])])]),t._v(" "),e("p",[t._v("开始安装后，需要等待系统重新启动。您将再次选择引导到OpenCore，但不是选择USB installer/recovery-您将选择硬盘上的macOS安装程序以继续安装。你会看到一个苹果的logo，几分钟后你会看到底部有一个计时器，上面写着“还剩x分钟”。这可能是喝饮料或吃零食的好时机，因为这需要一段时间。它可能会重新启动几次，但如果一切顺利，它最终会把你带到“设置你的Mac”界面。")]),t._v(" "),e("p",[t._v("你成功了! 🎉\n您需要浏览安装后的页面来完成系统的设置")])])}),[],!1,null,null,null);e.default=_.exports}}]);