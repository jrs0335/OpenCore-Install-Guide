(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{519:function(e,t,o){e.exports=o.p+"assets/img/10.4-Tiger.c56a3acb.png"},520:function(e,t,o){e.exports=o.p+"assets/img/10.5-Leopard.7a062252.png"},521:function(e,t,o){e.exports=o.p+"assets/img/10.6-Snow-Loepard.e53c39f8.png"},522:function(e,t,o){e.exports=o.p+"assets/img/10.7-Lion.754d82b3.png"},523:function(e,t,o){e.exports=o.p+"assets/img/10.8-MountainLion.26ccbf90.png"},524:function(e,t,o){e.exports=o.p+"assets/img/10.9-Mavericks.173902a3.png"},525:function(e,t,o){e.exports=o.p+"assets/img/10.10-Yosemite.db1b35f6.png"},526:function(e,t,o){e.exports=o.p+"assets/img/10.12-Sierra.34764fef.png"},527:function(e,t,o){e.exports=o.p+"assets/img/10.13-HighSierra.a16af7dd.png"},528:function(e,t,o){e.exports=o.p+"assets/img/10.15-Catalina.3da44cb0.png"},529:function(e,t,o){e.exports=o.p+"assets/img/11-Big-Sur.67f79f3c.png"},612:function(e,t,o){"use strict";o.r(t);var r=o(10),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"为什么opencore超过clover和其他公司"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么opencore超过clover和其他公司"}},[e._v("#")]),e._v(" 为什么OpenCore超过Clover和其他公司")]),e._v(" "),t("p",[e._v("本节简要介绍了为什么社区已经过渡到OpenCore，并旨在消除社区中常见的一些误解。那些只是想要一台macOS机器的人可以跳过这一页。")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#opencore特性"}},[e._v("OpenCore特性")]),t("ul",[t("li",[t("a",{attrs:{href:"#软件支持"}},[e._v("软件支持")])])])]),t("li",[t("a",{attrs:{href:"#opencore的缺点"}},[e._v("OpenCore的缺点")])]),t("li",[t("a",{attrs:{href:"#common-myths"}},[e._v("Common Myths")]),t("ul",[t("li",[t("a",{attrs:{href:"#is-opencore-unstable-as-it-s-a-beta"}},[e._v("Is OpenCore unstable as it's a beta?")])]),t("li",[t("a",{attrs:{href:"#does-opencore-always-inject-smbios-and-acpi-data-into-other-oses"}},[e._v("Does OpenCore always inject SMBIOS and ACPI data into other OSes?")])]),t("li",[t("a",{attrs:{href:"#does-opencore-require-a-fresh-install"}},[e._v("Does OpenCore require a fresh install?")])]),t("li",[t("a",{attrs:{href:"#does-opencore-only-support-limited-versions-of-macos"}},[e._v("Does OpenCore only support limited versions of macOS?")])]),t("li",[t("a",{attrs:{href:"#does-opencore-support-older-hardware"}},[e._v("Does OpenCore support older hardware?")])]),t("li",[t("a",{attrs:{href:"#does-opencore-support-windows-linux-booting"}},[e._v("Does OpenCore support Windows/Linux booting?")])]),t("li",[t("a",{attrs:{href:"#legality-of-hackintoshing"}},[e._v("Legality of Hackintoshing")])]),t("li",[t("a",{attrs:{href:"#does-macos-support-nvidia-gpus"}},[e._v("Does macOS support NVIDIA GPUs?")])])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"opencore特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#opencore特性"}},[e._v("#")]),e._v(" OpenCore特性")]),e._v(" "),t("ul",[t("li",[e._v("更多的操作系统支持!\n"),t("ul",[t("li",[e._v("OpenCore现在支持更多版本的OS X和macOS，而无需Clover和Chameleon必须实现的痛苦hack")]),e._v(" "),t("li",[e._v("这包括早在10.4、Tiger的操作系统，甚至是13的最新版本Ventura!")])])]),e._v(" "),t("li",[e._v("平均而言，OpenCore系统的启动速度比使用Clover的系统要快，因为不必要的补丁要少")]),e._v(" "),t("li",[e._v("更好的整体稳定性，补丁可以更精确:\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://www.reddit.com/r/hackintosh/comments/fo9bfv/macos_10154_update/",target:"_blank",rel:"noopener noreferrer"}},[e._v("macOS 10.15.4 更新"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("AMD OSX补丁不需要在每个小的安全更新中更新")])])]),e._v(" "),t("li",[e._v("以多种形式提高整体安全性:\n"),t("ul",[t("li",[e._v("不需要禁用系统完整性保护(SIP)")]),e._v(" "),t("li",[e._v("内置FileVault 2支持")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/security.html#Vault",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vaulting"),t("OutboundLink")],1),e._v(" 允许创建EFI快照防止不必要的修改")]),e._v(" "),t("li",[e._v("真正的安全引导支持\n"),t("ul",[t("li",[e._v("包括UEFI和苹果的变种")])])])])]),e._v(" "),t("li",[e._v("BootCamp切换和启动设备选择通过读取启动盘设置的NVRAM变量来支持，就像真正的Mac一样。")]),e._v(" "),t("li",[e._v("通过引导支持引导热键。efi - hold启动时选择启动设备的选项或ESC, Cmd+R进入恢复或Cmd+Opt+P+R复位NVRAM。")])]),e._v(" "),t("h3",{attrs:{id:"软件支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件支持"}},[e._v("#")]),e._v(" 软件支持")]),e._v(" "),t("p",[e._v("一些人想要从其他引导加载程序转换的最大原因实际上是软件支持:")]),e._v(" "),t("ul",[t("li",[e._v("Kexts不再测试Clover:\n"),t("ul",[t("li",[e._v("kext出问题了? 许多开发人员，包括 "),t("a",{attrs:{href:"https://github.com/acidanthera",target:"_blank",rel:"noopener noreferrer"}},[e._v("Acidanthera"),t("OutboundLink")],1),e._v(" (您最喜欢的大多数kext的制造商) 除非在OpenCore上，否则不会提供支持")])])]),e._v(" "),t("li",[e._v("许多固件驱动程序被合并到OpenCore:\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/AppleSupportPkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("APFS 支持"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/AppleSupportPkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("FileVault 支持"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/acidanthera/AptioFixPkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Firmware 补丁"),t("OutboundLink")],1)])])])]),e._v(" "),t("h2",{attrs:{id:"opencore的缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#opencore的缺点"}},[e._v("#")]),e._v(" OpenCore的缺点")]),e._v(" "),t("p",[e._v("The majority of Clover's functionality is actually supported in OpenCore in the form of some quirk, however when transitioning you should pay close attention to OpenCore's missing features as this may or may not affect yourself:")]),e._v(" "),t("ul",[t("li",[e._v("Does not support booting MBR-based operating systems\n"),t("ul",[t("li",[e._v("Work around is to chain-load rEFInd once in OpenCore")])])]),e._v(" "),t("li",[e._v("Does not support UEFI-based VBIOS patching\n"),t("ul",[t("li",[e._v("This can be done in macOS however")])])]),e._v(" "),t("li",[e._v("Does not support automatic DeviceProperty injection for legacy GPUs\n"),t("ul",[t("li",[e._v("ie. InjectIntel, InjectNVIDIA and InjectAti")]),e._v(" "),t("li",[e._v("This can be done manually however: "),t("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/gpu-patching/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GPU patching"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[e._v("Does not support IRQ conflict patching\n"),t("ul",[t("li",[e._v("Can be resolved with "),t("a",{attrs:{href:"https://github.com/corpnewt/SSDTTime",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDTTime"),t("OutboundLink")],1)])])]),e._v(" "),t("li",[e._v("Does not support P and C state generation for older CPUs")]),e._v(" "),t("li",[e._v("Does not support Hardware UUID Injection")]),e._v(" "),t("li",[e._v("Does not support many of Clover's XCPM patches\n"),t("ul",[t("li",[e._v("ie. Ivy Bridge XCPM patches")])])]),e._v(" "),t("li",[e._v("Does not support hiding specific drives")]),e._v(" "),t("li",[e._v("Does not support changing settings within OpenCore's menu")]),e._v(" "),t("li",[e._v("Does not patch PCIRoot UID value")]),e._v(" "),t("li",[e._v("Does not support macOS-only ACPI patching")])]),e._v(" "),t("h2",{attrs:{id:"common-myths"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-myths"}},[e._v("#")]),e._v(" Common Myths")]),e._v(" "),t("h3",{attrs:{id:"is-opencore-unstable-as-it-s-a-beta"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#is-opencore-unstable-as-it-s-a-beta"}},[e._v("#")]),e._v(" Is OpenCore unstable as it's a beta?")]),e._v(" "),t("p",[e._v("Short Answer: No")]),e._v(" "),t("p",[e._v("Long Answer: No")]),e._v(" "),t("p",[e._v("OpenCore's version number does not represent the quality of the project. Instead, it's more of a way to see the stepping stones of the project. Acidanthera still has much they'd like to do with the project including overall refinement and more feature support.")]),e._v(" "),t("p",[e._v("For example, OpenCore goes through proper security audits to ensure it complies with UEFI Secure Boot, and is the only Hackintosh bootloader to undergo these rigorous reviews and have such support.")]),e._v(" "),t("p",[e._v("Version 0.6.1 was originally designed to be the official release of OpenCore as it would have proper UEFI/Apple Secure Boot, and would be the 1 year anniversary of OpenCore's release as a public tool. However, due to circumstances around macOS Big Sur and the rewriting of OpenCore's prelinker to support it, it was decided to push off 1.0.0 for another year.")]),e._v(" "),t("p",[e._v("Current road map:")]),e._v(" "),t("ul",[t("li",[e._v("2019: Year of Beta")]),e._v(" "),t("li",[e._v("2020: Year of Secure Boot")]),e._v(" "),t("li",[e._v("2021: Year of Refinement")])]),e._v(" "),t("p",[e._v("So please do not see the version number as a hindrance, instead as something to look forward to.")]),e._v(" "),t("h3",{attrs:{id:"does-opencore-always-inject-smbios-and-acpi-data-into-other-oses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#does-opencore-always-inject-smbios-and-acpi-data-into-other-oses"}},[e._v("#")]),e._v(" Does OpenCore always inject SMBIOS and ACPI data into other OSes?")]),e._v(" "),t("p",[e._v("By default, OpenCore will assume that all OSes should be treated equally in regards to ACPI and SMBIOS information. The reason for this thinking consists of three parts:")]),e._v(" "),t("ul",[t("li",[e._v("This allows for proper multiboot support, like with "),t("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/multiboot/bootcamp.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("BootCamp"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Avoids poorly made DSDTs and encourages proper ACPI practices")]),e._v(" "),t("li",[e._v("Avoids edge cases where info is injected several times, commonly seen with Clover\n"),t("ul",[t("li",[e._v("i.e. How would you handle SMBIOS and ACPI data injection once you booted boot.efi, but then get kicked out? The changes are already in memory and so trying to undo them can be quite dangerous. This is why Clover's method is frowned upon.")])])])]),e._v(" "),t("p",[e._v("However, there are quirks in OpenCore that allow for SMBIOS injection to be macOS-limited by patching where macOS reads SMBIOS info from. The "),t("code",[e._v("CustomSMIOSGuid")]),e._v(" quirk with "),t("code",[e._v("CustomSMBIOSMode")]),e._v(" set to "),t("code",[e._v("Custom")]),e._v(" can break in the future and so we only recommend this option in the event of certain software breaking in other OSes. For best stability, please disable these quirks.")]),e._v(" "),t("h3",{attrs:{id:"does-opencore-require-a-fresh-install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#does-opencore-require-a-fresh-install"}},[e._v("#")]),e._v(" Does OpenCore require a fresh install?")]),e._v(" "),t("p",[e._v('Not at all in the event you have a "Vanilla" installation – what this refers to is whether the OS has tampered in any way, such as installing 3rd party kexts into the system volume or other unsupported modifications by Apple. When your system has been heavily tampered with, either by you or 3rd party utilities like Hackintool, we recommend a fresh install to avoid any potential issues.')]),e._v(" "),t("p",[e._v("Special note for Clover users: please reset your NVRAM when installing with OpenCore. Many of Clover variables can conflict with OpenCore and macOS.")]),e._v(" "),t("ul",[t("li",[e._v("Note: Thinkpad laptops are known to be semi-bricked after an NVRAM reset in OpenCore, we recommend resetting NVRAM by updating the BIOS on these machines.")])]),e._v(" "),t("h3",{attrs:{id:"does-opencore-only-support-limited-versions-of-macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#does-opencore-only-support-limited-versions-of-macos"}},[e._v("#")]),e._v(" Does OpenCore only support limited versions of macOS?")]),e._v(" "),t("p",[e._v("As of OpenCore 0.6.2, you can now boot every Intel version of macOS going all the way back to OS X 10.4! Proper support however will depend on your hardware, so please verify yourself: "),t("RouterLink",{attrs:{to:"/macos-limits.html"}},[e._v("Hardware Limitations")])],1),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("macOS Install Gallery")]),e._v(" "),t("p",[e._v("Acidanthera has tested many versions, and I myself have run many versions of OS X on my old HP DC 7900 (Core2 Quad Q8300). Here's just a small gallery of what I've tested:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(519),alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:o(520),alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:o(521),alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:o(522),alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:o(523),alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:o(524),alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:o(525),alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:o(526),alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:o(527),alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:o(528),alt:""}})]),e._v(" "),t("p",[t("img",{attrs:{src:o(529),alt:""}})])]),e._v(" "),t("h3",{attrs:{id:"does-opencore-support-older-hardware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#does-opencore-support-older-hardware"}},[e._v("#")]),e._v(" Does OpenCore support older hardware?")]),e._v(" "),t("p",[e._v("As of right now, the majority of Intel hardware is supported so long as the OS itself does! However please refer to the "),t("RouterLink",{attrs:{to:"/macos-limits.html"}},[e._v("Hardware Limitations page")]),e._v(" for more info on what hardware is supported in what versions of OS X/macOS.")],1),e._v(" "),t("p",[e._v("Currently, Intel's Yonah and newer series CPUs have been tested properly with OpenCore.")]),e._v(" "),t("h3",{attrs:{id:"does-opencore-support-windows-linux-booting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#does-opencore-support-windows-linux-booting"}},[e._v("#")]),e._v(" Does OpenCore support Windows/Linux booting?")]),e._v(" "),t("p",[e._v("OpenCore will automatically detect Windows without any additional configuration. With OpenCore 0.7.3, OpenLinuxBoot was added to OpenCore as an EFI driver, which will automatically detect Linux partitions. This requires either "),t("a",{attrs:{href:"https://github.com/acidanthera/OcBinaryData/blob/master/Drivers/ext4_x64.efi",target:"_blank",rel:"noopener noreferrer"}},[e._v("ext4_x64.efi"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://github.com/acidanthera/OcBinaryData/blob/master/Drivers/btrfs_x64.efi",target:"_blank",rel:"noopener noreferrer"}},[e._v("btrfs_x64.efi"),t("OutboundLink")],1),e._v(" depending on which format it used in your distro. For any OSes where their bootloader has an irregular path or name, you can simply add it to the BlessOverride section.")]),e._v(" "),t("h3",{attrs:{id:"legality-of-hackintoshing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#legality-of-hackintoshing"}},[e._v("#")]),e._v(" Legality of Hackintoshing")]),e._v(" "),t("p",[e._v("Where hackintoshing sits is in a legal grey area, mainly that while this is not illegal we are in fact breaking the EULA. The reason this is not illegal:")]),e._v(" "),t("ul",[t("li",[e._v("We are downloading macOS from "),t("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/0.6.9/Utilities/macrecovery/macrecovery.py#L125",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple's servers directly"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("We are doing this as a non-profit organization for teaching and personal use\n"),t("ul",[t("li",[e._v("People who plan to use their Hackintosh for work or want to resell them should refer to the "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Psystar_Corporation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Psystar case"),t("OutboundLink")],1),e._v(" and their regional laws")])])])]),e._v(" "),t("p",[e._v("While the EULA states that macOS should only be installed on real Macs or virtual machines running on genuine Macs ("),t("a",{attrs:{href:"https://www.apple.com/legal/sla/docs/macOSBigSur.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("sections 2B-i and 2B-iii"),t("OutboundLink")],1),e._v("), there is no enforceable law that outright bans this. However, sites that repackage and modify macOS installers do potentially risk the issue of "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Digital_Millennium_Copyright_Act",target:"_blank",rel:"noopener noreferrer"}},[e._v("DMCA takedowns"),t("OutboundLink")],1),e._v(" and such.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Note")]),e._v(": This is not legal advice, so please make the proper assessments yourself and discuss with your lawyers if you have any concerns.")])]),e._v(" "),t("h3",{attrs:{id:"does-macos-support-nvidia-gpus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#does-macos-support-nvidia-gpus"}},[e._v("#")]),e._v(" Does macOS support NVIDIA GPUs?")]),e._v(" "),t("p",[e._v("Due to issues revolving around NVIDIA support in newer versions of macOS, many users come to the conclusion that macOS never supported NVIDIA GPUs. Apple supported Macs with NVIDIA GPUs (such as the 2013 MacBook Pro with a Kepler dGPU) until the release of Monterey Beta 7. While there are community-made patches to bring back support, they require SIP (System Integrity Protection) to be disabled, disabling important security features in macOS.")]),e._v(" "),t("p",[e._v("The other issue has to do with any newer NVIDIA GPUs, as Apple stopped shipping machines with them and thus they never had official OS support from Apple. Instead, users had to rely on NVIDIA for 3rd party drivers. Due to issues with Apple's newly introduced Secure Boot, they could no longer support the Web Drivers and thus NVIDIA couldn't publish them for newer platforms limiting them to mac OS 10.13, High Sierra.")]),e._v(" "),t("p",[e._v("For more info on OS support, see here: "),t("a",{attrs:{href:"https://dortania.github.io/GPU-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GPU Buyers Guide"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);