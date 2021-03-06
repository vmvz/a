#!/usr/bin/env bash
rm -rf /etc/apt/sources.list*
cat > /etc/apt/sources.list <<END
deb http://mirrors.aliyun.com/debian/ stretch main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ stretch main non-free contrib
deb http://mirrors.aliyun.com/debian-security stretch/updates main
deb-src http://mirrors.aliyun.com/debian-security stretch/updates main
deb http://mirrors.aliyun.com/debian/ stretch-updates main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ stretch-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ stretch-backports main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ stretch-backports main non-free contrib
END
apt-get -q -y update
apt-get -y install net-tools htop lrzsz vim wget screen curl git build-essential

apt-get -y install yubikey-luks yubikey-personalization yubico-piv-tool
cd /usr/lib && git clone https://github.com/cornelinux/yubikey-luks.git
cd yubikey-luks && chmod 700 *;cp yubikey-luks-open /usr/bin; cp ykluks.cfg /etc/; cp yubikey-luks-suspend.service /etc/systemd/system; systemctl enable yubikey-luks-suspend.service

ifconfig
