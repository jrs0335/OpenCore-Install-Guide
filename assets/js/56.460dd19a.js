(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{496:function(t,e,a){t.exports=a.p+"assets/img/python-path.29d651bd.png"},607:function(t,e,a){"use strict";a.r(e);var r=a(10),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"杂项问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#杂项问题"}},[t._v("#")]),t._v(" 杂项问题")]),t._v(" "),e("p",[t._v("与macOS本身无关的杂项问题，例如多引导。")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#无法运行-acpidump-efi"}},[t._v("无法运行acpidump.efi")])]),e("li",[e("a",{attrs:{href:"#修复ssdttime-无法定位或下载iasl"}},[t._v("修复SSDTTime: 无法定位或下载iasl")])]),e("li",[e("a",{attrs:{href:"#修复python-python未安装或在路径中未找到"}},[t._v("修复Python: Python未安装或在路径中未找到")])]),e("li",[e("a",{attrs:{href:"#windows启动盘看不到apfs驱动器"}},[t._v("Windows启动盘看不到APFS驱动器")])]),e("li",[e("a",{attrs:{href:"#opencore分辨率不正确"}},[t._v("OpenCore分辨率不正确")])]),e("li",[e("a",{attrs:{href:"#在选择器中找不到windows-bootcamp驱动器"}},[t._v("在选择器中找不到Windows/BootCamp驱动器")])]),e("li",[e("a",{attrs:{href:"#没有正确地选择启动磁盘"}},[t._v("没有正确地选择启动磁盘")])]),e("li",[e("a",{attrs:{href:"#启动windows会导致蓝屏或linux崩溃"}},[t._v("启动Windows会导致蓝屏或Linux崩溃")])]),e("li",[e("a",{attrs:{href:"#启动windows错误-ocb-startimage-failed-already-started"}},[t._v("启动Windows错误: OCB: StartImage failed - Already started")])]),e("li",[e("a",{attrs:{href:"#iasl警告-只有x未解决"}},[t._v("iASL警告，只有X未解决")])]),e("li",[e("a",{attrs:{href:"#macos和windows之间的时间不一致"}},[t._v("macOS和Windows之间的时间不一致")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"无法运行acpidump-efi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#无法运行acpidump-efi"}},[t._v("#")]),t._v(" 无法运行"),e("code",[t._v("acpidump.efi")])]),t._v(" "),e("p",[t._v("调用OpenCore shell:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("shell> fs0: //替换正确的驱动器\n\nfs0:\\> dir //验证这是正确的目录\n\n  Directory of fs0:\\\n\n   01/01/01 3:30p  EFI\nfs0:\\> cd EFI\\OC\\Tools //注意它带有正向斜杠\n\nfs0:\\EFI\\OC\\Tools> acpidump.efi -b -n DSDT -z\n")])])]),e("h2",{attrs:{id:"修复ssdttime-无法定位或下载iasl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修复ssdttime-无法定位或下载iasl"}},[t._v("#")]),t._v(" 修复SSDTTime: "),e("code",[t._v("无法定位或下载iasl")])]),t._v(" "),e("p",[t._v("这通常是由于过时的Python版本，请尝试更新Python或将iasl添加到SSDTTime的scripts文件夹:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://bitbucket.org/RehabMan/acpica/downloads/iasl.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("iasl macOS 版本"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://acpica.org/downloads/binary-tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("iasl Windows 版本"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://amdosx.kellynet.nl/iasl.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("iasl Linux 版本"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"修复python-python未安装或在路径中未找到"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修复python-python未安装或在路径中未找到"}},[t._v("#")]),t._v(" 修复Python: "),e("code",[t._v("Python未安装或在路径中未找到")])]),t._v(" "),e("p",[t._v("简单修复，下载并安装最新的python:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.python.org/downloads/macos",target:"_blank",rel:"noopener noreferrer"}},[t._v("macOS 链接"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.python.org/downloads/windows/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows 链接"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.python.org/downloads/source/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux 链接"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("确保 "),e("code",[t._v("将Python添加到PATH")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(496),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"windows启动盘看不到apfs驱动器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows启动盘看不到apfs驱动器"}},[t._v("#")]),t._v(" Windows启动盘看不到APFS驱动器")]),t._v(" "),e("ul",[e("li",[t._v("过时的BootCamp驱动程序(通常6.0版本将附带brigadier, macOS中的BootCamp Utility提供较新的版本，如6.1版本)。 CorpNewt 的分支 brigadier 修复了这个问题: "),e("a",{attrs:{href:"https://github.com/corpnewt/brigadier",target:"_blank",rel:"noopener noreferrer"}},[t._v("CorpNewt 的 brigadier分支"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"opencore分辨率不正确"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#opencore分辨率不正确"}},[t._v("#")]),t._v(" OpenCore分辨率不正确")]),t._v(" "),e("ul",[e("li",[t._v("按照"),e("a",{attrs:{href:"https://sumingyd.github.io/OpenCore-Post-Install/cosmetic/verbose.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("修复分辨率和详细"),e("OutboundLink")],1),t._v("的正确设置，设置 "),e("code",[t._v("UIScale")]),t._v(" 为 "),e("code",[t._v("2")]),t._v(" 的HiDPI")]),t._v(" "),e("li",[t._v("用户还注意到，将"),e("code",[t._v("ConsoleMode")]),t._v("设置为Max有时会失败，让它为空可能会有所帮助")])]),t._v(" "),e("h2",{attrs:{id:"在选择器中找不到windows-bootcamp驱动器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在选择器中找不到windows-bootcamp驱动器"}},[t._v("#")]),t._v(" 在选择器中找不到Windows/BootCamp驱动器")]),t._v(" "),e("p",[t._v("因此，有了OpenCore，我们必须注意，不支持传统的Windows安装，只支持UEFI。现在大多数安装都是基于UEFI的，但是BootCamp Assistant制作的是基于传统的，所以你必须找到其他方法来制作安装程序(谷歌是你的朋友)。这也意味着MasterBootRecord/Hybrid分区也被破坏了，所以你需要格式化你想安装到DiskUtility的驱动器。有关最佳实践，请参阅"),e("a",{attrs:{href:"https://sumingyd.github.io/OpenCore-Multiboot/",target:"_blank",rel:"noopener noreferrer"}},[t._v("多引导指南"),e("OutboundLink")],1),t._v(" on best practices")]),t._v(" "),e("p",[t._v("现在开始进行故障排除:")]),t._v(" "),e("ul",[e("li",[t._v("确保将"),e("code",[t._v("Misc -> Security -> ScanPolicy")]),t._v("设置为"),e("code",[t._v("0")]),t._v("以显示所有驱动器")]),t._v(" "),e("li",[t._v("当Windows引导装载程序位于同一驱动器上时，启用"),e("code",[t._v("Misc -> Boot -> Hideself")])])]),t._v(" "),e("h2",{attrs:{id:"没有正确地选择启动磁盘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#没有正确地选择启动磁盘"}},[t._v("#")]),t._v(" 没有正确地选择启动磁盘")]),t._v(" "),e("p",[t._v("如果您在启动磁盘正确应用新启动项时遇到问题，这很可能是由于I/O注册表中缺少"),e("code",[t._v("DevicePathsSupported")]),t._v("造成的。要解决这个问题，请确保您使用的是"),e("code",[t._v("PlatformInfo -> Automatic -> True")])]),t._v(" "),e("p",[t._v("缺少"),e("code",[t._v("DevicePathsSupported")]),t._v("的例子:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/acidanthera/bugtracker/issues/664#issuecomment-663873846",target:"_blank",rel:"noopener noreferrer"}},[t._v("由于PciRoot不同导致默认DevicePath匹配失败#664"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"启动windows会导致蓝屏或linux崩溃"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动windows会导致蓝屏或linux崩溃"}},[t._v("#")]),t._v(" 启动Windows会导致蓝屏或Linux崩溃")]),t._v(" "),e("p",[t._v("这是由于对齐问题，请确保在支持MATs的固件上启用了"),e("code",[t._v("SyncRuntimePermissions")]),t._v("。检查你的日志，你的固件是否支持内存属性表(通常在2018年或更新的固件上看到)")]),t._v(" "),e("p",[t._v("常见的Windows错误代码:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("0xc000000d")])])]),t._v(" "),e("h2",{attrs:{id:"启动windows错误-ocb-startimage-failed-already-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动windows错误-ocb-startimage-failed-already-started"}},[t._v("#")]),t._v(" 启动Windows错误: "),e("code",[t._v("OCB: StartImage failed - Already started")])]),t._v(" "),e("p",[t._v("这是由于OpenCore在尝试引导Windows时感到困惑，并意外地认为它正在引导OpenCore。这可以通过移动Windows到它自己的驱动器"),e("em",[t._v("或")]),t._v("在BlessOverride下添加一个自定义驱动器路径来避免。更多细节请参阅"),e("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Configuration.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuration.pdf"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"iasl警告-只有x未解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iasl警告-只有x未解决"}},[t._v("#")]),t._v(" iASL警告，只有X未解决")]),t._v(" "),e("p",[t._v("如果你尝试反编译你的DSDT并得到一个类似这样的错误:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("iASL Warning: There were 19 external control methods found during disassembly, but only 0 were resolved (19 unresolved)\n")])])]),e("p",[t._v("当一个ACPI表需要其他表来进行适当的引用时，就会发生这种情况，它不接受dsdt的创建，因为我们只使用它来创建选定的几个ssdt。对于那些担心的人，你可以运行以下命令:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("iasl * [insert all ACPI files here]\n")])])]),e("h2",{attrs:{id:"macos和windows之间的时间不一致"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos和windows之间的时间不一致"}},[t._v("#")]),t._v(" macOS和Windows之间的时间不一致")]),t._v(" "),e("p",[t._v("这是因为macOS使用通用时间，而Windows依赖于格林威治时间，所以你需要强制一个操作系统使用不同的时间测量方式。我们强烈建议修改Windows，因为它的破坏性和痛苦要小得多:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://sumingyd.github.io/OpenCore-Post-Install/multiboot/bootcamp.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装Bootcamp实用程序"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://superuser.com/q/494432",target:"_blank",rel:"noopener noreferrer"}},[t._v("修改Windows注册表"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);