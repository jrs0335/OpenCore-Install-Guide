(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{275:function(t,e,a){t.exports=a.p+"assets/img/cs-stuck.bddc4a2d.jpg"},276:function(t,e,a){t.exports=a.p+"assets/img/ramrod.55591fc5.jpg"},383:function(t,e,a){t.exports=a.p+"assets/img/rtc-error.d53fdc66.jpg"},384:function(t,e,a){t.exports=a.p+"assets/img/acpi-path.e72cc3e9.png"},385:function(t,e,a){t.exports=a.p+"assets/img/onscreen-panic.e722ab0d.png"},386:function(t,e,a){t.exports=a.p+"assets/img/apic-panic.871e7d3d.png"},577:function(t,e,a){"use strict";a.r(e);var r=a(10),i=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"opencore-and-macos-11-big-sur"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#opencore-and-macos-11-big-sur"}},[t._v("#")]),t._v(" OpenCore and macOS 11: Big Sur")]),t._v(" "),e("p",[t._v("It's that time of year again and with it, and a new macOS beta has been dropped. Here's all the info you need to get started.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Reminder")]),t._v(" "),e("p",[e("strong",[t._v("This page will be a small discussion on exactly what you need to prepare for Big Sur, a more in depth look into what's changed on Big Sur can be found here:")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://dortania.github.io/hackintosh/updates/2020/11/12/bigsur-new.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("What's new in macOS 11, Big Sur!"),e("OutboundLink")],1)])])]),t._v(" "),e("h2",{attrs:{id:"table-of-contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#table-of-contents"}},[t._v("Table of Contents")])]),e("li",[e("a",{attrs:{href:"#prerequisites"}},[t._v("Prerequisites")]),e("ul",[e("li",[e("a",{attrs:{href:"#a-supported-smbios"}},[t._v("A supported SMBIOS")])]),e("li",[e("a",{attrs:{href:"#supported-hardware"}},[t._v("Supported hardware")])]),e("li",[e("a",{attrs:{href:"#up-to-date-kexts-bootloader-and-config-plist"}},[t._v("Up-to-date kexts, bootloader and config.plist")])]),e("li",[e("a",{attrs:{href:"#known-issues"}},[t._v("Known issues")])])])]),e("li",[e("a",{attrs:{href:"#installation"}},[t._v("Installation")])]),e("li",[e("a",{attrs:{href:"#troubleshooting"}},[t._v("Troubleshooting")]),e("ul",[e("li",[e("a",{attrs:{href:"#stuck-at-forcing-cs-runtime-for-entitlement"}},[t._v("Stuck at Forcing CS_RUNTIME for entitlement")])]),e("li",[e("a",{attrs:{href:"#stuck-at-pci-configuration-begins-for-intel-s-x99-and-x299-boards"}},[t._v("Stuck at PCI Configuration Begins for Intel's X99 and X299 boards")])]),e("li",[e("a",{attrs:{href:"#stuck-on-ramrod"}},[t._v("Stuck on ramrod(^^^^^^^^^^^^^)")])]),e("li",[e("a",{attrs:{href:"#x79-and-x99-kernel-panic-on-iopcifamily"}},[t._v("X79 and X99 Kernel Panic on IOPCIFamily")])]),e("li",[e("a",{attrs:{href:"#deviceproperties-injection-failing"}},[t._v("DeviceProperties injection failing")])]),e("li",[e("a",{attrs:{href:"#keyboard-and-mouse-broken"}},[t._v("Keyboard and Mouse broken")])]),e("li",[e("a",{attrs:{href:"#early-kernel-panic-on-max-cpus-from-firmware-not-yet-initialized"}},[t._v("Early Kernel Panic on max_cpus_from_firmware not yet initialized")])]),e("li",[e("a",{attrs:{href:"#cannot-update-to-newer-versions-of-big-sur"}},[t._v("Cannot update to newer versions of Big Sur")])]),e("li",[e("a",{attrs:{href:"#kernel-panic-on-rooting-from-the-live-fs"}},[t._v("Kernel Panic on Rooting from the live fs")])]),e("li",[e("a",{attrs:{href:"#asus-z97-and-hedt-ie-x99-and-x299-failing-stage-2-installation"}},[t._v("Asus Z97 and HEDT(ie. X99 and X299) failing Stage 2 Installation")])]),e("li",[e("a",{attrs:{href:"#laptops-kernel-panicking-on-cannot-perform-kext-scan"}},[t._v("Laptops kernel panicking on cannot perform kext scan")])]),e("li",[e("a",{attrs:{href:"#reboot-on-appleusbhostport-createdevice-failed-to-create-device-on-macos-11-3"}},[t._v('Reboot on "AppleUSBHostPort::createDevice: failed to create device" on macOS 11.3+')])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("p",[t._v("Before we can jump head first into installing Big Sur, we need to go over a few things:")]),t._v(" "),e("h3",{attrs:{id:"a-supported-smbios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-supported-smbios"}},[t._v("#")]),t._v(" A supported SMBIOS")]),t._v(" "),e("p",[t._v("Big Sur dropped a few Ivy Bridge and Haswell based SMBIOS from macOS, so see below that yours wasn't dropped:")]),t._v(" "),e("ul",[e("li",[t._v("iMac14,3 and older\n"),e("ul",[e("li",[t._v("Note iMac14,4 is still supported")])])]),t._v(" "),e("li",[t._v("MacPro5,1 and older")]),t._v(" "),e("li",[t._v("Macmini6,x and older")]),t._v(" "),e("li",[t._v("MacBook7,1 and older")]),t._v(" "),e("li",[t._v("MacBookAir5,x and older")]),t._v(" "),e("li",[t._v("MacBookPro10,x and older")])]),t._v(" "),e("p",[t._v("If your SMBIOS was supported in Catalina and isn't included above, you're good to go!")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Supported SMBIOS")]),t._v(" "),e("p",[t._v("SMBIOS still supported in macOS Big Sur:")]),t._v(" "),e("ul",[e("li",[t._v("iMac14,4 and newer")]),t._v(" "),e("li",[t._v("MacPro6,1 and newer")]),t._v(" "),e("li",[t._v("iMacPro1,1 and newer")]),t._v(" "),e("li",[t._v("Macmini7,1 and newer")]),t._v(" "),e("li",[t._v("MacBook8,1 and newer")]),t._v(" "),e("li",[t._v("MacBookAir6,x and newer")]),t._v(" "),e("li",[t._v("MacBookPro11,x and newer")])]),t._v(" "),e("p",[t._v("For full list of supported SMBIOS including OS support, see here: "),e("RouterLink",{attrs:{to:"/extras/smbios-support.html"}},[t._v("Choosing the right SMBIOS")])],1)]),t._v(" "),e("p",[t._v("For those wanting a simple translation for their Machines:")]),t._v(" "),e("ul",[e("li",[t._v("iMac13,1 should transition over to using iMac14,4")]),t._v(" "),e("li",[t._v("iMac13,2 should transition over to using iMac15,1")]),t._v(" "),e("li",[t._v("iMac14,2 and iMac14,3 should transition over to using iMac15,1\n"),e("ul",[e("li",[t._v("Note: AMD CPU users with NVIDIA GPUs may find MacPro7,1 more suitable")])])]),t._v(" "),e("li",[t._v("iMac14,1 should transition over to iMac14,4")])]),t._v(" "),e("h3",{attrs:{id:"supported-hardware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-hardware"}},[t._v("#")]),t._v(" Supported hardware")]),t._v(" "),e("p",[t._v("Not much hardware has been dropped, though the few that have:")]),t._v(" "),e("ul",[e("li",[t._v("Official Ivy Bridge U, H and S CPUs.\n"),e("ul",[e("li",[t._v("These CPUs will still boot without much issue, but note that no Macs are supported with consumer Ivy Bridge in Big Sur.")]),t._v(" "),e("li",[t._v("Ivy Bridge-E CPUs are still supported thanks to being in MacPro6,1")])])]),t._v(" "),e("li",[t._v("Ivy Bridge iGPUs slated for removal\n"),e("ul",[e("li",[t._v("HD 4000 and HD 2500, however currently these drivers are still present in 11.0.1")])])]),t._v(" "),e("li",[t._v("BCM4331 and BCM43224 based WiFi cards.\n"),e("ul",[e("li",[t._v("See "),e("a",{attrs:{href:"https://dortania.github.io/Wireless-Buyers-Guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wireless Buyers guide"),e("OutboundLink")],1),t._v(" for potential cards to upgrade to.")]),t._v(" "),e("li",[t._v("Potential work-around is to inject a patched IO80211Family, see here for more details: "),e("a",{attrs:{href:"https://github.com/khronokernel/IO80211-Patches",target:"_blank",rel:"noopener noreferrer"}},[t._v("IO80211 Patches"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[t._v("Certain SATA controllers dropped\n"),e("ul",[e("li",[t._v("For some reason, Apple removed the AppleIntelPchSeriesAHCI class from AppleAHCIPort.kext. Due to the outright removal of the class, trying to spoof to another ID (generally done by SATA-unsupported.kext) can fail for many and create instability for others.")]),t._v(" "),e("li",[t._v("A partial fix is to inject Catalina's version with any conflicting symbols being patched. You can find a sample kext here: "),e("a",{attrs:{href:"https://github.com/dortania/OpenCore-Install-Guide/blob/master/extra-files/CtlnaAHCIPort.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("Catalina's patched AppleAHCIPort.kext"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("We recommend setting the MinKernel value to 20.0.0 for the kext "),e("code",[t._v("CtlnaAHCIPort.kext")]),t._v(" to avoid any potential conflicts. This way, it will work in both Catalina and Big Sur so you can remove SATA-unsupported if you want.")])])])]),t._v(" "),e("p",[t._v("Other notable changes:")]),t._v(" "),e("ul",[e("li",[t._v("MSI Navi users no longer require the "),e("code",[t._v("ATY,rom")]),t._v("/"),e("code",[t._v("-wegnoegpu")]),t._v(" patch to boot the installer")]),t._v(" "),e("li",[t._v("Stage 2 installation requiring working NVRAM\n"),e("ul",[e("li",[t._v("Asus 9 series: For more info, see here: "),e("a",{attrs:{href:"https://www.reddit.com/r/hackintosh/comments/jw7qf1/haswell_asus_z97_big_sur_update_and_installation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Haswell ASUS Z97 Big Sur Update Thread"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("X99 and X299 users with broken NVRAM will need to install on another machine and move the SSD when done")])])])]),t._v(" "),e("h3",{attrs:{id:"up-to-date-kexts-bootloader-and-config-plist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#up-to-date-kexts-bootloader-and-config-plist"}},[t._v("#")]),t._v(" Up-to-date kexts, bootloader and config.plist")]),t._v(" "),e("p",[t._v("Ensure that you have the latest version of OpenCore, kexts and config.plist so it won't have any odd compatibility issues. You can simply download and update OpenCore and kexts as mentioned here:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/universal/update.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Updating OpenCore and macOS"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("If you're unsure what version of OpenCore you're using, you can run the following in terminal:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("nvram 4D1FDA02-38C7-4A6A-9CC6-4BCCA8B30102:opencore-version\n")])])]),e("ul",[e("li",[t._v("Note: The about command will require you to include bit "),e("code",[t._v("0x2")]),t._v(" in "),e("code",[t._v("Misc -> Security -> ExposeSensitiveData")]),t._v(", recommended values for ExposeSensitiveData is "),e("code",[t._v("0x6")]),t._v(" which includes bits "),e("code",[t._v("0x2")]),t._v(" and "),e("code",[t._v("0x4")]),t._v(".")])]),t._v(" "),e("h4",{attrs:{id:"amd-note"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amd-note"}},[t._v("#")]),t._v(" AMD Note")]),t._v(" "),e("p",[e("strong",[t._v("Reminder for AMD Users")]),t._v(": Don't forget to update your kernel patches with those provided by AMD OS X, otherwise you'll be unable to boot Big Sur:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/AMD-OSX/AMD_Vanilla/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AMD OSX Patches"),e("OutboundLink")],1)])]),t._v(" "),e("h4",{attrs:{id:"intel-hedt-note"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intel-hedt-note"}},[t._v("#")]),t._v(" Intel HEDT Note")]),t._v(" "),e("p",[t._v("For X79, X99 and X299 users, pay close attention to the below. Big Sur has added new requirements for ACPI, so you'll need to grab some new SSDTs:")]),t._v(" "),e("ul",[e("li",[t._v("X79\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-UNC.dsl",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-UNC"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[t._v("X99\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-UNC.dsl",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-UNC"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-RTC0-RANGE.dsl",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-RTC0-RANGE"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[t._v("X299\n"),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-RTC0-RANGE.dsl",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-RTC0-RANGE"),e("OutboundLink")],1)])])])]),t._v(" "),e("p",[t._v("For those who'd like precompiled files, see here:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/ssdt-methods/ssdt-prebuilt.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting started with ACPI: Prebuilt SSDTs"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"known-issues"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[t._v("#")]),t._v(" Known issues")]),t._v(" "),e("p",[t._v("With Big Sur, quite a bit broke. Mainly the following:")]),t._v(" "),e("ul",[e("li",[t._v("Lilu\n"),e("ul",[e("li",[t._v("Mainly user-space patching has severely broke, meaning certain functionality may have broken")]),t._v(" "),e("li",[t._v("These include:\n"),e("ul",[e("li",[t._v("DiskArbitrationFixup")]),t._v(" "),e("li",[t._v("MacProMemoryNotificationDisabler")]),t._v(" "),e("li",[t._v("SidecarEnabler")]),t._v(" "),e("li",[t._v("SystemProfilerMemoryFixup")]),t._v(" "),e("li",[t._v("NoTouchID")]),t._v(" "),e("li",[t._v("WhateverGreen's DRM and -cdfon patches")])])])])]),t._v(" "),e("li",[t._v("AirportBrcmFixup\n"),e("ul",[e("li",[t._v("Forcing a specific driver to load with "),e("code",[t._v("brcmfx-driver=")]),t._v(" may help\n"),e("ul",[e("li",[t._v("BCM94352Z users for example may need "),e("code",[t._v("brcmfx-driver=2")]),t._v(" in boot-args to resolve this, other chipsets will need other variables.")])])]),t._v(" "),e("li",[t._v("Setting MaxKernel to 19.9.9 for AirPortBrcm4360_Injector.kext may help. More information "),e("a",{attrs:{href:"https://github.com/acidanthera/AirportBrcmFixup/blob/master/README.md#please-pay-attention",target:"_blank",rel:"noopener noreferrer"}},[t._v("from the repo"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[t._v("SATA Support broken\n"),e("ul",[e("li",[t._v("Due to Apple dropping the AppleIntelPchSeriesAHCI class in AppleAHCIPort.kext")]),t._v(" "),e("li",[t._v("To resolve, add "),e("a",{attrs:{href:"https://github.com/dortania/OpenCore-Install-Guide/blob/master/extra-files/CtlnaAHCIPort.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("Catalina's patched AppleAHCIPort.kext"),e("OutboundLink")],1),t._v(" with the MinKernel set to 20.0.0")])])]),t._v(" "),e("li",[t._v("XhciPortLimit broken in macOS 11.3 Beta 2 and newer\n"),e("ul",[e("li",[t._v("With macOS 11.3 and newer, "),e("a",{attrs:{href:"https://github.com/dortania/bugtracker/issues/162",target:"_blank",rel:"noopener noreferrer"}},[t._v("XhciPortLimit is broken resulting in boot loops"),e("OutboundLink")],1),t._v(". We advise users either install an older OS(ie. macOS 10.15, Catalina) or find a 11.2.3 or older Big Sur installer\n"),e("ul",[e("li",[t._v("For education purposes, we have a copy provided here: "),e("a",{attrs:{href:"https://archive.org/details/install-mac-os-11.2.3-20-d-91",target:"_blank",rel:"noopener noreferrer"}},[t._v("macOS 11.2.3 InstallAssistant(macOS)"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("If you've already "),e("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/usb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mapped your USB ports"),e("OutboundLink")],1),t._v(" and disabled "),e("code",[t._v("XhciPortLimit")]),t._v(", you can boot macOS 11.3+ without issue")])])])])])]),t._v(" "),e("p",[t._v("And while not an issue, SIP has now gained a new bit so to properly disable SIP you need to set "),e("code",[t._v("csr-active-config")]),t._v(" to "),e("code",[t._v("FF0F0000")]),t._v(". See here for more info: "),e("RouterLink",{attrs:{to:"/troubleshooting/extended/post-issues.html#disabling-sip"}},[t._v("Disabling SIP")])],1),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("Guides have been updated to accommodate Big Sur, see the applicable OS environment for you:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/installer-guide/mac-install.html"}},[t._v("macOS users")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/installer-guide/windows-install.html"}},[t._v("Windows users")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/installer-guide/linux-install.html"}},[t._v("Linux users")])],1)]),t._v(" "),e("h2",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),e("h3",{attrs:{id:"stuck-at-forcing-cs-runtime-for-entitlement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stuck-at-forcing-cs-runtime-for-entitlement"}},[t._v("#")]),t._v(" Stuck at "),e("code",[t._v("Forcing CS_RUNTIME for entitlement")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(275),alt:"Credit to Stompy for image"}})]),t._v(" "),e("p",[t._v("This is actually the part at where macOS will seal the system volume, and where it may seem that macOS has gotten stuck. "),e("strong",[t._v("DO NOT RESTART")]),t._v(" thinking you're stuck, this will take quite some time to complete, otherwise you'll break your installation.")]),t._v(" "),e("h3",{attrs:{id:"stuck-at-pci-configuration-begins-for-intel-s-x99-and-x299-boards"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stuck-at-pci-configuration-begins-for-intel-s-x99-and-x299-boards"}},[t._v("#")]),t._v(" Stuck at "),e("code",[t._v("PCI Configuration Begins")]),t._v(" for Intel's X99 and X299 boards")]),t._v(" "),e("p",[e("img",{attrs:{src:a(383),alt:""}})]),t._v(" "),e("p",[t._v("As previously mentioned, Intel HEDT motherboards may have some issues revolving around their RTC device in ACPI. To resolve, you'll need to look at your RTC device and see which regions are missing. For more information, see here: "),e("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-RTC0-RANGE.dsl",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-RTC0-RANGE.dsl"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"stuck-on-ramrod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stuck-on-ramrod"}},[t._v("#")]),t._v(" Stuck on "),e("code",[t._v("ramrod")]),t._v("(^^^^^^^^^^^^^)")]),t._v(" "),e("p",[e("img",{attrs:{src:a(276),alt:"Credit to Notiflux for image"}})]),t._v(" "),e("p",[t._v("If you get stuck around the "),e("code",[t._v("ramrod")]),t._v(" section (specifically, it boots, hits this error, and reboots again back into this, causing a loop), this hints that your SMC emulator is broken. To fix this, you have 2 options:")]),t._v(" "),e("ul",[e("li",[t._v("Ensure you're using the latest builds of VirtualSMC and Lilu, with the "),e("code",[t._v("vsmcgen=1")]),t._v(" boot-arg")]),t._v(" "),e("li",[t._v("Switch over to "),e("a",{attrs:{href:"https://bitbucket.org/RehabMan/os-x-fakesmc-kozlek/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rehabman's FakeSMC"),e("OutboundLink")],1),t._v(" (you can use the "),e("code",[t._v("MinKernel")]),t._v("/"),e("code",[t._v("MaxKernel")]),t._v(" trick mentioned above to restrict FakeSMC to Big Sur and up)")])]),t._v(" "),e("p",[t._v("And when switching kexts, ensure you don't have both FakeSMC and VirtualSMC enabled in your config.plist, as this will cause a conflict.")]),t._v(" "),e("h3",{attrs:{id:"x79-and-x99-kernel-panic-on-iopcifamily"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#x79-and-x99-kernel-panic-on-iopcifamily"}},[t._v("#")]),t._v(" X79 and X99 Kernel Panic on IOPCIFamily")]),t._v(" "),e("p",[t._v("This is due to an unused uncore PCI Bridges being enabled in ACPI, and so IOPCIFamily will kernel panic when probing unknown devices. To resolve, you'll need to add "),e("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-UNC.dsl",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-UNC"),e("OutboundLink")],1),t._v(" to your system")]),t._v(" "),e("h3",{attrs:{id:"deviceproperties-injection-failing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deviceproperties-injection-failing"}},[t._v("#")]),t._v(" DeviceProperties injection failing")]),t._v(" "),e("p",[t._v("With Big Sur, macOS has become much pickier with devices being present in ACPI. Especially if you're injecting important properties for WhateverGreen or AppleALC, you may find they're no longer applying. To verify whether your ACPI defines your hardware, check for the "),e("code",[t._v("acpi-path")]),t._v(" property in "),e("a",{attrs:{href:"https://github.com/khronokernel/IORegistryClone/blob/master/ioreg-210.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("IORegistryExplorer"),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("p",[e("img",{attrs:{src:a(384),alt:""}})]),t._v(" "),e("p",[t._v("If no property is found, you'll need to create an SSDT that provides the full pathing as you likely have a PCI Bridge that is not documented in your ACPI tables. An example of this can be found here: "),e("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/tree/master/Docs/AcpiSamples/Source/SSDT-BRG0.dsl",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSDT-BRG0"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Note")]),t._v(": This issue may also pop up in older versions of macOS, however Big Sur is most likely to have issues.")])]),t._v(" "),e("h3",{attrs:{id:"keyboard-and-mouse-broken"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyboard-and-mouse-broken"}},[t._v("#")]),t._v(" Keyboard and Mouse broken")]),t._v(" "),e("p",[t._v("For certain legacy systems, you may notice that while the USB ports work your HID-based devices such as the keyboard and mouse may be broken. To resolve this, add the following patch:")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("IOHIDFamily Patch")]),t._v(" "),e("p",[t._v("config.plist -> Kernel -> Patch:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Key")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Base")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("_isSingleUser")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Count")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Enabled")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("True")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Find")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Data")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Identifier")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("com.apple.iokit.IOHIDFamily")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Limit")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Mask")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Data")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MaxKernel")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MinKernel")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("20.0.0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Replace")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Data")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("B801000000C3")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ReplaceMask")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Data")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Skip")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0")])])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://applelife.ru/threads/ustanovka-macos-big-sur-11-0-beta-na-intel-pc-old.2944999/page-81#post-884400",target:"_blank",rel:"noopener noreferrer"}},[t._v("Source"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"early-kernel-panic-on-max-cpus-from-firmware-not-yet-initialized"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#early-kernel-panic-on-max-cpus-from-firmware-not-yet-initialized"}},[t._v("#")]),t._v(" Early Kernel Panic on "),e("code",[t._v("max_cpus_from_firmware not yet initialized")])]),t._v(" "),e("p",[t._v("If you receive an early kernel panic on "),e("code",[t._v("max_cpus_from_firmware not yet initialized")]),t._v(", this is due to the new "),e("code",[t._v("acpi_count_enabled_logical_processors")]),t._v(" method added in macOS Big Sur's kernel. To resolve, please ensure you're on OpenCore 0.6.0 or newer with the "),e("code",[t._v("AvoidRuntimeDefrag")]),t._v(" Quirk enabled.")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Note")]),t._v(": Due to how early this kernel panic happens, you may only be able to log it either via serial or rebooting in a known working install of macOS and checking your panic logged in NVRAM.\n"),e("ul",[e("li",[t._v("Most users will see this panic simply as "),e("code",[t._v("[EB|#LOG:EXITBS:START]")])])])])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Example Kernel Panic")]),t._v(" "),e("p",[t._v("On-screen:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(385),alt:""}})]),t._v(" "),e("p",[t._v("Via serial logging or NVRAM:")]),t._v(" "),e("p",[e("img",{attrs:{src:a(386),alt:""}})])]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Legacy Edge Case")]),t._v(" "),e("p",[t._v("On certain hardware, mainly the HP DC7900, the kernel still can't determine exactly how many threads your hardware supports. This will result in the aforementioned kernel panic and so we need to hard code the CPU core's value.")]),t._v(" "),e("p",[t._v("To do this, Add the following patch(replacing the 04 from B8 "),e("strong",[t._v("04")]),t._v(" 00 00 00 C3 with the amount of CPU threads your hardware supports):")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Key")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Base")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("_acpi_count_enabled_logical_processors")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Count")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Enabled")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("True")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Find")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Data")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Identifier")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Kernel")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Limit")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Mask")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Data")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MaxKernel")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("MinKernel")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("20.0.0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Replace")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Data")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("B804000000C3")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ReplaceMask")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Data")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Skip")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Integer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("0")])])])])]),t._v(" "),e("h3",{attrs:{id:"cannot-update-to-newer-versions-of-big-sur"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cannot-update-to-newer-versions-of-big-sur"}},[t._v("#")]),t._v(" Cannot update to newer versions of Big Sur")]),t._v(" "),e("p",[t._v("Generally there's 2 main culprits:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#broken-update-utility"}},[t._v("Broken Update Utility")]),t._v(" "),e("ul",[e("li",[t._v("Most common error if running a beta, try this first")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#broken-seal"}},[t._v("Broken Seal")])])]),t._v(" "),e("h4",{attrs:{id:"broken-update-utility"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#broken-update-utility"}},[t._v("#")]),t._v(" Broken Update Utility")]),t._v(" "),e("p",[t._v("Generally seen with every beta cycle, simply unenroll and enroll again:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unenroll from beta catalog")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /System/Library/PrivateFrameworks/Seeding.framework/Resources/seedutil unenroll\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Enroll back in")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" /System/Library/PrivateFrameworks/Seeding.framework/Resources/seedutil enroll DeveloperSeed\n")])])]),e("p",[t._v("Then check back with settings, and it should pop up. If not, run the following:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# List software updates via terminal")]),t._v("\nsoftwareupdate "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-l")]),t._v("\n")])])]),e("p",[t._v("This should help kick the update utility back into gear. If you still have issues, check the "),e("a",{attrs:{href:"#broken-seal"}},[t._v("Broken Seal")]),t._v(" section.")]),t._v(" "),e("h4",{attrs:{id:"broken-seal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#broken-seal"}},[t._v("#")]),t._v(" Broken Seal")]),t._v(" "),e("p",[t._v("With Apple's new snapshotting for the system drive, they now depend heavily on this for OS updates to apply correctly. So when a drove's seal is broken, macOS will refuse to update the drive.")]),t._v(" "),e("p",[t._v("To verify yourself, check that "),e("code",[t._v("Snapshot Sealed")]),t._v(" returns as YES:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# List all APFS volumes")]),t._v("\ndiskutil apfs list\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Look for your system volume")]),t._v("\nVolume disk1s8 A604D636-3C54-4CAA-9A31-5E1A460DC5C0\n        ---------------------------------------------------\n        APFS Volume Disk "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Role"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":   disk1s8 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("System"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Name:                      Big Sur HD "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Case-insensitive"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Mount Point:               Not Mounted\n        Capacity Consumed:         "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15113809920")]),t._v(" B "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15.1")]),t._v(" GB"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        Sealed:                    Broken\n        FileVault:                 No\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n        Snapshot:                  4202EBE5-288B-4701-BA1E-B6EC8AD6397D\n        Snapshot Disk:             disk1s8s1\n        Snapshot Mount Point:      /\n        Snapshot Sealed:           Yes\n")])])]),e("p",[t._v("If it returns "),e("code",[t._v("Snapshot Sealed: Broken")]),t._v(", then you'll want to go through the following:")]),t._v(" "),e("ul",[e("li",[t._v("Update to OpenCore 0.6.4 or newer\n"),e("ul",[e("li",[t._v("Specifically commit "),e("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/commit/1b0041493d4693f9505aa6415d93079ea59f7ab0",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("ba10b5d")]),e("OutboundLink")],1),t._v(" or newer is required")])])]),t._v(" "),e("li",[t._v("Revert to older snapshots\n"),e("ul",[e("li",[t._v("Mainly for those who have tampered with the system volume")]),t._v(" "),e("li",[t._v("See here how to revert: "),e("RouterLink",{attrs:{to:"/troubleshooting/extended/post-issues.html#rolling-back-apfs-snapshot"}},[t._v("Rolling back APFS Snapshots")])],1)])])]),t._v(" "),e("h3",{attrs:{id:"kernel-panic-on-rooting-from-the-live-fs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kernel-panic-on-rooting-from-the-live-fs"}},[t._v("#")]),t._v(" Kernel Panic on "),e("code",[t._v("Rooting from the live fs")])]),t._v(" "),e("p",[t._v("Full error:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Rooting from the live fs of a sealed volume is not allowed on a RELEASE build\n")])])]),e("p",[t._v("This is due to issues around Secure Boot boot being enabled in Beta 10 with older versions of OpenCore. Simply update to 0.6.4 to resolve")]),t._v(" "),e("ul",[e("li",[t._v("Specifically commit "),e("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/commit/1b0041493d4693f9505aa6415d93079ea59f7ab0",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("ba10b5d")]),e("OutboundLink")],1),t._v(" or newer is required")])]),t._v(" "),e("h3",{attrs:{id:"asus-z97-and-hedt-ie-x99-and-x299-failing-stage-2-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#asus-z97-and-hedt-ie-x99-and-x299-failing-stage-2-installation"}},[t._v("#")]),t._v(" Asus Z97 and HEDT(ie. X99 and X299) failing Stage 2 Installation")]),t._v(" "),e("p",[t._v("With Big Sur, there's a higher reliance on native NVRAM for installation otherwise the installer will get stuck in a reboot loop. To resolve this you'll need to either:")]),t._v(" "),e("ul",[e("li",[t._v("Install Big Sur on another machine, then transfer the drive")]),t._v(" "),e("li",[t._v("Fix the motherboard's NVRAM\n"),e("ul",[e("li",[t._v("mainly applicable with Asus's Z97 series")])])])]),t._v(" "),e("p",[t._v("For the latter, see here: "),e("a",{attrs:{href:"https://www.reddit.com/r/hackintosh/comments/jw7qf1/haswell_asus_z97_big_sur_update_and_installation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Haswell ASUS Z97 Big Sur Update Thread"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"laptops-kernel-panicking-on-cannot-perform-kext-scan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laptops-kernel-panicking-on-cannot-perform-kext-scan"}},[t._v("#")]),t._v(" Laptops kernel panicking on "),e("code",[t._v("cannot perform kext scan")])]),t._v(" "),e("p",[t._v("This is due to multiple copies of the same kext being in your kernel cache, and to be more specific having multiple copies of VoodooInput. Look over your "),e("code",[t._v("Kernel -> Add")]),t._v(" and verify you only have 1 copy of VoodooInput enabled.")]),t._v(" "),e("ul",[e("li",[t._v("Note: Both VoodooI2C and VoodooPS2 have a bundled copy of VoodooInput, which you disable is up to personal preference")])]),t._v(" "),e("h3",{attrs:{id:"reboot-on-appleusbhostport-createdevice-failed-to-create-device-on-macos-11-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reboot-on-appleusbhostport-createdevice-failed-to-create-device-on-macos-11-3"}},[t._v("#")]),t._v(' Reboot on "AppleUSBHostPort::createDevice: failed to create device" on macOS 11.3+')]),t._v(" "),e("p",[t._v("This is due to "),e("a",{attrs:{href:"https://github.com/dortania/bugtracker/issues/162",target:"_blank",rel:"noopener noreferrer"}},[t._v("XhciPortLimit breaking with macOS 11.3 and newer"),e("OutboundLink")],1),t._v(", to resolve you "),e("strong",[t._v("must")]),t._v(" disable XhciPortLimit under Kernel -> Quirks. Please ensure you've "),e("a",{attrs:{href:"https://dortania.github.io/OpenCore-Post-Install/usb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mapped your USB ports correctly"),e("OutboundLink")],1),t._v(" before doing so.")])])}),[],!1,null,null,null);e.default=i.exports}}]);