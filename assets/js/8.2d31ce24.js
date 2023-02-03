(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{508:function(t,s,a){t.exports=a.p+"assets/img/serial-header.f60954b5.png"},509:function(t,s,a){t.exports=a.p+"assets/img/serial-connector.6e514758.jpg"},510:function(t,s,a){t.exports=a.p+"assets/img/817DNdBZDkL._AC_SL1500_.af22055f.jpg"},511:function(t,s,a){t.exports=a.p+"assets/img/61yHczOwpTL._AC_SL1001_.f84613fd.jpg"},512:function(t,s,a){t.exports=a.p+"assets/img/coolterm-first-start.9ab65697.png"},513:function(t,s,a){t.exports=a.p+"assets/img/coolterm-settings.2c1445fe.png"},514:function(t,s,a){t.exports=a.p+"assets/img/coolterm-connect.fb665577.png"},515:function(t,s,a){t.exports=a.p+"assets/img/coolterm-record.f7e0709b.png"},516:function(t,s,a){t.exports=a.p+"assets/img/more-downloads.edd8905d.png"},517:function(t,s,a){t.exports=a.p+"assets/img/kdk-install.015e9b14.png"},518:function(t,s,a){t.exports=a.p+"assets/img/kdk-installed.41bf377f.png"},610:function(t,s,a){"use strict";a.r(s);var e=a(10),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"系统调试-深入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统调试-深入"}},[t._v("#")]),t._v(" 系统调试:深入")]),t._v(" "),s("p",[t._v("本节将更深入地讨论故障排除，特别关注具有适当调试输出和可选串行设置的更低级的调试。")]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v(":99%的用户不需要这种级别的调试，这只适用于核心或极端情况。")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#efi-设置"}},[t._v("EFI 设置")])]),s("li",[s("a",{attrs:{href:"#config-plist-设置"}},[t._v("Config.plist 设置")]),s("ul",[s("li",[s("a",{attrs:{href:"#misc"}},[t._v("Misc")])]),s("li",[s("a",{attrs:{href:"#nvram"}},[t._v("NVRAM")])])])]),s("li",[s("a",{attrs:{href:"#串行设置-可选"}},[t._v("串行设置(可选)")]),s("ul",[s("li",[s("a",{attrs:{href:"#硬件设置"}},[t._v("硬件设置")])]),s("li",[s("a",{attrs:{href:"#coolterm-设置"}},[t._v("CoolTerm 设置")])])])]),s("li",[s("a",{attrs:{href:"#内核调试工具包-可选"}},[t._v("内核调试工具包(可选)")]),s("ul",[s("li",[s("a",{attrs:{href:"#kdk在已安装的操作系统上"}},[t._v("KDK在已安装的操作系统上")])]),s("li",[s("a",{attrs:{href:"#卸载kdk"}},[t._v("卸载KDK")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"efi-设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#efi-设置"}},[t._v("#")]),t._v(" EFI 设置")]),t._v(" "),s("p",[t._v("在大多数情况下，只需要相当小的更改。我们主要推荐的是DEBUG版本的"),s("strong",[t._v("OpenCore")]),t._v("和所有的"),s("strong",[t._v("kext")]),t._v("。这可以帮助您获得所有必要的数据，有关OpenCore调试的更多详细信息，请参阅这里: "),s("RouterLink",{attrs:{to:"/troubleshooting/debug.html"}},[t._v("OpenCore调试")])],1),t._v(" "),s("p",[t._v("除了使用OpenCore和kexts的DEBUG版本，这些工具也可以提供很大的帮助:")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://github.com/acidanthera/DebugEnhancer/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("DebugEnhancer.kext"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("极大地帮助内核调试，同时还修补了 "),s("a",{attrs:{href:"https://github.com/acidanthera/DebugEnhancer/blob/4495911971011a1a7a0ffe8605d6ca4b341f67d9/DebugEnhancer/kern_dbgenhancer.cpp#L131",target:"_blank",rel:"noopener noreferrer"}},[t._v("kern.msgbuf to 10485760"),s("OutboundLink")],1),t._v(" ，并允许更大的内核日志。")]),t._v(" "),s("li",[t._v("注意这个kext不能与内核初始化一起启动，所以早期的日志不会被修补，直到kext在PCI配置阶段之前加载")])])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://gist.github.com/al3xtjames/39ebea4d615c8aed829109a9ea2cd0b5",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-DBG"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("启用ACPI表中的调试语句，帮助操作系统中的ACPI事件调试")]),t._v(" "),s("li",[t._v("注意你需要"),s("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/Manual/compile.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("编译SSDT"),s("OutboundLink")],1)])])])]),t._v(" "),s("h2",{attrs:{id:"config-plist-设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-plist-设置"}},[t._v("#")]),t._v(" Config.plist 设置")]),t._v(" "),s("p",[t._v("对于串行设置，OpenCore实际上是非常直接的。")]),t._v(" "),s("h3",{attrs:{id:"misc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#misc"}},[t._v("#")]),t._v(" Misc")]),t._v(" "),s("h4",{attrs:{id:"serial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serial"}},[t._v("#")]),t._v(" Serial")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Init")]),t._v(": YES\n"),s("ul",[s("li",[t._v("从 OpenCore 初始化串口")]),t._v(" "),s("li",[t._v("需要将OpenCore日志发送到串口")])])])]),t._v(" "),s("h4",{attrs:{id:"debug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debug"}},[t._v("#")]),t._v(" Debug")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Target")]),t._v(": "),s("code",[t._v("67")]),t._v(" "),s("ul",[s("li",[t._v("启用OpenCore调试输出")]),t._v(" "),s("li",[s("code",[t._v("Target")]),t._v(" = "),s("code",[t._v("75")]),t._v("添加额外的串行输出标志("),s("code",[t._v("0x08")]),t._v(")，如果你"),s("a",{attrs:{href:"#serial-setup-optional"}},[t._v("计划使用串行")])]),t._v(" "),s("li",[t._v("你可以在这里计算你自己的值:"),s("RouterLink",{attrs:{to:"/troubleshooting/debug.html"}},[t._v("OpenCore调试")])],1)])])]),t._v(" "),s("h3",{attrs:{id:"nvram"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nvram"}},[t._v("#")]),t._v(" NVRAM")]),t._v(" "),s("h4",{attrs:{id:"boot-args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#boot-args"}},[t._v("#")]),t._v(" boot-args")]),t._v(" "),s("p",[t._v("在这里，我们要设置一些变量来帮助我们调试输出，对于我们来说，我们将使用以下的boot-args:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-v keepsyms=1 debug=0x12a msgbuf=1048576\n")])])]),s("p",[t._v("现在让我们来看看每个arg的作用:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("-v")]),t._v(" "),s("ul",[s("li",[t._v("启用详细输出")])])]),t._v(" "),s("li",[s("strong",[t._v("keepsyms=1")]),t._v(" "),s("ul",[s("li",[t._v("确保在内核发生严重故障时保留符号，这对故障排除非常有帮助")])])]),t._v(" "),s("li",[s("strong",[t._v("debug=0x12a")]),t._v(" "),s("ul",[s("li",[t._v("Combination of "),s("code",[t._v("DB_PRT")]),t._v(" (0x2), "),s("code",[t._v("DB_KPRT")]),t._v(" (0x8), "),s("code",[t._v("DB_SLOG")]),t._v(" (0x20), and "),s("code",[t._v("DB_LOG_PI_SCRN")]),t._v(" (0x100)")]),t._v(" "),s("li",[t._v("最新版本XNU的完整列表可以在这里找到: "),s("a",{attrs:{href:"https://github.com/apple-oss-distributions/xnu/blob/master/osfmk/kern/debug.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("debug.h"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[s("strong",[t._v("msgbuf=1048576")]),t._v(" "),s("ul",[s("li",[t._v("设置内核的消息缓冲区大小，这有助于在启动期间获得正确的日志")]),t._v(" "),s("li",[t._v("1048576 is 1MB(/1024^2), 如果需要可以更大")]),t._v(" "),s("li",[t._v("注意：DebugEnhancer kext不需要，但是对于早期的内核日志，它仍然是必需的")])])])]),t._v(" "),s("p",[s("strong",[t._v("其他有用的boot-args")]),t._v(":")]),t._v(" "),s("p",[t._v("根据你正在调试的内容，你可能还会发现这些boot-args非常有用:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("-liludbgall")]),t._v(" "),s("ul",[s("li",[t._v("在Lilu和任何其他插件上启用调试，但请注意，这需要调试版本的kext")])])]),t._v(" "),s("li",[s("strong",[t._v("io=0xff")]),t._v(" "),s("ul",[s("li",[t._v("启用IOKit调试，输出更大。请注意，此参数的日志量将非常大，并将降低系统的速度。尤其是在启动的时候。")])])]),t._v(" "),s("li",[s("strong",[t._v("igdebug=0xff")]),t._v(" "),s("ul",[s("li",[t._v("开启iGPU相关的调试，在使用iGPU系统时很有用")])])]),t._v(" "),s("li",[s("strong",[t._v("serial=5")]),t._v(" "),s("ul",[s("li",[t._v("将输出重定向到串行如果你"),s("a",{attrs:{href:"#serial-setup-optional"}},[t._v("计划使用串行")])]),t._v(" "),s("li",[t._v("推荐用于PCI配置之前的早期内核输出")])])]),t._v(" "),s("li",[s("strong",[t._v("acpi_layer=0x8")]),t._v(" "),s("ul",[s("li",[t._v("启用"),s("code",[t._v("ACPI_TABLES")]),t._v("调试，参见"),s("a",{attrs:{href:"https://github.com/acpica/acpica/blob/master/source/include/acoutput.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("acoutput.h"),s("OutboundLink")],1),t._v(" 了解更多信息")]),t._v(" "),s("li",[s("code",[t._v("0xFFFFFFFF")]),t._v(" 也可以启用所有层")])])]),t._v(" "),s("li",[s("strong",[t._v("acpi_level=0x2")]),t._v(" "),s("ul",[s("li",[t._v("设置"),s("code",[t._v("ACPI_LV_DEBUG_OBJECT")]),t._v("调试，参见 "),s("a",{attrs:{href:"https://github.com/acpica/acpica/blob/master/source/include/acoutput.h",target:"_blank",rel:"noopener noreferrer"}},[t._v("acoutput.h"),s("OutboundLink")],1),t._v(" 了解更多信息")]),t._v(" "),s("li",[s("code",[t._v("0xFFFF5F")]),t._v(" 也可以表示 "),s("code",[t._v("ACPI_ALL_COMPONENTS")])])])])]),t._v(" "),s("h2",{attrs:{id:"串行设置-可选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#串行设置-可选"}},[t._v("#")]),t._v(" 串行设置(可选)")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#hardware-setup"}},[t._v("硬件设置")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#efi-setup"}},[t._v("EFI 设置")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#config-plist-setup"}},[t._v("Config.plist 设置")])])]),t._v(" "),s("p",[t._v("虽然是可选的，但串行仍然对抓取所有的信息超级有帮助。这也是正确记录超早期内核崩溃的唯一方法(例如在"),s("code",[t._v("[EB|# log:EXITBS:START]")]),t._v("之后的事情)")]),t._v(" "),s("p",[t._v("对于这个设置，你需要一些东西:")]),t._v(" "),s("ul",[s("li",[t._v("测试机上的串行头/端口")]),t._v(" "),s("li",[t._v("串行到串行或串行到usb电缆")]),t._v(" "),s("li",[t._v("第二台机器接收串行日志记录(使用串行或USB)")]),t._v(" "),s("li",[t._v("软件监控串行输出\n"),s("ul",[s("li",[t._v("在本指南中，我们将使用 "),s("a",{attrs:{href:"https://freeware.the-meiers.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("CoolTerm"),s("OutboundLink")],1),t._v(" ,因为它支持macOS, Linux, Windows甚至树莓派")]),t._v(" "),s("li",[s("code",[t._v("screen")]),t._v(" 和其他方法也支持")])])])]),t._v(" "),s("h3",{attrs:{id:"硬件设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#硬件设置"}},[t._v("#")]),t._v(" 硬件设置")]),t._v(" "),s("p",[t._v("对于这个例子，我们将使用华硕X299-E Strix板，它有一个串行头。要确认您的单板是否自带串口，请查看单板的所有者或服务手册，并搜索串口/COM端口:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(508),alt:""}})]),t._v(" "),s("p",[t._v("正如你所看到的，我们在主板的底部有一个COM端口，如果你不使用9/10引脚串行头到DB9适配器，甚至为我们手动连接我们的串行引脚提供了一个图表。")]),t._v(" "),s("p",[t._v("或者，一些机器在后IO上带有DB9串行端口，例如这台Dell Optiplex 780 SFF(注意VGA和串行"),s("strong",[t._v("不是")]),t._v("同一个连接器):")]),t._v(" "),s("img",{attrs:{width:"508",alt:"",src:a(509)}}),t._v(" "),s("p",[t._v("对于我的X299设置，我使用一个简单的 "),s("a",{attrs:{href:"https://www.amazon.ca/gp/product/B001Y1F0HW/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("串行头到DB9"),s("OutboundLink")],1),t._v(", 然后一个 "),s("a",{attrs:{href:"https://www.amazon.ca/gp/product/B075YGKFC1/ref=ppx_yo_dt_b_asin_title_o00_s01?ie=UTF8&psc=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("DB9到USB RS 232适配器"),s("OutboundLink")],1),t._v(" 最后终止在我的笔记本电脑:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Serial header to DB9")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("DB9 to USB  RS 232 adapter")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("img",{attrs:{src:a(510),alt:""}})]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("img",{attrs:{src:a(511),alt:""}})])])])]),t._v(" "),s("p",[t._v("OpenCore手册通常建议CP21202-based UART设备:")]),t._v(" "),s("blockquote",[s("p",[t._v("要在引导期间获得日志，可以使用串口调试。在目标中打开串口调试，例如0xB表示onscreen with Serial。OpenCore使用115200波特率，8个数据位，无奇偶校验和1个停止位。对于macOS，最好的选择是基于cp2102的UART设备。将主板TX连接到USB UART RX，主板GND连接到USB UART GND。使用屏幕工具获取输出，或者下载GUI软件，比如CoolTerm。\n注意:在一些主板(可能是USB UART加密狗)PIN命名可能不正确。GND与RX交换是非常常见的，因此您必须将主板“TX”连接到USB UART GND，并将主板“GND”连接到USB UART RX。")])]),t._v(" "),s("p",[s("strong",[t._v("重要提醒")]),t._v(":不要忘记在BIOS中启用串口，大多数主板默认情况下将禁用它")]),t._v(" "),s("h3",{attrs:{id:"coolterm-设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coolterm-设置"}},[t._v("#")]),t._v(" CoolTerm 设置")]),t._v(" "),s("p",[t._v("现在让我们启动"),s("a",{attrs:{href:"https://freeware.the-meiers.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("CoolTerm"),s("OutboundLink")],1),t._v("并设置一些选项。当您打开CoolTerm时，您可能会看到一个简单的窗口。在这里选择选项条目:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(512),alt:""}}),t._v(" "),s("img",{attrs:{src:a(513),alt:""}})]),t._v(" "),s("p",[t._v("这里给出了很多选项，但我们主要关心的是:")]),t._v(" "),s("ul",[s("li",[t._v("Port: 确保与您的串行控制器匹配。")]),t._v(" "),s("li",[t._v("Baudrate = 115200")]),t._v(" "),s("li",[t._v("Data Bits = 8")]),t._v(" "),s("li",[t._v("Parity = 无")]),t._v(" "),s("li",[t._v("Stop Bit = 1")])]),t._v(" "),s("p",[t._v("接下来，保存这些设置，并选择Connect条目。这将为你提供一个来自serial的实时日志:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(514),alt:"CoolTerm Connect"}})]),t._v(" "),s("p",[t._v("要记录，只需前往 "),s("code",[t._v("Connections -> Capture to Text/Binary File -> Start...(Cmd+R)")]),t._v(":")]),t._v(" "),s("p",[s("img",{attrs:{src:a(515),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"内核调试工具包-可选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内核调试工具包-可选"}},[t._v("#")]),t._v(" 内核调试工具包(可选)")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#kdk-on-an-installed-os"}},[t._v("KDK on an Installed OS")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#uninstalling-the-kdk"}},[t._v("Uninstalling the KDK")])])]),t._v(" "),s("p",[t._v("内核调试工具包(kdk)是一种从内核和核心kext获取更多日志信息的好方法，kdk具体来说是苹果自己提供的macOS核心基础的调试版本。它们包括更多的日志记录和断言，允许您更直接地查看设置中的问题。但是请注意，我们不会讨论桥接调试或 "),s("code",[t._v("lldb")]),t._v(" 的用法。")]),t._v(" "),s("p",[s("span",{staticStyle:{color:"red"}},[t._v(" 警告: ")]),t._v(" 在工作机器上安装kdk可能会导致操作系统更新和安装出现问题。请在专用的macOS安装上调试，以避免数据丢失")]),t._v(" "),s("p",[t._v("首先，我们至少需要一个来自苹果的"),s("a",{attrs:{href:"https://developer.apple.com/support/compare-memberships/",target:"_blank",rel:"noopener noreferrer"}},[t._v("免费开发者帐户"),s("OutboundLink")],1),t._v(" 一旦您注册了最低限度的免费层，您现在可以从"),s("a",{attrs:{href:"https://developer.apple.com/download/more/",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多下载页面"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("注:免费等级将仅限于发布kdk，只有测试版kdk提供给"),s("a",{attrs:{href:"https://developer.apple.com/support/compare-memberships/",target:"_blank",rel:"noopener noreferrer"}},[t._v("付费开发者帐户"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("注2:苹果早在OS X 10.5和Leopard时就有kdk了，所以不用担心你的操作系统不受支持")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(516),alt:""}})]),t._v(" "),s("p",[t._v("要确定你需要哪个KDK版本的测试版，在终端中运行以下命令:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("sw_vers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" BuildVersion\n")])])]),s("p",[t._v("为此，我将下载内核调试套件11.3 build 20E5186d。下载完成后，挂载磁盘镜像，就可以找到KDK安装程序了。默认情况下，KDK只会为了“执行双机调试”而安装自己，并且默认情况下不会为主机内核调试提供任何额外的好处。")]),t._v(" "),s("h3",{attrs:{id:"kdk在已安装的操作系统上"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kdk在已安装的操作系统上"}},[t._v("#")]),t._v(" KDK在已安装的操作系统上")]),t._v(" "),s("p",[t._v("要在主机上启用调试，您需要执行以下操作:")]),t._v(" "),s("ol",[s("li",[t._v("运行 KDK 安装 pkg")]),t._v(" "),s("li",[t._v("关闭SIP协议(OS X 10.11+)")]),t._v(" "),s("li",[t._v("以可写方式挂载根分区(macOS 10.15+)")]),t._v(" "),s("li",[t._v("安装调试内核和kext")]),t._v(" "),s("li",[t._v("更新boot-args")]),t._v(" "),s("li",[t._v("重新启动并检查您的工作")])]),t._v(" "),s("h4",{attrs:{id:"_1-运行-kdk-安装-pkg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-运行-kdk-安装-pkg"}},[t._v("#")]),t._v(" 1. 运行 KDK 安装 pkg")]),t._v(" "),s("p",[t._v("正常运行pkg即可:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(517),alt:""}})]),t._v(" "),s("p",[t._v("安装完成后，你可以在"),s("code",[t._v("/Library/Developer/KDKs")]),t._v("目录下找到KDK组件，例如调试内核:")]),t._v(" "),s("p",[s("img",{attrs:{src:a(518),alt:""}})]),t._v(" "),s("h4",{attrs:{id:"_2-禁用sip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-禁用sip"}},[t._v("#")]),t._v(" 2. 禁用SIP")]),t._v(" "),s("ul",[s("li",[t._v("适用于OS X 10.11, El Capitan和更新版本")])]),t._v(" "),s("p",[t._v("禁用SIP，用户有两种选择:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("通过恢复禁用")])]),t._v(" "),s("li",[s("p",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/post-issues.html#disabling-sip"}},[t._v("通过config.plist禁用")])],1)])]),t._v(" "),s("p",[t._v("一般情况下，我们强烈建议恢复，以便通过NVRAM复位轻松恢复，但是一些用户可能需要通过NVRAM擦除禁用SIP。")]),t._v(" "),s("p",[t._v("对于前者，只需重新启动到macOS恢复，打开终端并运行以下命令:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("csrutil disable\ncsrutil authenticated-root disable "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Big Sur+")]),t._v("\n")])])]),s("p",[t._v("重新启动，SIP将进行相应的调整。你可以在终端中运行"),s("code",[t._v("csrutil status")]),t._v("来验证它是否工作。")]),t._v(" "),s("ul",[s("li",[s("span",{staticStyle:{color:"red"}},[t._v(" 注意: ")]),t._v(" 对于依赖"),s("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/security/applesecureboot.html#apecid",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenCore的ApECID功能"),s("OutboundLink")],1),t._v("的用户，请注意此 "),s("strong",[t._v("必须")]),t._v(" 被禁用才能使用KDK。")])]),t._v(" "),s("h4",{attrs:{id:"_3-以可写方式挂载根分区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-以可写方式挂载根分区"}},[t._v("#")]),t._v(" 3. 以可写方式挂载根分区")]),t._v(" "),s("ul",[s("li",[t._v("适用于macOS 10.15，卡特琳娜及更新版本")])]),t._v(" "),s("p",[t._v("将根卷挂载为可写卷很容易，但是这个过程有点长:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Big Sur+")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首先，为您的驱动器创建一个挂载点")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/livemount\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接下来，找到您的系统卷")]),t._v("\ndiskutil list\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从下面的列表中，我们可以看到我们的系统卷是disk5s5")]),t._v("\n/dev/disk5 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("synthesized"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#:                       TYPE NAME                    SIZE       IDENTIFIER")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(":      APFS Container Scheme -                      +255.7 GB   disk5\n                                 Physical Store disk4s2\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":                APFS Volume ⁨Big Sur HD - Data⁩       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("122.5")]),t._v(" GB   disk5s1\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(":                APFS Volume ⁨Preboot⁩                 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("309.4")]),t._v(" MB   disk5s2\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(":                APFS Volume ⁨Recovery⁩                "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("887.8")]),t._v(" MB   disk5s3\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(":                APFS Volume ⁨VM⁩                      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" MB     disk5s4\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(":                APFS Volume ⁨Big Sur HD⁩              "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.2")]),t._v(" GB    disk5s5\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(":              APFS Snapshot ⁨com.apple.os.update-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".⁩ "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.2")]),t._v(" GB    disk5s5s\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装驱动(即。disk5s5)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" nobrowse "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" apfs  /dev/disk5s5 ~/livemount\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 现在您可以自由地对系统卷进行任何编辑")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 仅限 Catalina")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-uw")]),t._v(" /\n")])])]),s("h4",{attrs:{id:"_4-安装调试内核和kext"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装调试内核和kext"}},[t._v("#")]),t._v(" 4. 安装调试内核和kext")]),t._v(" "),s("p",[t._v("现在我们将KDK安装到系统中:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将KDK安装到系统卷")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保替换<KDK版本>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对于10.15及以上版本，用/Volumes/<Target Volume>交换live挂载")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ditto /Library/Developer/KDKs/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("KDK Version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/System ~/livemount/System\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重建真实的内核缓存(大苏尔及更新版本)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kmutil "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --volume-root ~/livemount --update-all\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重建内核缓存(卡特琳娜和更老的版本)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kextcache "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-invalidate")]),t._v(" /Volumes/"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Target Volume"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最后，一旦完成系统卷的编辑")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 我们要创建一个新的快照(大苏尔和更新的)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" bless "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--folder")]),t._v(" ~/livemount/System/Library/CoreServices "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--bootefi")]),t._v(" --create-snapshot\n")])])]),s("h4",{attrs:{id:"_5-更新boot-args"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-更新boot-args"}},[t._v("#")]),t._v(" 5. 更新boot-args")]),t._v(" "),s("p",[t._v("现在您已经完成了KDK的设置和安装，现在我们需要告诉boot.Efi使用哪个内核。你有两个选择:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("kcsuffix=debug")]),t._v(" (由Big Sur移除)")]),t._v(" "),s("li",[s("code",[t._v("kcsuffix=development")])]),t._v(" "),s("li",[s("code",[t._v("kcsuffix=kasan")])])]),t._v(" "),s("p",[s("code",[t._v("development")]),t._v("参数将在Big Sur中设置新的默认调试内核，而"),s("code",[t._v("kasan")]),t._v("是一个更注重日志记录的内核，包含"),s("a",{attrs:{href:"https://github.com/google/sanitizers/wiki/AddressSanitizer",target:"_blank",rel:"noopener noreferrer"}},[t._v("AddressSanitizer"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("一旦你决定了哪个内核最适合你，在config.plist中将kc后缀arg添加到boot-args中")]),t._v(" "),s("h4",{attrs:{id:"_6-重新启动并检查您的工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-重新启动并检查您的工作"}},[t._v("#")]),t._v(" 6. 重新启动并检查您的工作")]),t._v(" "),s("p",[t._v("假设一切都正确地完成了，现在要重新启动，检查是否引导了正确的内核:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sysctl")]),t._v(" kern.osbuildconfig\n kern.osbuildconfig: kasan\n")])])]),s("p",[t._v("正如我们所看到的，我们成功地启动了KASAN内核。")]),t._v(" "),s("h3",{attrs:{id:"卸载kdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载kdk"}},[t._v("#")]),t._v(" 卸载KDK")]),t._v(" "),s("p",[t._v("卸载KDK相当简单，但是如果不小心，可能会有一点破坏性。")]),t._v(" "),s("ol",[s("li",[t._v("将根分区挂载为可写(macOS 10.15+)")]),t._v(" "),s("li",[t._v("删除调试内核和kext")]),t._v(" "),s("li",[t._v("重新启用SIP")]),t._v(" "),s("li",[t._v("清除引导参数")]),t._v(" "),s("li",[t._v("重新启动并检查您的工作")])]),t._v(" "),s("p",[t._v("步骤:")]),t._v(" "),s("h4",{attrs:{id:"_1-将根分区挂载为可写-macos-10-15"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-将根分区挂载为可写-macos-10-15"}},[t._v("#")]),t._v(" 1. 将根分区挂载为可写(macOS 10.15+)")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Big Sur+")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首先，为您的驱动器创建一个挂载点")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上次挂载卷时仍然存在的跳过")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/livemount\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接下来，找到您的系统卷")]),t._v("\ndiskutil list\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从下面的列表中，我们可以看到我们的系统卷是disk5s5")]),t._v("\n/dev/disk5 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("synthesized"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#:                       TYPE NAME                    SIZE       IDENTIFIER")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(":      APFS Container Scheme -                      +255.7 GB   disk5\n                                 Physical Store disk4s2\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(":                APFS Volume ⁨Big Sur HD - Data⁩       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("122.5")]),t._v(" GB   disk5s1\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(":                APFS Volume ⁨Preboot⁩                 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("309.4")]),t._v(" MB   disk5s2\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(":                APFS Volume ⁨Recovery⁩                "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("887.8")]),t._v(" MB   disk5s3\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(":                APFS Volume ⁨VM⁩                      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v(" MB     disk5s4\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(":                APFS Volume ⁨Big Sur HD⁩              "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.2")]),t._v(" GB    disk5s5\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(":              APFS Snapshot ⁨com.apple.os.update-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".⁩ "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.2")]),t._v(" GB    disk5s5s\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 挂载驱动(即.disk5s5)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" nobrowse "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" apfs  /dev/disk5s5 ~/livemount\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 仅限卡特琳娜")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-uw")]),t._v(" /\n")])])]),s("h4",{attrs:{id:"_2-删除调试内核和kext"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-删除调试内核和kext"}},[t._v("#")]),t._v(" 2. 删除调试内核和kext")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 恢复旧快照(Big Sur+)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" bless "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--mount")]),t._v(" ~/livemount "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--bootefi")]),t._v(" --last-sealed-snapshot\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置内核缓存(Catalina及更老版本)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" /System/Library/Caches/com.apple.kext.caches/Startup/kernelcache.de*\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" /System/Library/PrelinkedKernels/prelinkedkernel.de*\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" kextcache "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-invalidate")]),t._v(" /\n")])])]),s("h4",{attrs:{id:"_3-重新启用sip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-重新启用sip"}},[t._v("#")]),t._v(" 3. 重新启用SIP")]),t._v(" "),s("ul",[s("li",[t._v("恢复命令(如果之前通过恢复更改):")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("csrutil "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v("\ncsrutil authenticated-root "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Big Sur+")]),t._v("\n")])])]),s("ul",[s("li",[t._v("config.plist更改(如果之前通过config.plist更改):\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/troubleshooting/extended/post-issues.html#disabling-sip"}},[t._v("通过config.plist启用")])],1)])])]),t._v(" "),s("h4",{attrs:{id:"_4-清除引导参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-清除引导参数"}},[t._v("#")]),t._v(" 4. 清除引导参数")]),t._v(" "),s("p",[t._v("不要忘记在你的引导参数中删除"),s("code",[t._v("kcsuffix=")])]),t._v(" "),s("h4",{attrs:{id:"_5-重新启动并检查您的工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-重新启动并检查您的工作"}},[t._v("#")]),t._v(" 5. 重新启动并检查您的工作")]),t._v(" "),s("p",[t._v("假设一切都正确地完成了，现在要重新启动，检查是否引导了正确的内核:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sysctl")]),t._v(" kern.osbuildconfig\n kern.osbuildconfig: release\n")])])]),s("p",[t._v("正如我们所看到的，我们成功地引导了一个KASAN内核。")])])}),[],!1,null,null,null);s.default=r.exports}}]);